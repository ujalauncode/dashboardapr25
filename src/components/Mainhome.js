import axios from 'axios'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import UserCard from '../components/UserCard';
import '../components/home.css'
import { PencilIcon } from '@heroicons/react/24/outline';


function Mainhome(props) {
  const[data,setdata] = useState(null)
//  const[count, setCount] = useState(0)
const[showfarm, setshowfarm] = useState(false)
const[userdata,setuserdata] = useState({
  title:'',
  asignedtask:'',
  taskcount:'',
  timing:''

})
const[getformdata, setgetformdata] = useState(null)

const chnagecolor =useRef()

const postformdata = async (e) => {
  e.preventDefault();
  try {
    console.log("heyyy start submit")
    let response = await axios.post("http://localhost:5007/api/user/datapost", userdata);
    console.log("end submit")
    if (response.status === 201) {
      console.log("Data sent successfully");
      setdata(true)
    } else {
      console.log("Unexpected status:", response.status);
    }
  } catch (error) {
    console.error("Error while posting data:", error);
  }
};



 

const getdata =async()=>{
  try {
    const res = await axios.get('http://localhost:5004/api/user/getdata')
  setgetformdata(res.data)
  if(res.data.length>0){
    setdata(true)
  }
  console.log( "form dara", res.data)
  console.log(res.data[0].title)
  } catch (error) {
    
  }

}


const newdata =async()=>{
  console.log("getting data")
  const x  = await axios.get('http://localhost:3007/api/auth/getusers')
  console.log("get data", x.data)
}

useEffect(()=>{
  
  getdata()
},[])

const users = [
  { id: 1, name: "Ujala", age: 22, city: "Delhi" },
  { id: 2, name: "Ravi", age: 25, city: "Mumbai" },
  { id: 3, name: "Neha", age: 28, city: "Pune" },
];


const chnclr =()=>{
  chnagecolor.current.style.background = "red"
  console.log(chnagecolor.current)
}


const showusersfarm =()=>{
  newdata()
  setshowfarm(true)
}


  return (
    <>
     <div className='topdiv'>
     <h2>  { data ? "Task schedule ": " Create Task "}</h2>
     <button className='editbuttons' onClick={showusersfarm}>
     <PencilIcon className="h-1 w-1 text-gray-500" />
    </button>
     </div>
  
    {data && getformdata.length > 0 &&
      <div className='mainhomeclass'>
     {getformdata.map((i, index)=>(
  <div className='carddesign' key ={index}>
  <div>
      <ul className='ullist'>
        <li className='listdesign'>
        <p>{i.title}</p>
        </li>
        <li className='listdesign'>{i.asignedtask} </li>
      </ul>
    </div>

    <div className='dicircle'>
      <div className='taskcountcircle'>
        <h3 className='subline'>{i.taskcount}</h3>
      </div>
    </div>

    <div>
        <div>
          <p>{i.timing}</p>
        </div>
    </div>
  </div>
     ))}


   </div>}
    

    {showfarm &&

    <div className='forshowonto'>
     <form onSubmit={postformdata}>
      <h3 style={{display:"flex", justifyContent:"center"}}>create and schedule your task</h3>
      <div>
        <label>Title</label>
          <input type='text' name='title' onChange={(e)=>setuserdata({...userdata, [e.target.name]: e.target.value})} value={userdata.title}/>
      </div>
      <div>
        <label>asignedtask</label>
        <input type='text'  name='asignedtask' onChange={(e)=>setuserdata({...userdata, [e.target.name]: e.target.value})} value={userdata.asignedtask}  />
      </div>
      <div>
        <label>taskcount</label>
        <input type='text' name='taskcount' onChange={(e)=>setuserdata({...userdata, [e.target.name]: e.target.value})}  value={userdata.taskcount} />
      </div>
      <div>
        <label>timing</label>
        <input type='text' name='timing' onChange={(e)=>setuserdata({...userdata, [e.target.name]: e.target.value})} value={userdata.timing}  />
      </div>
      
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <button type='submit'> save</button>
        <button style={{backgroundColor:"red"}} onClick={()=>setshowfarm(false)}>cancel </button>
      </div>

     </form>
    </div>

    }
    
 

    {/* <div>Mainhome</div>
    <h1>{count}</h1>

    <button onClick={()=>setCount(count+1)}> click me</button>
    <button onClick={()=> setCount(count-1)}> decrese num</button>
    <input type= "text"  ref={chnagecolor} />
    <button onClick={chnclr}> change </button>
    <ul>
    { data && data.map((i)=>(
      <li key={i.id}>
       {i.title}
     </li> 
    ))}
    </ul> */}
     


     
    </>
  )
}

export default Mainhome





