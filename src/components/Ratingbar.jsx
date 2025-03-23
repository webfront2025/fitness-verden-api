// "use client";

// import { useState, useEffect } from "react";

// export default function RatingBar({ classId }) {
//     const [rating, setRating] = useState(0);
//     const [hasRated, setHasRated] = useState(false);
//     const [averageRating, setAverageRating] = useState(null);

//     useEffect(() => {
//         async function fetchRatings() {
//             const response = await fetch(`http://localhost:4000/api/v1/classes/${classId}/ratings`);
//             const data = await response.json();
            
//             if (data && data.ratings.length > 0) {
//                 const userHasRated = data.ratings.some(r => r.userId === "CURRENT_USER_ID"); // Replace with actual user ID check
//                 setHasRated(userHasRated);
                
//                 const avg = data.ratings.reduce((sum, r) => sum + r.value, 0) / data.ratings.length;
//                 setAverageRating(avg.toFixed(1));
//             }
//         }
//         fetchRatings();
//     }, [classId]);

//     async function submitRating(newRating) {
//         if (hasRated) {
//             alert("You have already rated this class!");
//             return;
//         }

//         const response = await fetch(`http://localhost:4000/api/v1/classes/${classId}/ratings`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ value: newRating, userId: "CURRENT_USER_ID" }), // Replace with actual user ID
//         });

//         if (response.ok) {
//             setHasRated(true);
//             setRating(newRating);
//         }
//     }

//     return (
//         <div className="rating-container">
//             <h3>Rate this Class</h3>
//             <div className="stars">
//                 {[1, 2, 3, 4, 5].map((num) => (
//                     <button key={num}  className="w-6 h-3 border border-gray-500 rounded-sm" onClick={() => submitRating(num)} disabled={hasRated}>
//                         {num} 
//                     </button>
//                 ))}
//             </div>
//             {averageRating && <p>Average Rating: {averageRating}</p>}
//         </div>
//     );
// }
// // ⭐