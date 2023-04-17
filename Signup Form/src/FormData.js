const Data = [
    {
        id: 1,
        name: "firstname",
        type: "text",
        placeholder: "firstname",
        label: "firstname",
        errorMessage:
            "firstname should be 3-16 characters and shouldn't include any special character!",
        required: true,
        pattern: "^[A-Za-z0-9]{3,16}$",
        autocomplete: "off",
    },
    {
        id: 2,
        name: "Lastname",
        type: "text",
        placeholder: "lastname",
        label: "lastname",
        errorMessage:
            "lastname should be 3-16 characters and shouldn't include any special character!",
        required: true,
        pattern: "^[A-Za-z0-9]{3,16}$",
        autocomplete: "off",
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errorMessage: "It should be valid email address!",
        required: true,
        autocomplete: "off",
    },
    {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        required: true,
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        autocomplete: "off",
    }
];
export default Data;