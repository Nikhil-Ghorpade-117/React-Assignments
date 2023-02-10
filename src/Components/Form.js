import React from 'react';
import { useFormik } from "formik";

//css imports below this line
import "../Styles/form.css";

//schema import below this line
import  {basicSchema} from "../Formik_Schemas/index";
import RoleSelect from './RoleSelect';

const options = [
    {value:"Owner", label:"Owner"},
    {value:"User", label:"User"},
    {value:"Admin", label:"Admin"}
];

async function onSubmit(values, actions){
    console.log("Submitted");
    console.log(`Full Name : ${values.first_name +" "+ values.last_name}
Role: ${values.role}
    `);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

function Form() {

    const formik = useFormik({

        initialValues:{
            first_name: "",
            last_name: "",
            role: ""
        },

        validationSchema: basicSchema,

        onSubmit,

    })

    // console.log(formik.errors);

  return (
    <div className='form-container'>

        <div className='form'>

            <form onSubmit={formik.handleSubmit} autoComplete='off'>

                <div class='inputs'>
                    <label htmlFor="first_name">First name</label>
                    <input 
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        placeholder={formik.errors.first_name &&  formik.touched.first_name ? formik.errors.first_name : "First Name"}
                        id="first_name" type="text"
                        className={formik.errors.first_name && formik.touched.first_name ? "input-error" : ""}>
                    </input>
                    {/* {formik.errors.first_name && formik.touched.first_name && <p className='error-msg'>{formik.errors.first_name}</p>} */}
                </div>

                <div className='inputs'>
                    <label htmlFor="last_name">Last name</label>
                    <input 
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        placeholder={formik.errors.last_name &&  formik.touched.last_name ? formik.errors.last_name : "Last Name"}
                        id="last_name" type="text"
                        className={formik.errors.last_name && formik.touched.last_name ? "input-error" : ""}>
                    </input>
                    {/* {formik.errors.last_name && formik.touched.last_name && <p className='error-msg'>{formik.errors.last_name}</p>} */}
                </div>

                <div className='dropdown-container'>
                    <label htmlFor="role">Select Role</label>
                    <RoleSelect 
                    classNameRef={formik.errors.role &&  formik.touched.role ? "dropdown-selector-error" : "dropdown-selector"}
                    options={options}
                    value={formik.values.role}
                    onChange={value=>formik.setFieldValue("role", value.value)}
                    />
                    {/* {formik.errors.role && formik.touched.role && <p className='error-msg'>{formik.errors.role}</p>} */}
                </div>
                
                <button class="submit-btn" disabled={formik.isSubmitting} type="submit">Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Form