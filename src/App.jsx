import './App.css';
import {useFormik} from "formik"
import * as yup from "yup"

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      feedback: "",
      terms: false
    },
    validationSchema: yup.object({
      firstName: yup.string().max(15, "Must be 15 characters or less"),
      lastName: yup.string().max(15, "Must be 15 characters or less"),
      email: yup.string().email("Invalid email address").required("Required"),
      queryType: yup.string().oneOf(["general", "support"], "Invalid selection")
      .required("Please Select your Query type"),
      feedback: yup.string()
        .required("Feedback is required")
        .min(10, "Feedback must be at least 10 characters"),
      terms: yup.boolean()
        .oneOf([true], "You must accept the terms and conditions")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="user-info-container">
          <div className="first-name-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id='firstName'
              name='firstName'
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error-message">{formik.errors.firstName}</div>
              ) : null}

          </div>
          <div className="last-name-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id='lastName'
              name='lastName'
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error-message">{formik.errors.lastName}</div>
              ) : null}

          </div>
        </div>
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id='email'
            name='email'
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}

        </div>
        <div className="query-type-container">
          <label htmlFor="queryType">Query Type</label>
          <div className="queries">
            <div>
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={formik.values.queryType === "general"}
              onChange={formik.handleChange}
            /> General Enquiry
            </div>
            <div>
            <input
              type="radio"
              name="queryType"
              value="support"
              checked={formik.values.queryType === "support"}
              onChange={formik.handleChange}
           /> Support Request
            </div>
          </div>
        </div>
        {formik.touched.queryType && formik.errors.queryType ? (
          <div className="error-message">{formik.errors.queryType}</div>
        ) : null}

        <div className="feedback-container">
          <label htmlFor="feedback">Message</label>
          <textarea name="feedback" id="feedback" {...formik.getFieldProps("feedback")} />
        </div>
        {formik.touched.feedback && formik.errors.feedback ? (
          <div className="error-message">{formik.errors.feedback}</div>
        ) : null}

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={formik.values.terms}
            {...formik.getFieldProps("terms")}
          /> I consent to being contacted by the team
        </div>
        {formik.touched.terms && formik.errors.terms ? (
          <div className="error-message">{formik.errors.terms}</div>
        ) : null}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
