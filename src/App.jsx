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
      feedback: ""
    },
    validationSchema: yup.object({
      firstName: yup.string().max(15, "Must be 15 characters or less"),
      lastName: yup.string().max(15, "Must be 15 characters or less"),
      email: yup.string().email("Invalid email address").required("Required"),
      queryType: yup.string().oneOf(["general", "support"], "Invalid selection")
      .required("Please Select your Query type"),
      feedback: yup.string()
        .required("Feedback is required")
        .min(10, "Feedback must be at least 10 characters")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <div className="container">
      <h1>Contact Us</h1>
      
    </div>
  );
}

export default App;
