// import { Redirect } from "react-router";
import { Redirect } from "react-router";
import BottomBar from "../Components/General/BottomBar";




function SearchPage() {

    const token = localStorage.getItem('token');
    if(!token){
        return <Redirect to="/"/>
    }

    return (
        <div className="w-full h-screen px-4 pt-8 relative sm:hidden">
            <input 
                onChange={(e)=>{}}
                type="text" 
                autoFocus
                className="w-full h-14 rounded-md border border-gray-300 px-4 text-green-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Search..."/>
            <BottomBar/>

        </div>
    )
}

export default SearchPage;
