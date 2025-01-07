import * as yup from "yup"

export const RegisterSchema = yup
.object({
    email: yup.string().required("Email is required").email("invalid email format"),
    userName: yup.string().required("Username is required"),
   
    password: yup.string().required("password is required").min(8, "minimum lenght must be atleast 8 characters"),
    confirmPassword: yup.string().required("confirm password is required").min(8, "minimum lenght must be atleast 8 characters").oneOf([yup.ref("password")], "password do not match"),
  })
  .required()

  // log in
export const LogInSchema = yup
.object({
  email: yup.string().required("Email is required").email("invalid email format"),
  password: yup.string().required("password is required").min(8, "minimum lenght must be atleast 8 characters"),
 
})
.required()