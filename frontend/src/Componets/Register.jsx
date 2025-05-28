import {React,useState} from 'react'
import '../App.css'
import { Box} from '@mui/material'
import Myemail from './form/Emilfrom'
import Passform from './form/pass'
import Mybutton from './form/Button'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axiosinstance'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Mymessage from './form/Message'

function Register() {
  const Navigate=useNavigate()
  const [Showmessage,setShowmessage]=useState(false)

  const schema=yup.object({
    email: yup.string().email('field expects an email adress').required('email is requerd field')
              .matches(/@gmail.com||@gmail.com/,'email field must look like @gmail.com||@gmail.com format'),
    
    password:yup.string().required('password is requerd field')
                .min(8,'password must have at least 8 characters')
                .matches(/[A-Z]/,'password field must contain at least one upercase later')
                .matches(/[a-z]/,'password field must contain at least one lower case leter')
                .matches(/[0-9]/,'password field must contain at least one number')
                .matches(/[~!@#$%^&*()_{}+:;]/,'password field must contain at least one specail character'),
    password2:yup.string().required('password confirm is requierd field') 
                 .oneOf([yup.ref("password"),null],"password must match")         
    


  })
  const { handleSubmit, control } = useForm({resolver:yupResolver(schema)});

  const submission=(data)=>{
    AxiosInstance.post('register/',{
      email:data.email,
      password:data.password
  })
  .then((response)=>{
    console.log(response.status === 200)  
      Navigate('/All')
  })
  .catch((error)=>{
    setShowmessage(true)
    setTimeout(() => {
      setShowmessage(false);
      }, 6000);
  
    console.error('error during login',error)
  })
  }
  return (
    
    <div className={'background'}>
      {Showmessage? <Mymessage text={'  check your emial is exist or your unAuthorized person'}
                severity={"error"}/>:null}
      <form onSubmit={handleSubmit(submission)}>
         <Box className='whitbox'>
          <Box>
                <Box className="items">
                  <Box className="title"> User Registration</Box>
                </Box> 

                <Box className="items">
                  <Myemail 
                  label='Email'
                  name={"email"}
                  control={control}
                  />
                  
                </Box>

                <Box className="items">
                <Passform 
                  label='Password'
                  name={'password'}
                  control={control}
                  />
                  </Box>
                  <Box className="items">
                <Passform 
                  label='Confrm-Password'
                  name={'password2'}
                  control={control}
                  />
                </Box>
                <Box className="items">
                  <Mybutton
                  label='Register'
                  type={'submit'}
                  />
                
                </Box>

                <Box className="items">
               
                </Box>

                </Box>
         </Box>
         </form>
    </div>
  )
}

export default Register
