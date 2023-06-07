import Raect from "react" ;
import "./signup.css" ;
import Img from "./assets/OMA-Feature.png" ;
import FormData from "form-data" ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm =(props)=>{

    const handleNavigate = useNavigate();
    const navigateLogin = ()=>{
        const loginPath = "../login"
        handleNavigate(loginPath);
    }
  

    const [email,setEmail] = useState(null);
    const [password , setPassword] = useState(null) ;
    const [fname ,setFname] = useState(null);
    const [lname ,setLname] = useState(null);
    const [mobno , setMobno] = useState(null);
    const [company , setCompany] = useState(null);

    const [user , setUser] = useState(props.user) ;
    const navigate = useNavigate();

   const formHandler = (e) =>{
      e.preventDefault();

  const formData = new FormData();
  console.log(JSON.stringify(user)) ;
    // formData.append("email" , email) ;
    // formData.append("password" , password ) ;
    // formData.append("firstName" , fname) ;
    // formData.append("lastName" , lname) ;
    // formData.append("mobileNumber" , mobno) ;
    // formData.append("company" , company) ;

 
     fetch("http://localhost:8080/user/adduser",{
    method : "POST",
    headers:{
        "Content-Type" : "application/json" ,
        
    },
    body : JSON.stringify(user),
    }
    ).then(
    function (response){
    return response.json()
}).then(
    function(data){
    console.log("form submitted",data);
    
}
).then(function (error){
    return error
})
 let path = "../" ;
navigate(path) ;
}


    return(
        <>
        <div className = "signup top">
        <div className = "heading" >
    #You Can Contact Us At Any Time On <u>9324367599</u> To Know More.. Or Just Fill The Form below
</div>
           <div className="heading"> <h3>
                Already Have An Account?
            </h3></div>
           <div> <button onClick = {navigateLogin} className="text-white bg-pink-800 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go To Login
            </button><h1>OR</h1><a href = "/">Home</a>
            </div> 
            
            

        </div>
        <div className="signup">

        <div className= "signup form img">
           <img src = {Img} width = "650px" height = "900px"/>
        </div>
         <div className="signup form">
          
<form  autoComplete = "none" action = "user/adduser" onSubmit = {formHandler} method = "post" role = "form" id = "contact-us-form"  encType = "application/json">
  <div className="relative z-0 w-full mb-6 group">
      <input  type="email" name="user[email]" onChange={(e)=>setUser({...user,email:e.target.value})} id="floating_email" autocomplete = "off" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" onChange={(e)=>setUser({...user,password : e.target.value})} name="user[password]" autocomplete = "off" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password"  name="user[repassword]" id="floating_repeat_password" autoComplete = "off" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(e)=>setUser({...user,firstName : e.target.value})} autoComplete = "off" name="user[firstName]" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(e)=>setUser({...user,lastName : e.target.value})} autoComplete = "off" name="user[lastName]" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="tel" onChange={(e)=>setUser({...user,mobileNumber : e.target.value})} autoComplete = "off" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="user[mobileNumber]" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(e)=>setUser({...user,company : e.target.value})} autoComplete = "off" name="user[company]" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type = "submit" className="text-white bg-pink-800 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>



         </div>

         </div>

        </>
    )
}


export default SignupForm ;

