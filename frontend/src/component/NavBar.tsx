import React from 'react';
import './../App.css';
import {Link} from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
            <div>
                <Link to="/todo">TODO</Link>
            </div>
            <div>
                <Link to="/done">DONE</Link>
            </div>
        </div>

      </div>
    );
  }
}

export default NavBar