import { useForm } from "react-hook-form";
import { postdata } from "../helpers/post";
import { useEffect, useState } from "react";
import { updateData } from "../helpers/update";

function Forms({ setUpdate, user, setFormOpen }) {
  const { error, setError } = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (user) {
      const {username, email, channel, likes, id} = user;
      setValue("username", username);
      setValue("email", email);
      setValue("channel", channel);
    }
  }, [user]);

  const formSubmitHandler = async (data) => {
    try {
      if (user) {
        console.log(data);
        
        await updateData(user.id, data);
        setFormOpen(false);
      } else {
        await postdata({ ...data, likes: 0 });
      }

      setUpdate((prev) => prev + 1);
    } catch (error) {
      alert(error.massage);
    }
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        noValidate
        className="flex flex-col justify-center items-center"
      >
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="userName"
            {...register("username", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.username?.message}</div>
        </div>

        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ivalid email adress format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("bademail.com") ||
                    "This email is not valid"
                  );
                },
              },
            })}
          />
          <div className="error flex justify-center">
            {errors.email?.message}
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="channel">Favourite channel:</label>
          <input type="text" id="channel" {...register("channel")} />
        </div>

        <input type="submit" value="Submit" className="bg-red-400 p-2" />
      </form>
      {error && <p className="text-red-700">{error}</p>}
    </>
  );
}
export default Forms;
