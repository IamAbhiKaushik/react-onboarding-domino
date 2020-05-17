import React from 'react';
import './../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRing } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="header-left">
        <FontAwesomeIcon icon={faRing} /> DOMINO TODO APP
        </div>
        <div className="header-right">
        <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
      </div>
    );
  }
}

export default Header