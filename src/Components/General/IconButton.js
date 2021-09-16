import { Link } from "react-router-dom"


function IconButton({path, icon, active}) {

    return (
        <li className={active ? 'text-green-800' : 'text-green-500'}>
            <Link to={path}>{icon}</Link>
        </li>
    )
}

export default IconButton;