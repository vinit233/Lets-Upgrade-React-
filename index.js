 import React from  'react';
import ReactDOM from 'react-dom';
import './index.css'
const arr=[
    {
    id :1,
    Name : "Vinit Chauhan",
    Job : 'Full Stack Dovelopment',
    Age : "21"
    },
    {
        id: 2,
        Name : "Nitin Chauhan",
        Job : 'Java Stack Dovelopment',
        Age : "25"
    }
]


ReactDOM.render(
    <>
        <div className="one">
        <h1> About Employee 1 </h1>
        <p>{arr[0].id}</p>
        <p>{arr[0].Name}</p>
        <p>{arr[0].Job}</p>
        <p>{arr[0].Age}</p>
        </div>
        <div className="two">
        <h1> About Employee 2 </h1>
        <p>{arr[1].id}</p>
        <p>{arr[1].Name}</p>
        <p>{arr[1].Job}</p>
        <p>{arr[1].Age}</p>
        </div>
    </>,
    document.getElementById('root')
);