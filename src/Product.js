import React from 'react'
import './Product.css'

function Product (props) {
    const defaultImage = "https://www.tendance-miroir.com/734-large_default/miroir-point-d-interrogation-arial.jpg";
    return <div className={props.available? "available" : "unavailable"}>
        <h2>{props.name}</h2>
        <img alt="alt" src={props.image ? props.image : defaultImage} />
    </div>
}

export default Product;