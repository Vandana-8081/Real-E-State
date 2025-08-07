// import React from "react";
// import NavBar from "../landingComponents/NavBar";
// const AdminContactUsList = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="container my-5">
//         <h2 className="text-center">Contact Us!</h2>
//         <div className="row justify-content-center">
//           <div className="col-md-10 col-lg-8">
//             <div className="form-box">
//               <form>
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label className="form-label">Your Name</label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter your name"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <label className="form-label">Your Email</label>
//                     <div className="input-group">
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter your email"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <label className="form-label">Phone Number</label>
//                     <div className="input-group">
//                       <input
//                         type="tel"
//                         className="form-control"
//                         placeholder="Enter phone number"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <label className="form-label">Profile Picture</label>
//                     <div className="input-group">
//                       <input type="file" className="form-control" />
//                     </div>
//                   </div>

//                   <div class="form-outline" data-mdb-input-init>
//                     <label class="form-label" for="textAreaExample">
//                       Message
//                     </label>
//                     <textarea
//                       class="form-control"
//                       id="textAreaExample"
//                       placeholder="your message"
//                       rows="4"
//                     ></textarea>
//                   </div>

//                   <div className="text-center mt-4">
//                     <input
//                       type="submit"
//                       className="btn px-5 btn-login"
//                       value="Send Message"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminContactUsList;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NavBar from "../landingComponents/NavBar";

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
  profilePic: yup
    .mixed()
    .test("fileSize", "File too large", (value) => {
      return value && value[0] && value[0].size <= 2 * 1024 * 1024;
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value &&
        value[0] &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
      );
    }),
});

const AdminContactUsList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // handle API submission here
  };

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center">Contact Us!</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      {...register("name")}
                    />
                    <p className="text-danger">{errors.name?.message}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      {...register("email")}
                    />
                    <p className="text-danger">{errors.email?.message}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      {...register("phone")}
                    />
                    <p className="text-danger">{errors.phone?.message}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Profile Picture</label>
                    <input
                      type="file"
                      className="form-control"
                      {...register("profilePic")}
                    />
                    <p className="text-danger">{errors.profilePic?.message}</p>
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="textAreaExample">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      placeholder="Your message"
                      rows="4"
                      {...register("message")}
                    ></textarea>
                    <p className="text-danger">{errors.message?.message}</p>
                  </div>

                  <div className="text-center mt-4">
                    <input
                      type="submit"
                      className="btn px-5 btn-login"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContactUsList;

