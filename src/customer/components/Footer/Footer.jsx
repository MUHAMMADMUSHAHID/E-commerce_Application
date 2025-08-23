
import { Grid, Typography} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className=" bg-black text-white text-center mt-10 px-20" 
      container 
      spacing={35} 
      justifyContent="center"
      sx={{bgcolor:"black", color:"white", py:3}}>
        <Grid item xs={12} sm={6} md={3} >

            <Typography className='pb-5' variant='h6' >Company</Typography>
            <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>ABOUT</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Blogs</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Press </button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Partners</button></div>



        </Grid>
        <Grid item xs={12} sm={6} md={3} >

            <Typography className='pb-5' variant='h6' >Solutions</Typography>
            <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Marketing</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Commerce</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Insight </button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Support</button></div>


        </Grid>
        <Grid item xs={12} sm={6} md={3} >

            <Typography className='pb-5' variant='h6'>Documentations</Typography>
            <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Guide</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>API Status</button></div>


        </Grid>
        <Grid item xs={12} sm={6} md={3} >

            <Typography className='pb-5' variant='h6'>Legals</Typography>
            <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Claimm</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Privacy</button></div>
             <div><button className='pb-5 transition transform hover:scale-105 hover:text-gray-300 active:scale-95' variant='h6' gutterBottom>Terms </button></div>



        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">© 2024 E-commerce. All rights reserved.</Typography>
          <Typography variant="body2">Made with ❤️ by Your Company</Typography>
          <Typography variant="body2">Developed by MUHAMMADMUSHAHID</Typography>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Footer
   