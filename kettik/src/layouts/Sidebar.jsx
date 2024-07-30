import React, { useState } from 'react'

import { items } from '../data/events'
import Calendar from 'react-calendar'
import moment from 'moment'

import '../assets/style/Sidebar.css'


const Sidebar = () => {
    const [dateState, setDateState] = useState(new Date())
    const [cardItems, setCardItems] = useState(items)
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <>
            <div className="sidebar">
                <h2>Choose a data</h2>
                <div className='calendar-container '>
                    <Calendar
                        value={dateState}
                        onChange={changeDate}
                    />
                </div>
                <div className='sidebar-buttons'>
                    <button>On this week</button>
                    <button>On this weekend</button>
                    <button>On this month</button>
                    <button id='show-button'>Show</button>
                </div>
                <h2>Something Interesting</h2>
                <div className='card-container'>
                    {cardItems.map((item, idx) => (
                        <div key={`items-${idx}`} className="sidebar-item">
                            <div className="card-1">
                                <img src={item.image} />
                            </div>
                            <div className='card-2'>
                                <h2>{item.events}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Sidebar