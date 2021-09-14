import { Redirect } from "react-router";
import BottomBar from "../Components/General/BottomBar";




function SettingsPage() {


    const token = localStorage.getItem('token');

    if(!token) {
        return <Redirect to="/signin"/>
    }

    return (
        <div className="w-full h-screen relative sm:hidden">
            SettingsPage
            <BottomBar/>

        </div>
    )
}

export default SettingsPage;