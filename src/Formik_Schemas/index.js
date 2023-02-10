import * as yup from "yup";

export const basicSchema = yup.object().shape({
    first_name: yup.string().required("Field Required"),
    last_name: yup.string().required("Field Required"),
    role: yup.string().required("field Required")
})