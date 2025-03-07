import { API_BASE_URL } from "@/constants"
import ActivityCard from "./activity-card"
import { serverFetch } from "@/lib/server-fetch";
import ClassesCard from "../../components/Classes-card";


// export default async function getAllClasses() {
//     const classes = await serverFetch("http://localhost:4000/api/v1/classes");
//     console.log(classes);

//     return (
//         <div>
//             <h1>Classes</h1>
//             {classes.map((activity) => <ClassesCard key={activity.id} activity={activity} />)}
//         </div>
//     )
    

// }