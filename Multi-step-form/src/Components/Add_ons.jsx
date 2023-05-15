import "./Add_ons.css"

const addons = [
  {
    id: 1,
    tittle: 'Online service',
    sub: "Access to multiplayer games",
    monthly: "1/mo",
    yearly: "10/yr"
  },
  {
    id: 2,
    tittle: 'Larger storage',
    sub: "Extra 1TB of cloud save",
    monthly: "2/mo",
    yearly: "20/yr"
  },
  {
    id: 3,
    tittle: 'Customizable Profile',
    sub: "Custom theme on your profile",
    monthly: "2/mo",
    yearly: "20/yr"
  },
]
const Add_ons = ({ yearly, selectedAddOnnYearlyPlan, selectedAddOnnMonthlyPlan }) => {

  const handleAddons = () => {

  }


  return (
    <div className="addOns">
      <div className="title">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="cards-addon">
        {
          addons.map((item, id) =>
            <div className="card-addon" key={id}>
              <div className="left-addons">
                <input type="checkbox" />
                <div className="mid-title">
                  <h3>{item.tittle}</h3>
                  <p>{item.sub}</p>
                </div>
              </div>
              <p className="price">
                {
                  yearly === false ?
                    `+$ ${item.monthly}` :
                    `+$ ${item.yearly}`
                }
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Add_ons