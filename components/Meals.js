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
             <div className="font-taj-bold">{meal.title}</div>
             <div>{meal.desc}</div>
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

