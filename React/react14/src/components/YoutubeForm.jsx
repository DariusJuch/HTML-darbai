import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
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
      username: "",
      email: "",
      chanel: "",
      color: "",
      hobbies: "",
    },
  });

  const { username, email } = watch();

  const formSubmitHandler = (data) => {
    console.log(data);
    setValue("username", "");
    setValue("email", "");
    setValue("chanel", "");
    setValue("color", "");
    setValue("hobbies", "");
    // reset();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
          <div className=" m-2">
            <input
              type="text"
              id="username"
              placeholder="Enter User Name"
              {...register("username", { required: "User Name is required" })}
            />
            <p className=" text-red-600">{errors.username?.message}</p>
          </div>
          <div className=" m-2">
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                    value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                    message: "Invalid email address"
                  },
                  validate:{
                    notAdmin: (fieldValue) =>{
                        return (
                            fieldValue !== "admin@gmail.com" || 
                            "Enter different email"
                        );
                    },

                    endsWith: (fieldValue) => {
                        return(
                           fieldValue.endsWith("@gmail.com") ||
                           "Enter email end @gmail.com"
                        );
                    },
                  }
              })}
            />
            <p className=" text-red-600">{errors.email?.message}</p>
          </div>
          <div className=" m-2">
            <h6>Favorite Chanel</h6>
            <select name="" id="" {...register("chanel")}>
              <option value="">Select a chanel</option>
              <option value="Code with Ania Kubow">Code with Ania Kubow</option>
              <option value="Kevin Powel">Kevin Powel</option>
              <option value="Net Ninja">Net Ninja</option>
            </select>
          </div>
          <div className=" m-2">
            <h6>Choose your favorite color</h6>
            <label className="block">
              <input
                type="radio"
                value="green"
                {...register("color", { required: "Please select a color" })}
              />
              Green
            </label>
            <label className="block">
              <input
                type="radio"
                value="blue"
                {...register("color", { required: "Please select a color" })}
              />
              Blue
            </label>
            <label className="block">
              <input
                type="radio"
                value="black"
                {...register("color", { required: "Please select a color" })}
              />
              Black
            </label>
            <p className=" text-red-600">{errors.color?.message}</p>
          </div>
          <div className=" m-2">
            <h6>Select Your Hobbies:</h6>
            <label className="block">
              <input
                type="checkbox"
                value="Reading"
                {...register("hobbies", {
                  required: "Please select at least one hobby",
                })}
              />
              Reading
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Traveling"
                {...register("hobbies", {
                  required: "Please select at least one hobby",
                })}
              />
              Traveling
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Cooking"
                {...register("hobbies", {
                  required: "Please select at least one hobby",
                })}
              />
              Cooking
            </label>
            <p className=" text-red-600">{errors.hobbies?.message}</p>
          </div>
          <input type="submit" value="Submit" className="m-2" />
        </form>
        <DevTool control={control} />
      </div>
      <div>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </>
  );
}
export default YoutubeForm;
