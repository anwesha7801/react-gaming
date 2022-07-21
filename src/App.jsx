import './style.css';

import {BiMenuAltRight} from 'react-icons/bi'; 
import {AiOutlineClose} from 'react-icons/ai'; 

function Webcontent(){
    return(
        <>
        <div className="open-menu">
            <BiMenuAltRight id='m' className='open'/>
            <AiOutlineClose id='m' className='close'/>
        </div>

        <div className="menu">
            <ul>
                <a href="#home" className='active'>home</a>
                <a href="#community">community</a>
                <a href="#games">games</a>
                <a href="#streams">streams</a>
                <a href="#contact">contact</a>
            </ul>
        </div>
        </>
    );
}

export default Webcontent