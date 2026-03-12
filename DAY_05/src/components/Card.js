function Card(props){
    return (
        <div style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://img.freepik.com/premium-photo/beautiful-t-shirt-design-mockup-best-design-t-shirt_1036629-14.jpg" height="200px" width="200px"/>
            <div>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

export default Card;