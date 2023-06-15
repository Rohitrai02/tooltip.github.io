import React from 'react';
import './index.css';

export default function Main(props) {
   // Dynamically generate the CSS class for the tooltip based on the 'type' prop
  const tooltipClass = `tooltiptext-${props.type}`;
  return (
    <>
      <div className='tooltip'> Hover over me!
        <span className={tooltipClass}>Thank's for hovering! I'm a tooltip</span>
      </div>
    </>
  );
}
