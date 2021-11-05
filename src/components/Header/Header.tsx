import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
class Header extends  React.Component{
render(){
    return (
      <React.Fragment>
        <nav className="container">
          <div className ="header">
              <h1>DCCS Tuzla</h1>
          </div>
          <div className="header-right" >
            
          </div>
        </nav>
      </React.Fragment>
    );
  } 
}

export default Header;