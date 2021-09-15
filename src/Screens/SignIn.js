import { useState } from "react";
import { useSelector } from "react-redux";
import Toast from '../Components/General/Toast';
import axios from "axios";
import { useHistory } from "react-router-dom";


function SignIn() {

    let history = useHistory();
    const [userData, setUserData] = useState({email:'', password:''});
    const {loading} = useSelector(state => state.general);

    async function signIn() {
        //akys-grocery.herokuapp.com
        if(!userData.email || !userData.password) return alert('Please fill in all the fields');
        const response = await axios.post("https://akys-grocery.herokuapp.com/users/signin", userData);
        localStorage.setItem('token', response.data.userToken);
        history.push('/');
    }

    return (
            <> 
            <div className="w-4/5 h-60 px-8 py-6 rounded-xl shadow-xl bg-blue-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col justify-around items-center">
                <input
                    className="bg-white px-4 py-2 w-full rounded-md" 
                    onChange={(e) => {setUserData({...userData, email:e.target.value})}}
                    type="email" placeholder=" Email"/>
                <input
                    className="bg-white px-4 py-2 w-full rounded-md" 
                    onChange={(e) => {setUserData({...userData, password:e.target.value})}}
                    type="password" placeholder=" Password"/>
                <button
                    className="px-8 py-1 font-bold border bg-white border-blue-600 text-blue-600 rounded-md"
                    onClick={signIn}
                    >Sign In</button>
                
            </div>
                {loading && <Toast/>}
            </>
            )
}

export default SignIn;
