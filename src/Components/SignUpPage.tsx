import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./SignUp.css";


type SignUpFormValues = {

  firstname: string;
  email: string;
  username: string;
  password: string;
};

type SignUpFormProps = {
  onSubmit: (data: SignUpFormValues) => void;
};

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState<boolean>(
    localStorage.getItem("signedIn") === "true"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();



  const handleProfile = () => {
    navigate("/login");
  };

  return (
    <>
    <Navbar/>
     {signedIn ? (
 <div className="purple-theme">
  <br />
 <p className="signed-in-msg">You are signed in!</p>
 <h3 className="profile-heading">Please Log In</h3>
 <br />
 <br />
 <button className="profile-button" onClick={handleProfile}>Log In</button>
 <br />
 <br />
</div>
) : (
  <form
    className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 mt-5"
    onSubmit={handleSubmit((data) => {
      const user = {
        firstname: data.firstname,
        email: data.email,
        username: data.username,
        password: data.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("signedIn", "true");
      setSignedIn(true);
      onSubmit(data);
    })}
  >
    <div className="form-group mb-4">
      <h1>Create New Account</h1>
      <br />
      <label htmlFor="firstname" className="form-label">
        First Name:
      </label>
      <input
        type="text"
        id="firstname"
        {...register("firstname", { required: true, minLength: 8 })}
        className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
        name="firstname"
      />
      {errors.firstname?.type === "required" && (
        <div className="invalid-firstname">First Name is required</div>
      )}
      {errors.firstname?.type === "minLength" && (
        <div className="invalid-firstname">
          First Name must be at least 8 characters
        </div>
      )}
    </div>

    <div className="form-group mb-4">
    <label htmlFor="email" className="form-label">
  Email:
</label>
<input
  type="email"
  id="email"
  {...register("email", {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  })}
  className={`form-control ${errors.email ? "is-invalid" : ""}`}
  name="email"
/>
{errors.email?.type === "required" && (
  <div className="invalid-email">Email is required</div>
)}
{errors.email?.type === "pattern" && (
  <div className="invalid-email">Invalid email format</div>
)}
      </div>
    <div className="form-group mb-4">
      <label htmlFor="username" className="form-label">
        Username:
      </label>
      <input
        type="text"
        id="username"
        {...register("username", {
          required: true,
          pattern: /^[^\s]+$/,
        })}
        className={`form-control ${errors.username ? "is-invalid" : ""}`}
        name="username"
      />
      {errors.username?.type === "required" && (
        <div className="invalid-username">Username is required</div>
      )}
      {errors.username?.type === "pattern" && (
        <div className="invalid-username">
          Username must not contain spaces
        </div>
      )}
    </div>
    <div className="form-group mb-4">
      <label htmlFor="password" className="form-label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true, minLength: 8 })}
        className={`form-control ${errors.password ? "is-invalid" : ""}`}
        name="password"
      />
      {errors.password?.type === "required" && (
        <div className="invalid-password">Password is required</div>
      )}
      {errors.password?.type === "minLength" && (
        <div className="invalid-password">
          Password must be at least 8 characters
        </div>
      )}
    </div>
    <button type="submit" className="btn btn-primary btn-block btn-lg">Create Account</button>
    <br />
    <br />
    <div className="text-center small"><h5>Already have an Account? <Link className="link" to ={"/login"}>Log In</Link></h5></div>
    <h5>Or</h5>
  <div className="text-center large"><h3>Go back to <Link className="link" to={'/'}>Home</Link></h3></div>
  <br />
  </form>
)}
    </>
  );
};

export default SignUpForm;
