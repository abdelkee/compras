import { HomeIcon, CartIcon, ListIcon, SettingsIcon, SearchIcon } from "../../icons";
import IconButton from "./IconButton";
import { motion } from 'framer-motion';



function BottomBar({isActive}) {


    return (
        <motion.ul 
            className="bg-white border-t border-blue-200 flex justify-evenly items-center z-30 w-full h-14 fixed left-0 bottom-0" 
            initial={{bottom : -56}}
            animate={{bottom : 0}}
            >
                <IconButton path={"/home"} icon={<HomeIcon />} active={isActive === 'home' ? true : false }/>
                <IconButton path={"/cart"} icon={<CartIcon />} active={isActive === 'cart' ? true : false }/>
                <IconButton path={"/search"} icon={<SearchIcon />} active={isActive === 'search' ? true : false }/>
                <IconButton path={"/shopping"} icon={<ListIcon />} active={isActive === 'list' ? true : false }/>
                <IconButton path={"/settings"} icon={<SettingsIcon />} active={isActive === 'settings' ? true : false }/>
        </motion.ul>
    )
}

export default BottomBar;
