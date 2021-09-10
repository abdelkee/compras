import { Link } from "react-router-dom"


function IconButton({path, icon}) {

    return (
        <li className= "bg-green-500 p-3 rounded-full relative" >
            <Link to={path}>{icon}</Link>
        </li>
    )
}

export default IconButton;