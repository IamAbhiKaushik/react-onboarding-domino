import React from 'react';
import './../App.css';
import BlueButton from './BlueButton'


class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
            <div>
                <div>TODO</div>
            </div>
            <div>
                <div>DONE</div>
            </div>
        </div>
        <div className="navbar-right">
            <BlueButton value= "+ New Task" />
        </div>
      </div>
    );
  }
}

export default NavBar