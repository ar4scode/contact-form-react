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
      terms: ""
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
      <form action={formik.handleSubmit}>
        <div className="user-info-container">
          <div className="first-name-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id='firstName'
              name='firstName'
              {...formik.getFieldProps("firstName")}
            />
          </div>
          <div className="last-name-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id='lastName'
              name='LastName'
              {...formik.getFieldProps("lastName")}
            />
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
        </div>
        <div className="query-type-container">
          <label htmlFor="queryType">Query Type</label>
          <div className="queries">
            <input type="radio" name="queryType" id="" value="general" {...formik.getFieldProps("queryType")} /> General Enquiry
            <input type="radio" name="queryType" id="" value="support" {...formik.getFieldProps("queryType")} /> Support Request
          </div>
        </div>

        <div className="feedback-container">
          <label htmlFor="feedback">Message</label>
          <textarea name="feedback" id="feedback" {...formik.getFieldProps("feedback")} />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" name="terms" id="terms" {...formik.getFieldProps("terms")} /> I consent to being contacted by the team
        </div>
      </form>
    </div>
  );
}

export default App;
