import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="lg:flex justify-center items-center lg:h-[600px]">
        <div className="border-2 border-secondary lg:p-5 rounded-lg mt-5">
          <h2 className="font-bold text-2xl text-primary text-center pb-5">
            Register !!!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-96">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input input-bordered w-full"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-400 my-2" role="alert">
                  Your name is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input input-bordered w-full"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-400 my-2" role="alert">
                  Email address is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be six character",
                  },
                  pattern: {value:/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])/, message:"password must be strong" }
                })}
                type="password"
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-red-400 my-2">{errors.password?.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="Sign up"
              className="btn btn-accent w-full text-white mt-5"
            />
            <p className="text-center mb-3">
              <span className="label-text">
                Already have an account ? please
                <Link className="text-secondary text-lg" to="/login">
                  Log in
                </Link>
              </span>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full">
              login with google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
