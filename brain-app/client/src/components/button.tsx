import { LucideIcon } from "lucide-react";


interface ButtonProps{
    title:string
    Icon: LucideIcon;
    color:string;
}

const Button = ({
    title,
    Icon,
    color,
}:ButtonProps) => {
    return ( 
        <div className={`px-2 py-2 ${color}  rounded-lg flex w- gap-4`}>
            <Icon size="20px"  color="white"/>
            <p className=" hidden text-sm font-semibold text-white">{title}</p>
        </div>
     );
}
 
export default Button;