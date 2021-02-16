import React, { useState } from "react";
import SideBarStudent from './SideBar';
import SideBarTeacher from './SideBarTeacher';

function Header() {
    const [isTeacher, setTeacher] = useState(true);
    
    const changeTeacher = () => {
        setTeacher(!isTeacher);
      };    

    return (
        <>
            {isTeacher === true ? (
                <SideBarTeacher isOpen={changeTeacher}/>
            ) : (
                <SideBarStudent isClose={changeTeacher}/>  
            )}
        </>
    );
}

export default Header;
