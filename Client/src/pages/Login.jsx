import Logo from "../components/Logo";

import {
  Link,
  Form,
  redirect,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test123@gmail.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Form
      method="post"
      className="  flex flex-col justify-between items-center m-auto mt-5  shadow-md border-t-4 border-violet-600 rounded-sm w-[80%] md:w-[60%] lg:w-[30%] p-4 gap-3 text-sm font-medium"
    >
      <div className=" w-full flex flex-col justify-center items-center gap-2 mb-2">
        <Logo />
        <h3>Login</h3>
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
        />
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
        />
      </div>

      <button
        type="submit"
        className="bg-violet-600 rounded-sm py-2 px-3 text-white font-medium md:text-base text-sm hover:bg-violet-500 w-full mt-5 transition-all "
      >
        {isSubmitting ? "Logging in..." : "Log in"}
      </button>

      <button
        type="button"
        className="bg-violet-600 rounded-sm py-2 px-3 text-white font-medium md:text-base text-sm hover:bg-violet-500 w-full mt-3 transition-all "
        onClick={loginDemoUser}
      >
        Explore App
      </button>
      <p>
        Not registerd yet?{" "}
        <Link
          to="/register"
          className="text-violet-600 hover:underline transition-all "
        >
          Register
        </Link>{" "}
      </p>
    </Form>
  );
};

export default Login;
