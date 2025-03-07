// import Image from 'next/image'
// import Link from 'next/link'
// import Ratings from './Rating';

// export default function ClassesCard({ activity }) {
//   console.log("qwqeqwewr",activity);
//     return (
      
//       <article className="w-[33vw] h-full flex flex-col justify-between">
//             <Link href={`/classes/${activity.id}`}>
//             <Image 
//                 src={activity.asset.url} 
//                 width={5000} height={3333} 
//                 alt="people training" 
//                 className="w-[33vw] h-[120px] rounded-2xl"
//                 priority 
//             />
//             <h2 className="text-[16px]">{activity.className}</h2>
//             </Link>
//             <Ratings classId={activity.id} />
//         </article>
//     );
//   }

// gammel kode og tailwind.org
import Image from 'next/image'
import Link from 'next/link'
import Ratings from './Rating';

export default function ClassesCard({ activity }) {
  if (!activity) {
    return <p>Error: Classes data is missing</p>;
  }

  return (
    <article className="w-[33vw] h-full flex flex-col justify-between">
      <Link href={`/classes/${activity.id}`}>
        <Image 
          src={activity.asset?.url || "/default-image.jpg"} 
          width={500} 
          height={300} 
          alt="people training" 
          className="w-[33vw] h-[120px] rounded-2xl"
          priority 
        />
        <h2 className="text-[16px]">{activity.className}</h2>
      </Link>
      <Ratings classId={activity.id} />
    </article>
  );
}








    
    // // vise billeder & slider
    // export default function ClassesCard({ activity }) {
    //     // const randomImage= activity.asset.url[Math.floor(Math.random()*3)]
    //     return (
    //         <Link href={`/classes/${activity.id}`}> 
    //         <article>
    //             <h2>{activity.name}</h2>
    //             <Image src={activity.asset.url} width={400} height={400} alt=""/>
    //         </article>
    //         </Link>
    //     )
    // }