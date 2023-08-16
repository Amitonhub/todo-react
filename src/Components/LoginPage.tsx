import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.css';
import { Navbar } from "./Navbar";

type LoginFormProps = {
  onSubmit: (data: { username: string; password: string }) => void;
};

type FormValues = {
  username: string;
  password: string;
};

const LoginPage = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const handleFormSubmit = (data: FormValues) => {
    const usersArray = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = usersArray.find((u: any) => u.username === data.username && u.password === data.password);
  
    if (foundUser) {
      const userIdsArray = JSON.parse(localStorage.getItem("userId") || "[]");
      userIdsArray.push(foundUser.id);
      localStorage.setItem("signedIn", "true");
      localStorage.setItem("userId", JSON.stringify(userIdsArray));
       localStorage.setItem("user", JSON.stringify(foundUser));
      navigate("/profile");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-form">
      <Navbar/>
  <form className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
    <h1 className="modal-title">Login to Your Account</h1>
    <br />
    <div className="form-group mb-4">
      <label htmlFor="username" className="form-label">Username:</label>
      <input type="text" id="username" {...register("username", {
        required: true,
        pattern: /^[^\s]+$/,
      })} className={`form-control ${errors.username ? "is-invalid" : ""}`} name="username" placeholder="Username" />
      {errors.username?.type === "required" && <div className="invalid-password">Username is required</div>}
      {errors.username?.type === "pattern" && <div className="invalid-password">Username must not contain spaces</div>}
    </div>
    <div className="form-group mb-4">
      <label htmlFor="password" className="form-label">Password:</label>
      <input type="password" id="password" {...register("password", { required: true })} className={`form-control ${errors.password ? "is-invalid" : ""}`} name="password" placeholder="Password" />
      {errors.password && <div className="invalid-password">Password is required</div>}
    </div>
    <div className="form-group">
    </div>
    <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
  </form>
  <br />
  <div className="text-center small"><h5>Don't have an account? <Link className="link" to ={"/signup"}>Sign up</Link></h5></div>
  <h5>Or</h5>
  <div className="text-center large"><h3>Go back to <Link className="link" to={'/'}>Home</Link></h3></div>
  <br />
</div>
  );
};

export default LoginPage;
