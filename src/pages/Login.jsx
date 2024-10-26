import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast, Toaster } from "react-hot-toast";
// import google from "../assets/google.svg";
// import signinimg from "../assets/login.png";
// import logo from "../assets/signuplogo.svg";
// import logo2 from "../assets/icons/logo.svg";
// import { useAuth } from "../components/contexts/Auth"; //context hook

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else {
      const pwdTrim = password.trim();
      if (pwdTrim.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // try {
    //   setIsSubmitting(true);
    //   const data = await login(email, password);

    //   if (data && !data.error) {
    //     toast.success("Login successful!");
    //     navigate("/");
    //   } else {
    //     toast.error("Invalid credentials. Please try again.");
    //   }
    // } catch (err) {

    //   toast.error(err.message || "An unexpected error occurred. Please try again.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  // const handleGoogleLogin = () => {
  //   window.location.href = "https://dph-backend.onrender.com/auth/google";
  // };


  useEffect(() => {
    document.title = "Harbikesfootwear-Login";
  }, []);

  return (
    <>
      <main className="font-spaceGrotesk py-5 lg:py-0 ">
        <div className="bg-white w-full h-screen flex">
          <Toaster />
          <section className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-center container mx-auto">
            <Link to="/" className="text-center text-7xl font-bold">
             <h1 className="">HF</h1>
            </Link>
            <h2 className="lg:text-[28px] font-semibold text-center  text-[23px]">
              Welcome back!
            </h2>
            <p className="lg:text-[18px] pb-2 text-center  text-[16px]">
              Welcome back! Please enter your details
            </p>
            <form onSubmit={handleSubmit}>
              <label className="block font-[500px] text-[18px] lg:text-[23px]">
                Email
                <input
                  type="email"
                  value={email}
                  placeholder="example@mail.com"
                  onChange={handleEmailChange}
                  className="w-full p-3 h-[55px] text-sm lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] lg:text-[14px]">
                    {errors.email}
                  </p>
                )}
              </label>
              <br />
              <label className="block relative font-[500px] text-[18px] lg:text-[23px]">
                Password
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="password"
                  onChange={handlePasswordChange}
                  className="w-full p-2 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[16px] text-gray-700 focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                <span
                  className="absolute right-3 top-12 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-[12px] lg:text-[14px]">
                    {errors.password}
                  </p>
                )}
              </label>

              <div className="mb-4 text-end">
                <Link to="/forgot">
                  <span className="text-sm text-red-500 font-semibold hover:text-red-700">
                    Forgot password?
                  </span>
                </Link>
              </div>
              <button
                type="submit"
                className={`bg-[#df0c12] w-full text-white font-bold py-3 px-4 rounded xl:text-[18px] ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#df0c12] hover:bg-[#df0c12]'}`}
                disabled={isSubmitting}
              >

                {isSubmitting ? "Please wait..." : "Login"}
              </button>
            </form>

            <div className="flex items-center my-3 px-[2rem]">
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
              <span className="px-4 font-bold">Or</span>
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
            </div>
            
              <button className="w-full h-[55px] font-bold py-3 px-4 rounded-[5px] cursor-not-allowed border-[1px] border-[#9A9696]"
              // onClick={handleGoogleLogin}
              >
                Continue With Google
              </button>
            

            <h3 className="font-[500px] text-[16px] text-center mt-5">
              New User?{" "}
              <span className="text-[#df0c12]">
                <Link to="/signup">Sign Up</Link>
              </span>
            </h3>
          </section>

  
        </div>
      </main>
    </>
  );
};

export default Login;
