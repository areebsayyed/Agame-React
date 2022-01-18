import React from "react";
import { Grid, Typography} from "@mui/material";
import AwstartButton from "./AwstartButton";

export default function Paytm() {
  return (
    <>
      <Grid container sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}} spacing={2}>
        <Grid item xs={12} sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
           <Typography align="center" style={{fontFamily:'Bungee Shade', fontSize:'50px', color:'white'}}>
              AI Mind Game
           </Typography>
        </Grid>
        <Grid item xs={12} sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <AwstartButton/>
        </Grid>
      </Grid>
    </>
  );
}
