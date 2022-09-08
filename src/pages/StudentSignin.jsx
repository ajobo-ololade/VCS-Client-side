import React from 'react'
import Navbar from '../components/Navbar'
import { useFormik } from 'formik';
import * as  yup from "yup";
import { useNavigate } from 'react-router';


const StudentSignin = () => {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {

    },
    validationSchema: yup.object({
      email: yup.string().required('This field is required'),
      password: yup.string().required('This field is required'),

    })
  })

  const { handleChange, handleSubmit, handleBlur, resetForm, isSubmitting, errors, touched, values } = formik

  return (
    <div>
      <Navbar />
      <section className="" style={{ marginTop: "100px" }}>
        <div className="container p-3">
          <div className="card m-auto" style={{ borderRadius: "1rem", width: "50%" }}>
            <div className="p-5 space">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>

                  <div className=" mb-3 pb-1">
                    <h5 className="fw-normal pb-1 text-center text-primary" style={{ letterSpacing: "1px" }}>Sign In</h5>
                  </div>

                  <div className="form-outline mt-4 mb-3">
                    <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.email ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='email' onChange={handleChange} value={values.email} onBlur={handleBlur} />
                    <label className="form-label text-primary">Email address</label>
                    {touched.email && <p className='text-danger fs-6-auto '>{errors.email}</p>}
                  </div>

                  <div className="form-outline mt-4 mb-4">
                    <input id="form2Example17" class='form-control form-control-lg border-bottom' className={errors.password ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='password' onChange={handleChange} value={values.password} onBlur={handleBlur} />
                    <label className="form-label text-primary">Password</label>
                    {touched.password && <p className='text-danger fs-6-auto'>{errors.password}</p>}
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  </div>
                </form>

                <p className='text-center'>Don't have an account? <span className='text-primary' onClick={() => navigate("/signup")}>Create Account</span></p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentSignin