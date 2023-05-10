import { useState } from "react"
import "./Info.css"
const infoData = [
    {
        id: 1,
        label: "Name",
        name: "Name",
        placeH: "saurabh",
        type: "text",
    },
    {
        id: 2,
        label: "Email Address",
        name: "EmailAddress",
        placeH: "wasdasdsad@dsad.com",
        type: "email",
    },
    {
        id: 3,
        label: "Phone Number",
        name: "PhoneNumber",
        placeH: "e.g +91 1465456645546",
        type: "text",
    },

]

const Info = ({ personalInfo, setPersonalInfo, handleChange }) => {
    // console.log(personalInfo.name);

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
                        <input type={item.type} placeholder={item.placeH} value={personalInfo.name} onChange={(e) => handleChange(e)} name={item.name} />
                    </div>
                )
                )}
            </form>
        </div>
    )
}

export default Info