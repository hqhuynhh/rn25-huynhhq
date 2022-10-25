import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

interface IPropsInputCustom {
  stateInput: IUser;
  setStateInput: (input: IUser) => void;
}

interface IUser {
  name: string;
}

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

// FE -> resuest BE 
// tao moi user : BE -> DB -> save user

function InputCustom(props: IPropsInputCustom) {
    const formik = useFormik({
      initialValues: {
        name: "",
      },
      validationSchema: SignupSchema,
      onSubmit: (values: any) => {
        console.log(values);
        let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users" // URL of API
        fetch(url,{
          // request API
          method : "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          // json : response of API
          // API thanh cong
          console.log(json); 
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
  
        // props.setStateInput(values)
      },
    });
    // onSubmit -> saveForm
    return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{formik.errors.name ?? null}</p>
        </div>
        <button>Save</button>    
      </form>
    );
  }

export default InputCustom