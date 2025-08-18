import { CLASSES_URL } from "@/constants"
export default async function Rating({classId}) {
    const response = await fetch(`${CLASSES_URL}/${classId}/ratings`, { cache: 'no-store' });
    const ratings = await response.json();
    // console.log("ratingssss",ratings);
    
    const helRating = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const avRating = Math.round(helRating / ratings.length * 2) / 2;     
    return (
          
        <div className="flex w-2/3">
          {[1, 2, 3, 4, 5].map(rating => {
            const fullRat = avRating >= rating
            const halRat = avRating >= rating - 0.5 && avRating< rating
    
            return (
              
              <div key={rating} className="w-5 h-5">
              <div
                className={`w-full h-full ${fullRat ? 'bg-red-300' : halRat ? 'bg-red-300 w-1/2' : 'bg-gray-300'}`}
              />
            </div>
            )
          })}
        </div>
        
      )
}