import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
function SingUp() {
  return (
    <>
      <div>
        <form>
          <label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter Full Name"
              {...register("fullname", { required: "Full Name is required" })}
            />
          </label>
          <label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              {...register("email", { required: "Email is required" })}
            />
          </label>
          <label>
            <input
              type="password"
              id="password"
              placeholder="Enter a your password"
            />
          </label>
          <label>
            <input
              type="password"
              id="password"
              placeholder="Enter a your password"
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default SingUp;
