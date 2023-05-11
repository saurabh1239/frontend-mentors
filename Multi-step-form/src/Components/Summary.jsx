import "./Summary.css"
const Summary = ({toggle, setToggle}) => {
  return (
    <div className="summary">
      <div className="title">
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="Allin">
        <div className="selected_plan">
          <div className="arcade_plans">
            <h3>Arcade(Monthly)</h3>
            <p>$9/mo</p>
          </div>
          <hr />
          <div className="selected_addOns">
            <div className="selected_addon">
              <h5>Online service</h5>
              <p>+$1/mo</p>
            </div>
            <div className="selected_addon">
              <h5>Larger storage</h5>
              <p>+$1/mo</p>
            </div>
          </div>
        </div>
        <div className="total">
          <p>Total (per month)</p>
          <h3>+$12/mo</h3>
        </div>
      </div>
    </div>
  )
}

export default Summary