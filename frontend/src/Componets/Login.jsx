import {React,useState} from 'react'
import '../App.css'
import { Box} from '@mui/material'
import Myemail from './form/Emilfrom'
import Passform from './form/pass'
import Mybutton from './form/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axiosinstance'
import Mymessage from './form/Message'

function Login() {
  const Navigate=useNavigate()
  const [Showmessage,setShowmessage]=useState(false)

  const { handleSubmit, control } = useForm();
  const submission=(data)=>{
    AxiosInstance.post('login/',{
      email:data.email,
      password:data.password
  })
  .then((response)=>{
    console.log(response)
    localStorage.setItem('Token',response.data.token)
    Navigate('/EmployeDetails')
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
               {Showmessage? <Mymessage text={'  check your  email and password is that correct? or Reset ur yopassord'}
                severity={"error"}/>:null}

            <form onSubmit={handleSubmit(submission)}>

         <Box className={'whitbox'}>
                <Box className="items">
                  <Box className="title"> User Login Page</Box>
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
                  name={"password"}
                  control={control}
                  />
                </Box>
                <Box className="items">
                  <Mybutton
                  label='login'
                  type={'submit'}

                  />
                  
                </Box>
                <Box className="items" sx={{flexDirection:'column'}}>
    
                  <Link to="/request/Password_reset">
                    Password Forgotten? click here!
                  </Link>
                </Box>

         </Box>
         </form >

    </div>

  )
}

export default Login
