import React from 'react';
import './style.css';

const SubNavBar = props => {
    console.log(props);
    return (
        <>
            <div id='userLoggerNav' className="p-5 mb-2 text-white text-right">
                <ul className="navbar-nav mr-auto" id='userLogger' >

                    <li className="nav-item LoggerName float-right">
                        <a className="nav-link textColor" href="/LogIn">
                            Log In <span className="sr-only">(current)</span>
                        </a>
                    </li>
                   
                    <li id='FloatLogger' className="nav-item  LoggerName float-right">
                        <a className="nav-link textColor mb-2" href="/SignUp">
                            Sign Up <span className="sr-only">(current)</span>
                        </a>
                    </li>
                 

                </ul>

            </div>
        </>
    )
}

export default SubNavBar;