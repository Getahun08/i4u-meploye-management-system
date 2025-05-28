import React from 'react'
import AxiosInstance from '../Axiosinstance'
import { useState,useEffect,useMemo } from 'react'
import {Typography} from '@mui/material';
import { MaterialReactTable, } from 'material-react-table';
import {IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
import {ListItemButton} from '@mui/material';
import {ListItemIcon} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Box } from '@mui/material'
function EmpDetails() {
const [mydata,setmydata]= useState()
const [loading,setloading]=useState(true)
const Getdata=()=>{
  AxiosInstance.get('empdetails/').then((res)=>{
    setmydata(res.data)
    console.log(res.data)
    setloading(false)

  })
}
useEffect(()=>{
  Getdata();
},[]
);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'first_name',
        header: 'First Name',
        size: 150,
      },
     
      {
        accessorKey: 'last_name',
        header: 'Last Name',
        size: 150,
      },
     
      {
        accessorKey: 'email', //normal accessorKey
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        size: 150,
      },
      {
        accessorKey: 'mobile_number',
        header: 'Mobile number ',
        size: 150,
      },
      {
        accessorKey: 'employement_type',
        header: 'Employeement Type',
        size: 150,
      },
      
    ],
    [],
  );


     
  return (
    <div>
      <Box sx={{display:'flex',width:'90%',backgroundColor:'#00004f',marginBottom:'10px',boxShadow:'1',justifyContent:'space-around', marginLeft:'5%'}}>
          <Typography sx={{marginLeft:'40px',color:'#fff',justifyContent:'center'}}>
             Employee Detaials Table
          </Typography>
         < ListItemButton  sx={{display:'flex',marginLeft:'860px'}}  component={Link}to="/Emp_add" >

    <ListItemIcon  sx={{display:'flex'}}>
          <PersonAddAlt1OutlinedIcon sx={{ color: '#fff' }} />
    </ListItemIcon>
    </ListItemButton>
        </Box>
      
      <Box sx={{display:'flex',width:'90%',boxShadow:'2',justifyContent:'space-around', marginLeft:'5%'}}>
      {loading?<p>loading data...<h1><progress>loading data</progress></h1>
      </p>:
      
          <MaterialReactTable 
          
          enableRowActions
          renderRowActions={({row }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px',marginRight:'5px'}}>
              
              <IconButton
                color="secondary" component={Link}to={`edit/${row.original.id}`}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"component={Link}to={`delete/${row.original.id}`}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          columns={columns} 
          data={mydata}
          />
         }
         </Box>
    </div>
    
  )
};

export default EmpDetails
