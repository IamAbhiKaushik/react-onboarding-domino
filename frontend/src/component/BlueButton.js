import React from 'react';
import './../App.css';


interface Props {
  value: string;
}

const BlueButton = ({value}: Props) => {
  return (
    <React.Fragment>
      <div className="blue-button"> {value} </div>
    </React.Fragment>
  );
};


export default BlueButton;
