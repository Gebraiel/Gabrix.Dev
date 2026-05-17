"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSending,setIsSending]=useState(false);
  const [result,setResult] = useState("");
  const [isSuccessful,setIsSuccessful] = useState(false);
  const onSubmit = async (data) => {
    setIsSending(true)
    console.log(data);
    

    const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ ...data, access_key: "1a8a184b-b7d7-4f5a-888a-da65e8b945b7" })
});

    const res = await response.json();
    if (res.success) {
      setIsSuccessful(true);
      setResult("Form Submitted Successfully");
    } else {
      setIsSuccessful(false);
      setResult(`Error: ${res.message}`);
    }
    setIsSending(false);
};

  return (
    <div className="bg-secondaryBg p-5 rounded-2xl">
      <p className="text-secondary text-3xl mb-3 font-pixel">Let's work together</p>
      <p className="text-lg text-white font-black">
        Every great website starts  as an idea.
      </p>
      <p className="text-white/60">
        Let’s turn your digital dream into a real experience on the web.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 gap-5 my-5">

          {/* Name */}
          <div>
            <div className="input-container bg-background p-2 text-white">
            <input
              type="text"
              placeholder="name"
              className="w-full focus:outline-none"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            
          </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            {/* Email */}
          <div className="input-container bg-background p-2 text-white">
            <input
              type="text"
              placeholder="email"
              className="w-full focus:outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format",
                },
              })}
            />
          
          </div>
          {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        <div>
            {/* Service */}
          <div className="input-container bg-background p-2 text-white">
            <select
              className="w-full focus:outline-none"
              {...register("service", {
                required: "Please choose a service",
              })}
            >
              <option value="" hidden>
                Choose your service
              </option>
              <option value="website-development">
                Website Development
              </option>
              <option value="website-deploying">
                Website Deploying
              </option>
              <option value="performance-optimization">
                Performance Optimization
              </option>
              <option value="seo-optimization">
                SEO Optimization
              </option>
            </select>
           
          </div>
           {errors.service && (
              <p className="text-red-500 text-sm mt-1">
                {errors.service.message}
              </p>
            )}
        </div>
        <div>
            {/* Phone */}
          <div className="input-container bg-background p-2 text-white">
            <input
              type="text"
              placeholder="type your phone number"
              className="w-full focus:outline-none"
              {...register("phone", {
                required: "Phone is required"
               
              })}
            />
           
          </div>
          {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
        </div>
          {/* Message */}
          <div className="input-container bg-background p-2 text-white h-52">
            <textarea
              placeholder="type your message"
              className="resize-none w-full focus:outline-none"
              {...register("message")}
            />
            
          </div>
        </div>

        <button disabled={isSending} className="font-pixel bg-secondary text-background px-4 py-2 rounded-full text-sm">
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
      <p className={`${isSuccessful ? "text-secondary" : "text-red-500 italic"} text-sm mt-5`}>{result}</p>
    </div>
  );
}