import "./Summary.css"
const Summary = ({
  yearly, setYearly,
  selectedAddOnnMonthlyPlan, selectedAddOnnYearlyPlan,
  selectedMonthlyPlan, selectedYearlyPlan
}) => {

  const sum = () => {
    const planscostMonthly = selectedYearlyPlan.price;
    const planscostyearly = selectedMonthlyPlan.price;
    // const plansAddonMonthly = 0
    // console.log("endprice", planscostMonthly);
    if (yearly) {
      return planscostMonthly;
    }
    else {
      return planscostyearly;
    }
  }
  return (
    <div className="summary">
      <div className="title">
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="Allin">
        <div className="selected_plan">
          {yearly ?
            <div className="arcade_plans">
              <h3>{selectedYearlyPlan.tittle}</h3>
              <p>${selectedYearlyPlan.price}</p>
            </div>
            :
            <div className="arcade_plans">
              <h3>{selectedMonthlyPlan.tittle}</h3>
              <p>${selectedMonthlyPlan.price}</p>
            </div>
          }
          <hr />
          <div className="selected_addOns">
            {
              yearly ?
                (
                  selectedAddOnnYearlyPlan &&
                  selectedAddOnnYearlyPlan.map((item, id) => (
                    <div className="selected_addon" key={id}>
                      <h5>{item[0]}</h5>
                      <p>+ ${item[1]}</p>
                    </div>
                  ))
                ) :
                (
                  selectedAddOnnMonthlyPlan &&
                  selectedAddOnnMonthlyPlan.map((item, id) => (
                    <div className="selected_addon" key={id}>
                      <h5>{item[0]}</h5>
                      <p>+ ${item[1]}</p>
                    </div>
                  ))
                )

            }
          </div>
        </div>
        <div className="total">
          <p>Total (per month)</p>
          <h3>+${sum()}</h3>
        </div>
      </div>
    </div>
  )
}

export default Summary