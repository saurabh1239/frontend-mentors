const Data = [
    {
        id: 1,
        name: "firstname",
        type: "text",
        placeholder: "firstname",
        label: "firstname",
        errorMessage:
            "should be 3-16 characters ",
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
            "should be 3-16 characters ",
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
            "Password should be 8-20 characters",
        required: true,
        pattern: `(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,
        autocomplete: "off",
    }
];
export default Data;