import Logo from "../components/Logo";

import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registeration successfull");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form
      method="post"
      className="  flex flex-col justify-between items-center m-auto mt-5  shadow-md border-t-4 border-violet-600 rounded-sm w-[80%] md:w-[60%] lg:w-[30%] p-4 gap-3 text-sm font-medium"
    >
      <div className=" w-full flex flex-col justify-center items-center gap-2 mb-2">
        <Logo />
        <h3>Register</h3>
      </div>

      <div className="w-full flex flex-col ">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue="Shivam"
          required
          className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
        />
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue="Gupta"
          required
          className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue="India"
          required
          className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue="shivam123@gmail.com"
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
          defaultValue="secret123"
          required
          className="bg-violet-100 px-3 py-2 rounded-sm font-normal"
        />
      </div>

      <button
        type="submit"
        className="bg-violet-600 rounded-sm py-2 px-3 text-white font-medium md:text-base text-sm hover:bg-violet-500 w-full mt-5 transition-all "
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
      <p>
        Already a member?{" "}
        <Link
          to="/login"
          className="text-violet-600 hover:underline transition-all "
        >
          Login
        </Link>{" "}
      </p>
    </Form>
  );
};

export default Register;
