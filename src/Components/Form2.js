import React from 'react';

import {Field, Formik} from "formik";

function Form2() {
  return (
    <div>

<Formik
       initialValues={{ first_name: '', last_name: '' }}>
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <label>First Name</label>
           <Field type="text" name="first_name" placeholder="First Name"/>
           {/* <input
             type="text"
             name="first_name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /> */}
           {errors.email && touched.email && errors.email}
           <br/>
           <label>Last Name</label>
           <Field type="text" name="first_name" placeholder="First Name"/>
           {/* <input
             type="text"
             name="last_name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /> */}
           {errors.password && touched.password && errors.password}
           <br/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>

    </div>
  )
}

export default Form2