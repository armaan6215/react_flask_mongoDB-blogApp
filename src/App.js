import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Body from './Components/Body';
import './App.css';

function App() {
  const [profile, setProfile] = useState([]);
  const asyncUsers = async()=>{
    try{

      let response = await fetch("http://127.0.0.1:5000");
      let data =  await response.json();

      setProfile(data.users);
    } catch(error){
      console.log("error is: ",error)
    }
  }

  useEffect(() => {
    asyncUsers();
  }, [])
  
  return (
    <div>
      {profile.map((element, index)=>{
        console.log(index)
        return(<Body key={index} fname={element.fname} lname={element.lname} age={element.age}/>)
      })}
      <h3 style={{"marginRight":"20px", "float":"right"}}>Total Posts: {profile.length}</h3>
    </div>
  );
}

export default App;
