
import React,{useState} from 'react'

const App = () => {
  const mystyle={
    theme:{
      height:"100vh",
      width:"100%",
      backgroundColor:"skyblue"
    },
  
  }
  const [users, setusers]=useState([]);
  const handleclick=()=>{
    const fetchdata=async()=>{
      const response= await fetch("https://randomuser.me/api/?results=50");
      const jsondata= await response.json();
      setusers(jsondata.results)
    }
    fetchdata();
  }
  return (
    <>
    <div className='container-fluid' style={mystyle.theme}>
      <div className='row' >
        <div  >
          <div  >
          <h1>Fetch Api</h1>
              
              <input type="button" value="Fetch data" onClick={handleclick} />
              
                {users.map((user, i)=>{return(
                  <div key={i}>
                    <div><img src={user.picture.large} alt="pic" /></div>
                    <div>Name--{user.name.title} {user.name.first} {user.name.last}</div>
                    <div>Email--{user.email}</div>
                    <div>Address</div>
                    <div>City--{user.location.city}</div>
                    <div>Country--{user.location.country}</div>
                  </div>
                )})}
             
          </div>
             
              
         
        </div>
      </div>
    </div>
    </>
  )
}

export default App