import * as Yup from "yup";
const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const phoneRegex=/^[0-9]{10}$/;
export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name."),
    email: Yup.string()
        .email("Please enter valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .matches(passwordRegex, "Please enter valid password.")
        .required("Please enter your password."),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password do NOT match!")
        .required("Please enter confirm password."),
    mobile: Yup.string()
    .matches(phoneRegex,"Please enter a valid mobile number.")
    .required("Please enter your mobile number."),
    // mobile: Yup.string()
        // .matches(phoneRegex,"Please enter a valid mobile number.")
    //     .required("Please enter your mobile number."),
    // mobile: Yup.string()
    //     .matches(/^\+?91[0-9]{10}$/, "Please enter a valid Indian mobile number.")
    //     .required("Please enter your mobile number."),
});