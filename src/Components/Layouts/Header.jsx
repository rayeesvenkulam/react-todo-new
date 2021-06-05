import '../Css/App.css';
import React from 'react';

function Header() {
    return (
        <div>
         
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                
                    <div id="sidebarToggleTop" className="  d-md-none rounded-circle mr-3">
                    <h3>Todo</h3>
                    </div>

                   
                    <h1
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        Todo
                    </h1>

                   
                    

                </nav>
               
        </div>
    )
}

export default Header



