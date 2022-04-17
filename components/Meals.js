import React from 'react';
import Modal from './HotelsModal'
import '../node_modules/reactjs-popup/dist/index.css';


export default function Hotels(props) {
    if(process.env.MEAL_OPTIONS && process.env.MEAL_OPTIONS.length > 0){
      const meals = process.env.MEAL_OPTIONS
    
    return (
        < >
          {meals.map((meal, index) => (
            <div className="margin-bottom-1" key={index}>
             <h4>{meal.title}</h4>
             <p className="margin-top-0 color-gold">{meal.desc}</p>
            </div>
          )
          )}
        </>
    )
  } else {
    return (
      <div>
        <div className="font-taj-bold">Coming Soon!</div>
        <div>Please check back on July 1st.</div>
      </div>
  )
  }
}

