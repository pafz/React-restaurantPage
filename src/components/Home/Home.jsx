import React from 'react'

const Home = (props) => {
    const listItems = props.dishes.map((dish, index) => 
    
    <div key={index}>
        name: {dish.name} description: {dish.description} price: {dish.price}
    </div>
);
    return (
        <div>
            {listItems}
        </div>
  )
}

export default Home