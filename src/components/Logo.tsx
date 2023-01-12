import {Rocket} from './svg'

import {Link} from 'react-router-dom'
export const Logo = () =>{
    return (
        <div>
            <Link to='/' className='flex gap-x-2 '>
                <Rocket Width="30" Height="30"/> <p className='text-pink font-bold text-xl '>POSTLIKE</p> 
            </Link>
        </div>
    )
}