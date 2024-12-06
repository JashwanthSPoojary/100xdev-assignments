import { useEffect, useRef, useState } from "react";

const App = () => {
  const [socket,setSocket] = useState<WebSocket | null>(null);
  const [message,setMessage] = useState<string[]>([]);
  

  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = () =>{
  if(!socket || !inputRef.current ) return;
    socket.send(JSON.stringify({
      type:"chat",
      payload:{
        message:inputRef.current.value
      }
    }));
  }
 

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:9090')
    socket.onopen = () => {
      socket.send(JSON.stringify(
        {
          type:"join",
          payload:{
            roomId:"123"
          }
        }
      ))
    }
    setSocket(socket);
    socket.onmessage = (event) => {
      setMessage(prev => [...prev,event.data])
    }

  },[]);
  return ( 
    <div className="">
      <div>
        {message.map((elm)=>(
          <li>{elm}</li>
        ))}
      </div>
      <input ref={inputRef} type="text" />
      <button onClick={onSubmit}>submilt</button>
    </div>
   );
}
 
export default App;