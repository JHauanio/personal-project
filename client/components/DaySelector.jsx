import React, { Component } from 'react';
import { render } from 'react-dom'

const DaySelector = (props) => {
    return (
    <div>
        Select Day
     <div>
         <button>Monday</button> 
         <button>Tuesday</button>
         <button>Wednesday</button>
         <button>Thursday</button>
         <button>Friday</button>
         <button>Saturday</button>
         <button>Sunday</button>
    </div>
    </div>
    )
}

export default DaySelector