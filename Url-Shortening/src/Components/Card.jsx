import "../App.css"
const Card = ({ item, id }) => {
    // const icon,tittle,sub = item;
    console.log(item);
    return (
        <div className="card" key={id}>
            <div>
                <img src={item.icon} alt="" />
            </div>
            <span>
                {item.title}
            </span>
            <p>
                {item.sub}
            </p>
        </div>
    )
}

export default Card