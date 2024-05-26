import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="bg-gray-200 h-[100vh] p-8 ">
      <Form
        method="post"
        encType="multipart/form-data"
        className="bg-white rounded-sm  p-6  flex flex-col justify-start items-start gap-10"
      >
        <h3 className="text-2xl font-bold">Profile</h3>

        <div className="flex justify-start items-center gap-5 flex-wrap">
          <div className=" flex flex-col w-[30%] gap-1">
            <label htmlFor="image">Select an image file (max 0.5 MB):</label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className=" bg-gray-200 rounded-sm font-normal  px-2 py-[.5%]"
              accept="image/*"
            />
          </div>
          <div className=" flex flex-col  w-[30%] gap-1 ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal"
            />
          </div>

          <div className=" flex flex-col w-[30%] gap-1">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={lastName}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal"
            />
          </div>
          <div className="flex flex-col w-[30%] gap-1 ">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={location}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal"
            />
          </div>
          <div className=" flex flex-col w-[30%] gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              required
              className="bg-gray-200 px-2 py-1 rounded-sm font-normal"
            />
          </div>

          <button
            type="submit"
            className="bg-violet-600 rounded-sm px-2 py-1 text-white font-medium md:text-base text-sm hover:bg-violet-500 mt-7 transition-all w-[30%] "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Profile;
