import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function SingUp() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const {password} = watch();

  const formSubmitHandler = (data) => {
    console.log(data);
    setValue("fullname", "");
    setValue("email", "");
    setValue("password", "");
    setValue("confirmpassword", "");
  };
  return (
    <>
      <div className=" flex flex-col ">
        <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
          <div className="m-5">
            <input
              type="text"
              id="fullname"
              placeholder="Enter Full Name"
              {...register("fullname", { required: "Full Name is required" })}
            />
            <p className=" text-red-600">{errors.fullname?.message}</p>
          </div>
          <div className="m-5">
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                  message: "Invalid email address",
                },
              })}
            />
            <p className=" text-red-600">{errors.email?.message}</p>
          </div>
          <div className="m-5">
            <input
              type="password"
              id="password"
              placeholder="Enter a your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <p className=" text-red-600">{errors.password?.message}</p>
            {password.length > 0 && password.length < 8 && (
              <p className="text-orange-500">
                Password is to short. Keep typing!
              </p>
            )}
          </div>
          <div className="m-5">
            <input
              type="password"
              id="confirmpassword"
              placeholder="Enter a your password"
              {...register("confirmpassword", {
                required: "Password is required",
                validate: (value) =>
                  value === password|| "Password do no match",
              })}
            />
            <p className=" text-red-600">{errors.confirmpassword?.message}</p>
          </div>
          <input type="submit" value="Submit" className="m-5 bg-red-600 p-2" />
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
}

export default SingUp;
