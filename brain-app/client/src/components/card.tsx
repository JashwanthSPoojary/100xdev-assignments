import { DeleteIcon } from "lucide-react";

interface CardProps {
    title:string,
    description:string,
    date:string,
}

const Card = ({
    title,
    description,
    date
}:CardProps) => {
    return ( 
    <div className="border w-60 px-6 py-5 h-60 flex flex-col gap-5">
        <div className="flex justify-between">
            <p>{title}</p>
            <DeleteIcon/>
        </div>
        <div className="">{description}</div>
        <div className="">{date}</div>
    </div> 
    );
}
 
export default Card;