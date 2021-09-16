import { HomeIcon, CartIcon, ListIcon, SettingsIcon, SearchIcon } from "../../icons";
import IconButton from "./IconButton";




function BottomBar() {
    return (
        <ul className="bg-white border-t border-blue-200 flex justify-evenly items-center z-30 w-full h-14 text-green-500 fixed left-0 bottom-0" >
            <IconButton path={"/home"} icon={<HomeIcon/>} />
            <IconButton path={"/cart"} icon={<CartIcon/>} />
            <IconButton path={"/search"} icon={<SearchIcon/>} />
            <IconButton path={"/shopping"} icon={<ListIcon/>} />
            <IconButton path={"/settings"} icon={<SettingsIcon/>} />
        </ul>
    )
}

export default BottomBar;
