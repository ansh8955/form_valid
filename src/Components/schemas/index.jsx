import  * as Yup from "yup";


export const signUpSchema = Yup.object({

    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email("invalidemailformat").required("Please enter your email").matches(/regex@gmail.com/,"Email must be regex@gmail.com"),
    password:Yup.string().min(6).required("Please enter your password").matches(/rishiME@199$/, "Password must be start from r__M_9"),
    confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"password must match"),

});