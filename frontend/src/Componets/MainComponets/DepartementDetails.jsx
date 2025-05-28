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
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Box } from '@mui/material'
function DeptDetails() {
const [mydata,setmydata]= useState()
const [loading,setloading]=useState(true)
const Getdata=()=>{
  AxiosInstance.get('departement/').then((res)=>{
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
        accessorKey: 'name_of_departement',
        header: 'Departement Name',
        size: 150,
      },
     
      {
        accessorKey: 'departement_code',
        header: 'Departement code',
        size: 150,
      },
     
      {
        accessorKey: 'description', //normal accessorKey
        header: 'Description',
        size: 200,
      },
      
      
      
    ],
    [],
  );


     
  return (
    <div>
      <Box sx={{display:'flex',width:'100%',backgroundColor:'#00004f',marginBottom:'10px',boxShadow:'1',
      justifyContent:'space-around'}}>
          <Typography sx={{marginLeft:'40px',color:'#fff',justifyContent:'center'}}>
          Departement Detaials Table
          </Typography>
         < ListItemButton  sx={{display:'flex',marginLeft:'860px'}}  component={Link}to="/Dept_add" >

    <ListItemIcon  sx={{display:'flex'}}>
          <AddBoxIcon sx={{ color: '#fff' }} />
    </ListItemIcon>
    </ListItemButton>
        </Box>
      
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
    </div>
    
  )
};

export default DeptDetails
