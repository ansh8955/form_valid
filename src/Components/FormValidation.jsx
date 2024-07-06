import React, { act } from 'react';
import {useFormik} from 'formik';
import {signUpSchema} from './schemas';


const initialValues = {

name:"",
email:"",
password:"",
confirm_password:""
};

const FormValidation = () => {


const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({

initialValues:initialValues,
validationSchema:signUpSchema,

onSubmit:(values,action)=>{

    console.log(values);

    action.resetForm();

}

});

console.log(errors)
  return (
   <>
<div>
<div className='container'>

    <div className='modal'>

        <div className='modal-container'>
<div className='modal-left'>
    <h1 className='title'>Welcome</h1>

    <p></p>

    <form onSubmit={handleSubmit}>
<div>
<label htmlFor='name'>
    Name
</label>
<input type="name"
autoComplete='off'
name='name'
id='name'
placeholder='Name'
value={values.name}
onChange ={handleChange}
onBlur={handleBlur}
></input>
{errors.name && touched.name ? (<p>{errors.name}</p>) : null}

</div>

<div>
<label htmlFor='email'>

    Email
</label>
<input type="email"
autoComplete='off'
name='email'
id='email'
placeholder='Email'
value={values.email}
onChange ={handleChange}
onBlur={handleBlur}
></input>

{errors.email && touched.email ? (<p>{errors.email}</p>) : null}

</div>
<div>
<label htmlFor='password'>
Password
</label>
<input type="password"
autoComplete='off'
name='password'
id='password'
placeholder='password'
value={values.password}
onChange ={handleChange}
onBlur={handleBlur}
></input>
{errors.password && touched.password ? (<p>{errors.password}</p>) : null}

</div>
<div>
<label htmlFor='confirm_password'>
Confirm_Password
</label>
<input type="password"
autoComplete='off'
name='confirm_password'
id='password'
placeholder='Confirm password'
value={values.confirm_password}
onChange ={handleChange}
onBlur={handleBlur}
></input>

{errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}
</div>

<button type='submit'>Submit</button>
    </form>
</div>

        </div>
    </div>
</div>
</div>





   </>
  )
}

export default FormValidation
