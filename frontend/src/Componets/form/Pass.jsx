import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import'../../App.css'
import {Controller} from 'react-hook-form'
import { FormHelperText } from '@mui/material';



export default function Passform(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
   const {label,name,control}=props
  

  return (
    
    <Controller
    name={name}
    control={control}
    render={({
      field:{onChange,value},
      fieldState:{error},
      formState,
    })=>(
        <FormControl  variant="outlined" className='form' 
        >
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={onChange || (() => {}) }
            value={value ?? ''}
            error={!!error}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}

          />
          <FormHelperText sx={{color:'#d32f2f'}}> {error?.message}</FormHelperText>
        </FormControl>
)}

  
  
  />
        
        
  );
}
