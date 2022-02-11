import React,{useState} from "react";
//import './home.css';
import axios from "axios";

function Login()
{
    const handleOnclick = function(event) {
        return (
            document.getElementById('id01').style.display='none'
        );
      }
    const handleLogin =function(){
        return (
          document.getElementById('id01').style.display='block'
        )
    }
    
        const [input,setInput] = useState({
            username:'',
            password:''
        })
        
    function handleChange(event)
    {
      const {name,value} = event.target;
  
      setInput(prevInput=>{
          return{
              ...prevInput,
              [name]:value
          }
      })
    }
    
    function handleClick(event)
    {
        event.preventDefault();
        const newUser = {
            username:input.username,
            password:input.password
        }
        console.log(newUser)
        axios.post('http://localhost:3001/create',newUser)
         setInput({
            username:'',
            password:''
        })
        document.getElementById('id01').style.display='none'
  
        
    }

 
    return(
        <div>
            <h2 style={{color:"white"}}>something</h2>
        <p style={{color:"white"}}>something</p>
        <div id="id01" className="modal">
        
            <form className="modal-content animate" action="/action_page.php" method="post">

                <div className="container">
                    <label className="" htmlFor="uname"><b>Username</b></label><br/>
                    <input className="boxinp" type="text" placeholder="Enter Username"  name="username" value={input.username} required onChange={handleChange} autoComplete="off"/><br/>

                    <label className="" htmlFor="psw"><b>Password</b></label><br/>
                    <input className="boxinp" type="password" placeholder="Enter Password" name="password" value={input.password} required onChange={handleChange}/>
                        
                    <button type="submit" onClick={handleClick}>Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label></div>
                
               

                <div className="container1_home">
                    <button type="button" onClick={handleOnclick} className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login;