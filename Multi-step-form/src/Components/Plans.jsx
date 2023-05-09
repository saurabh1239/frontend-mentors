import "../App.css"


const plansData = [
    {
        id: 1,
        icon:"../../public/assets/images/icon-arcade.svg",
        tittle: "Arcade",
        monthly: "$9/mo"
    },
    {
        id: 2,
        icon:"../../public/assets/images/icon-advanced.svg",
        tittle: "Advanced",
        monthly: "$12/mo"
    },
    {
        id: 3,
        icon:"../../public/assets/images/icon-pro.svg",
        tittle: "Pro",
        monthly: "$15/mo"
    }
]
const Plans = () => {

    return (
        <div className="plans">
            <div className="upper">
                <div className="title">
                    <h1>Select your plan</h1>
                    <p>you have the option of monthly or yearly billing.</p>
                </div>
                <div className="cards">
                    {plansData.map((item, id) =>
                        <div className="card" key={id}>
                            <img src={item.icon} alt="" className="icon" />
                            <div className="card-lower">
                                <span>{item.tittle}</span>
                                <p>{item.monthly}</p>
                            </div>
                        </div>

                    )}
                </div>
                <div className="toggle">
                    <label >Monthly</label>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <label >Yearly</label>
                </div>
            </div>
            
        </div>
    )
}

export default Plans