import React from 'react';
import Navbar from '../components/Navbar';
import { useFormik } from 'formik';
import * as  yup from "yup";
import { useNavigate } from 'react-router';
import success from '../assets/Group 4.png'

const StudentSignup = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      firstname: "",
      lastname: "",
      department: "",
      gender: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {

    },
    validationSchema: yup.object({
      title: yup.string().required('This field is required'),
      firstname: yup.string().required('This field is required'),
      lastname: yup.string().required('This field is required'),
      department: yup.string().required('This field is required'),
      gender: yup.string().required('This field is required'),
      email: yup.string().required('This field is required'),
      password: yup.string().required('This field is required'),

    })
  })

  const { handleChange, handleSubmit, handleBlur, resetForm, isSubmitting, errors, touched, values } = formik;

  const confirm = () => {
    navigate("/signin")
  }

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
                    <h5 className="fw-normal pb-1 text-center text-primary" style={{ letterSpacing: "1px" }}>Sign Up</h5>
                  </div>

                  <div className="form-outline mb-3">
                    <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.title ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='title' onChange={handleChange} value={values.title} onBlur={handleBlur} />
                    <label className="form-label text-primary">Title</label>
                    {touched.title && <p className='text-danger fs-6-auto'>{errors.title}</p>}
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="form-outline mb-3 w-50">
                      <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.firstname ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='firstname' onChange={handleChange} value={values.firstname} onBlur={handleBlur} />
                      <label className="form-label text-primary">First Name</label>
                      {touched.firstname && <p className='text-danger fs-6-auto'>{errors.firstname}</p>}
                    </div>

                    <div className="form-outline mb-3 w-50 ms-2 md:ms-0">
                      <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.lastname ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='lastname' onChange={handleChange} value={values.lastname} onBlur={handleBlur} />
                      <label className="form-label text-primary">Last Name</label>
                      {touched.lastname && <p className='text-danger fs-6-auto'>{errors.lastname}</p>}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="form-outline mb-3 w-50">
                      <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.department ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='department' onChange={handleChange} value={values.department} onBlur={handleBlur} />
                      <label className="form-label text-primary">Department</label>
                      {touched.department && <p className='text-danger fs-6-auto'>{errors.department}</p>}
                    </div>

                    <div className="form-outline mb-3 w-50 ms-2 md:ms-0">
                      <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.gender ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='gender' onChange={handleChange} value={values.gender} onBlur={handleBlur} />
                      <label className="form-label text-primary">Gender</label>
                      {touched.gender && <p className='text-danger fs-6-auto'>{errors.gender}</p>}
                    </div>
                  </div>

                  <div className="form-outline mb-3">
                    <input type="email" id="form2Example17" class="form-control form-control-lg border-bottom" className={errors.email ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='email' onChange={handleChange} value={values.email} onBlur={handleBlur} />
                    <label className="form-label text-primary">Email address</label>
                  </div>
                  {touched.email && <p className='text-danger fs-6-auto'>{errors.email}</p>}

                  <div className="form-outline mt-4 mb-4">
                    <input id="form2Example17" class='form-control form-control-lg border-bottom' className={errors.password ? "form-control form-control-lg border-bottom is-invalid" : "form-control form-control-lg border-bottom"} name='password' onChange={handleChange} value={values.password} onBlur={handleBlur} />
                    <label className="form-label text-primary">Password</label>
                  </div>
                  {touched.password && <p className='text-danger fs-6-auto'>{errors.password}</p>}

                  <div className="pt-1 mb-4">
                    <button className="btn btn-primary btn-lg btn-block" type="submit" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Sign Up</button>
                  </div>
                </form>
                <p className='text-center'>Already have an account? <span className='text-primary' onClick={() => navigate("/signin")}>Login</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-5">
              <img src={success} alt="" />
              <h4 className='mt-4' style={{color: "#8ED1FD"}}>Registration Successful</h4>
              <p className='mt-2' style={{fontSize: "13px"}}>We will send you an email which will contain your user ID and password
                for accessing your dashboard.
              </p>
              <button className='btn text-primary text-capitalize shadow-0'  data-mdb-dismiss="modal" onClick={confirm} style={{backgroundColor: "#DFEFF7"}}>Confirm</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StudentSignup