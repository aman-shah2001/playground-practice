import "./card.css"
function Card(props) {
    return (
        <div className="card">
            <img src="https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg" alt="img" width="300"/>
            <p>{props.img}</p>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            
        </div>
    )
}
export default Card