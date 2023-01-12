

import { Logo } from "./Logo"
import {Link} from 'react-router-dom'
const Navbar = () =>{


    return (
        <nav className="w-full h-auto flex align-center gap-x-4">
            <Logo/>
            <div className="pt-0.5">
            <Link to='/' className="text-white px-2">HOME</Link>
            <Link to='/' className="text-white px-2">REQUEST PANEL</Link>
            <Link to='/' className="text-white px-2">REPORT SOMETHING</Link>
            <Link to='/' className="text-white px-2">ABOUT</Link>
            </div>
            
        </nav>
    )
}



export default Navbar