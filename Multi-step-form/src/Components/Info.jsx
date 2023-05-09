import "./Info.css"
const infoData = [
    {
        id: 1,
        label: "Name",
        placeH: "saurabh",
        type: "text",
    },
    {
        id: 2,
        label: "Email Address",
        placeH: "wasdasdsad@dsad.com",
        type: "email",
    },
    {
        id: 3,
        label: "Phone Number",
        placeH: "e.g +91 1465456645546",
        type: "text",
    },

]

const Info = () => {
    return (
        <div className="info">
            <div className="title">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address and phone number.</p>
            </div>
            <form action="" className="info_form">
                {infoData.map((item, id) => (
                    <div className="form-item" key={id}>
                        <label htmlFor="name">{item.label}</label>
                        <input type={item.type} placeholder={item.placeH} />
                    </div>
                )
                )}
            </form>
        </div>
    )
}

export default Info