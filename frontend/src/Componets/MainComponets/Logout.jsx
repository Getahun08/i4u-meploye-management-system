import {React,useState} from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../Axiosinstance';
import Mymessage from '../form/Message'
import Mybutton from '../form/Button'



function Logout() {
  const Navigate=useNavigate()
  const [Showmessage,setShowmessage]=useState(false)

  const logoutuser=()=>{
    AxiosInstance.post(`logoutall/`,{

    })
    .then(()=>{
      setShowmessage(true)
      setTimeout(() => {
        setShowmessage(false);
        }, 2000);
      localStorage.getItem('Token')
      Navigate('/')
    })

    
  }
  return (
    <div>
      {Showmessage? <Mymessage text={'   Your seuccessfully logout.Thanks for use this system '}
                severity={"success"}/>:null}
       <div style={{ position: "absolute", justifyContent: "center", alignItems: "center", margin: "0", }}>
       <Typography> Are sure to logout from system ?</Typography>
                     <IconButton onClick={logoutuser}>
                     
                       <Mybutton
                           label='logout'
                           type={'submit'}
                                          
                         />
                     </IconButton>
                 
                 </div>
    </div>
  )
}

export default Logout
