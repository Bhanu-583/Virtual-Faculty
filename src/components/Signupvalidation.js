function SignupValidation(values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (values.name === "") {
        error.name = "Name should not be empty";
    } else if (values.name.length < 3) {
        error.name = "Name should be at least 3 characters long";
    } else {
        error.name = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match the required format";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long";
    } else {
        error.password = "";
    }

    return error;
}

export default SignupValidation;
