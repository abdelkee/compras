import { Link } from "react-router-dom"


function IconButton({path, icon}) {

    return (
        <li className= "relative" >
            <Link to={path}>{icon}</Link>
        </li>
    )
}

export default IconButton;