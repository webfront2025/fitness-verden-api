'use client';
// src/components/Rating.jsx
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
const API = process.env.NEXT_PUBLIC_API_URL;
export default function Rating({ classId }) {
    const [ratings, setRatings] = useState([]);
    const [userRating, setUserRating] = useState(null);
    const [hasRated, setHasRated] = useState(false);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
         if (!API || !classId) return;
        fetchRatings();
    }, [classId]);

    async function fetchRatings() {
        try {
        const response = await fetch(`${API}/classes/${classId}/ratings`);
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        const data = await response.json();
        setRatings(data);

        // Calculate average rating
        const totalRating = data.reduce((acc, rating) => acc + rating.rating, 0);
        const avg = data.length > 0 ? Math.round((totalRating / data.length) * 2) / 2 : 0;
        setAverageRating(avg);

        // Check if current user has rated
        const userId = getCookie('fitness_uid');
        const userHasRated = data.some(rating => rating.userId === userId);
        setHasRated(userHasRated);
        if (userHasRated) {
            const userRating = data.find(rating => rating.userId === userId);
            setUserRating(userRating.rating);
        }
         } catch (e) {
      console.error('Fetch ratings error', e);
      setRatings([]);
      setAverageRating(0);
    }
    }

    async function handleRatingSubmit(rating) {
        if (hasRated || !API) return;

        const userId = getCookie('fitness_uid');
        const token = getCookie('fitness_token');

        try {
            const response = await fetch(`${API}/classes/${classId}/ratings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    rating,
                    userId
                })
            });

            if (response.ok) {
                setHasRated(true);
                setUserRating(rating);
                fetchRatings(); // Refresh ratings
            }
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <div className="flex">
                    {[1, 2, 3, 4, 5].map(rating => {
                        const fullRat = averageRating >= rating;
                        const halRat = averageRating >= rating - 0.5 && averageRating < rating;
                        
                        return (
                            <div key={rating} className="w-5 h-5">
                                <div
                                    className={`w-full h-full ${fullRat ? 'bg-red-300' : halRat ? 'bg-red-300 w-1/2' : 'bg-gray-300'}`}
                                />
                            </div>
                        );
                    })}
                </div>
                <span className="text-sm text-gray-600">({ratings.length} ratings)</span>
            </div>

            {!hasRated && (
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(rating => (
                        <button
                            key={rating}
                            onClick={() => handleRatingSubmit(rating)}
                            className={`w-5 h-5 rounded-sm border ${
                                userRating === rating ? 'bg-red-300' : 'bg-gray-200'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}