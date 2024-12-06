import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [auth,setAuth] = useState<boolean>(false);
    const navigate = useNavigate();


    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(auth){
            const username:string = (document.getElementById('l-user') as HTMLInputElement).value;
            const password:string = (document.getElementById('l-pass') as HTMLInputElement).value;
            try {
                await axios.post("http://localhost:3000/user/signin",{
                    username,
                    password
                })
                setAuth(prev=>!prev)
            } catch (error) {
                console.log(error);
            }
        }else{
            const username:string = (document.getElementById('s-user') as HTMLInputElement).value;
            const password:string = (document.getElementById('s-pass') as HTMLInputElement).value;

            try {
                const res = await axios.post("http://localhost:3000/user/signup",{
                    username,
                    password
                });
                localStorage.setItem("token",res.data.token)
                navigate('/')
            } catch (error) {
                console.log(error);
            }
        }
    }

    return ( 
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-96 border p-8 justify-center items-center rounded-lg flex flex-col gap-5">
                <h2 className="font-semibold text-xl">{auth?"Sign In":"Sign up"}</h2>
                <form action="" className="flex flex-col gap-6" onSubmit={onSubmit}>
                    <input id={auth?'l-user':'s-user'} type="text" className="border border-black rounded-md px-4 py-1" placeholder=" enter the username"/>
                    <input id={auth?'l-pass':'s-pass'} type="password" className="border border-black rounded-md px-4 py-1" placeholder=" enter the password"/>
                    <button className="text-white bg-blue-500 px-4 py-1">Submit</button>
                </form>
                <p>{auth?"I have account ":"Create Account "}<span className="text-blue-700 cursor-pointer" onClick={()=>setAuth(prev=>!prev)}>click here</span></p>
            </div> 
        </div>
     );
}
 
export default Auth;