import React from 'react'
function Product (props) {
    const defaultImage = "https://www.tendance-miroir.com/734-large_default/miroir-point-d-interrogation-arial.jpg";
    return <div style={{
        backgroundColor: props.available ? "green" : "red"
    }}>
        <h2>{props.name}</h2>
        <img alt="alt" src={props.image ? props.image : defaultImage} />
        {props.available && <button>Commander</button>}
        {props.available ? <h3>DISPO</h3> : <p>pas dispo</p>}
    </div>
}

export default Product;