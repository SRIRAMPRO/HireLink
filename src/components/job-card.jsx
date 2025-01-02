import { saveJob } from "@/api/apijobs";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteJob } from "@/api/apijobs";
import { BarLoader } from "react-spinners";


const JobCard = ({
    job,
    isMyJob=false,
    savedInit=false,
    onSavedJobaved=()=>{},
    onDelete = () => {},
}) => {

    const [saved,setSaved]=useState(savedInit);

    const {user}=useUser();

const {
    fn:fnSavedJob,
    data:savedJob,
    loading:loadingSavedJob,
}=useFetch(saveJob,{
    alreadySaved:saved,
}
);




const handleSaveJob=async()=>{
    await fnSavedJob({
        user_id:user.id,
        job_id:job.id,
    })
    onJobSaved();
}

const {loading:loadingDeleteJob,
    fn:fnDeleteJob,
    data:deletedJob,
}=useFetch(deleteJob,{
    job_id:job.id
});

const handleDeleteJob=async()=>{
    await fnDeleteJob();
    onDelete();
}


useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

return (
    <Card className="flex flex-col">
        {loadingDeleteJob &&(
            <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
        )}
        <CardHeader>
            <CardTitle key={job.id} className="flex justify-between font-bold">
                {job.title}
            
            {isMyJob && <Trash2Icon fill="red" size={18} className="text-red-300 cursor-pointer" 
            onClick={handleDeleteJob} />}
            </CardTitle>
        </CardHeader>
        <CardContent  className="flex flex-col gap-4 flex-1">
            <div  className="flex justify-between">
                {job.company && <img src={job.company.logo_url} alt={job.company.name} className="h-6" />}
            </div>
            <div className="flex gap-2 items-center">
                <MapPinIcon size={18} /> {job.location}
            </div>
            <hr/>
            {job.description.substring(0,job.description.indexOf('.'))}
            </ CardContent>
            <CardFooter className="flex gap-2">
                <Link to={`/job/${job.id}`} className="flex-1">
                <Button variant="secondary" className="w-full">
            More Details
          </Button>
                </Link>
                {!isMyJob && (
                    <Button variant="outline" 
                     className="w-15"
                      onClick={handleSaveJob}
                      disabled={loadingSavedJob}>
                    
                {saved?(
                <Heart size={20} stroke="red" fill="red"/>
            ):
            (
                <Heart size={20}  />)}

                </Button>
                )}
                
                </CardFooter>
    </Card>
  
  )
}


export default JobCard;