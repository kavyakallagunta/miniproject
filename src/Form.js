import React, { useState } from "react";
import './Styles.css';
import pic from './pic.jpeg';

const Form = () => {
    const [email,setEmail]=useState("")
    const OnInputchange1=(event)=>{
        console.log(event.target.value);
        setEmail(event.target.value);

    };
    const [email1,setEmail1]=useState("")
    const OnInputchange3=(event)=>{
        console.log(event.target.value);
        setEmail1(event.target.value);

    };
    const [password,setPassword]=useState("")
    const OnInputchange2=(event)=>{
        console.log(event.target.value);
        setPassword(event.target.value);
    };
    const [password1,setPassword2]=useState("")
    const OnInputchange4=(event)=>{
        console.log(event.target.value);
        setPassword2(event.target.value);
    };
    const onInputchange=(event)=>{
        if(event.target.name==="email"){
            setEmail(event.target.value);  
        }
        if(event.target.name==="email1"){
            setEmail1(event.target.value);  
        }
        if(event.target.name==="password"){
            setPassword(event.target.value);  
        }
        if(event.target.name==="password1"){
            setPassword(event.target.value);  
        }


    }
    const onformsubmission=(event)=>{
        event.preventDefault()
        console.log("form submitted");
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log(event.target.email1.value);
        console.log(event.target.password1.value);
}
function refreshPage() {
    window.location.reload(false);
  }

  
return(
    <div>
        <img src={pic} style={{width:'1350px',height:'150px'}} />
    
    <table align="center">
    <tr>
    <td colspan='2'>      
    <div className="card mb-2 mc-1"  >
            
        <form action="" onSubmit={onformsubmission}>
        <div className="card-header  bg-primary" text-center >
        <h4 className= "card-title text-white" align="center">Admin</h4>
        </div>
        <div className="card-body" text-center>
        <label htmlFor="" className="form-lable">UserID</label> <br/>
                  <input type="email" placeholder="Enter UserID" className="form-control"
                   value={email} onChange={OnInputchange1} name="email" required/> <br/>
        <label htmlFor=""className="form-lable">Password</label>  <br/> 
                     <input type="password" placeholder="Enter password" className="form-control"
                     value={password} onChange={OnInputchange2} name="password" required/>
        <input type="checkbox"></input>
    <label htmlFor=""className="form-lable"> Remember me</label> <br/><br/>
  <button type="submit" onClick={refreshPage} id="log" className="btn btn-success" align="center">login</button> 
        </div>
    <div>
      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; forget  <a href="">password?</a>
    </div>
    </form>
    </div>
    </td>



    <td>
    <div className="card mb-2 mc-1"  >
        <form action="" onSubmit={onformsubmission}>
        <div className="card-header  bg-primary" text-center >
            <h4 className= "card-title text-white" align="center">Faculty/Student</h4>
        </div>
            
        <div className="card-body" text-center>
        <label htmlFor="" className="form-lable">UserID</label> <br/>
                  <input type="email1" placeholder="Enter UserID" className="form-control"
                   value={email1} onChange={OnInputchange3} name="email1" required/> <br/>
        <label htmlFor=""className="form-lable">Password</label>  <br/> 
                     <input type="password" placeholder="Enter password" className="form-control"
                     value={password1} onChange={OnInputchange4} name="password1" required/>
        
       
    <input type="checkbox"></input>
    <label htmlFor=""className="form-lable"> Remember me</label> <br/><br/>
  
  
    
        <button type="submit" onClick={refreshPage} id="log" className="btn btn-success" align="center">login</button> 
        
        </div>
    <div>
      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; forget  <a href="">password?</a>
    </div>
    </form>
    </div>
    </td>
</tr>
    </table> 
    </div>      
)
 }
 
 export default Form;