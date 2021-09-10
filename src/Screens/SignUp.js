import axios from "axios";
import { useState } from "react";




function SignUp() {


    const [userData, setUserData] = useState({userName:'', email:'', password:''});

    async function signUp() {
        const response = await axios.post('http://localhost:5000/users/signup', userData);
        console.log(response);
    }

    return (
        <div className="w-4/5 h-72 px-8 py-6 rounded-xl shadow-xl bg-purple-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col justify-around items-center">
            <input
                className="bg-white px-4 py-2 w-full rounded-md" 
                onChange={(e) => {setUserData({...userData, userName:e.target.value})}}
                type="text" placeholder=" User name"/>
            <input
                className="bg-white px-4 py-2 w-full rounded-md" 
                onChange={(e) => {setUserData({...userData, email:e.target.value})}}
                type="email" placeholder=" Email"/>
            <input
                className="bg-white px-4 py-2 w-full rounded-md" 
                onChange={(e) => {setUserData({...userData, password:e.target.value})}}
                type="password" placeholder=" Password"/>
            <button
                className="px-8 py-1 font-bold border bg-white border-purple-600 text-blue-600 rounded-md"
                onClick={signUp}
            >SignUp</button>
        </div>
    )
}

export default SignUp;
