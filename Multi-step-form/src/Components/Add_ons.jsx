import "./Add_ons.css"

const addons = [
  {
    id: 1,
    tittle: 'Online service',
    sub: "Access to multiplayer games",
    price: "+$1/mo"
  },
  {
    id: 2,
    tittle: 'Larger storage',
    sub: "Extra 1TB of cloud save",
    price: "+$2/mo"
  },
  {
    id: 3,
    tittle: 'Customizable Profile',
    sub: "Custom theme on your profile",
    price: "+$2/mo"
  },
]
const Add_ons = () => {
  return (
    <div className="addOns">
      <div className="title">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="cards-addon">
        {
          addons.map((item,id) =>
            <div className="card-addon" key={id}>
              <div className="left-addons">
                <input type="checkbox" />
                <div className="mid-title">
                  <h3>{item.tittle}</h3>
                  <p>{item.sub}</p>
                </div>
              </div>
              <p className="price">
                {item.price}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Add_ons