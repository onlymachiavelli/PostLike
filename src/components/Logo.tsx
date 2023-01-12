import {Rocket} from './svg'


export const Logo = () =>{
    return (
        <div className='flex gap-x-2 '>
            <Rocket Width="30" Height="30"/> <p className='text-pink font-bold text-xl pt-1'>POSTLIKE</p> 
        </div>
    )
}