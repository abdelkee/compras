// import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import BottomBar from "../Components/General/BottomBar";




function SettingsPage() {
    const {user} = useSelector(state => state.prods);
    
    const token = localStorage.getItem('token');
    if(!token){
        return <Redirect to="/"/>
    }

    return (
        <div className="w-full h-screen relative sm:hidden">
            <section className="w-full h-16 fixed top-0 left-0 px-2 rounded-b-md shadow-xl bg-yellow-600 flex justify-start items-center z-30">
                <div className="w-12 h-12 bg-gray-100 rounded-full">
                    {/* <img src={} alt="" /> */}
                </div>
                <span className="ml-4 text-white text-lg font-bold tracking-widest">
                    {user && user === 'abdelkee' ? 'Abdel' : 'Belkys'}
                </span>
            </section>    
            <BottomBar/>

        </div>
    )
}

export default SettingsPage;