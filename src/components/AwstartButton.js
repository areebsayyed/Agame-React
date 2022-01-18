import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Grid, Typography } from "@mui/material";
import "../App.css";
import {usersCount, usersAsync, selectCount} from '../reducers/auth';
import { useSelector, useDispatch } from 'react-redux'


export default function AwstartButton() {
  const [check, setcheck] = useState(0);
  const [random, setrandom] = useState(Math.floor(Math.random() * 1000) + 1);
  const [checkbtn, setcheckbtn] = useState(true);
  let btntrue = "next";
  let btnfalse = "start";
  const increment = function () {
    const previousValue = check;
    setcheck(previousValue + 1);
  };

  useEffect(() => {
    if (check == 5) {
      setcheckbtn(false);
    }
  }, [check]);
  var answer = random / 2;
  console.log(answer);
  console.log(check);

  const shareme = function () {
    const message =
      "```https://dareyou.netlify.app/```%20%20%20%20%20%20%20%20%20%20*I%20dare%20you%20to%20defeat%20me%20Try%20your%20best%20Have%20Fun*";
    return window.open("whatsapp://send?text=" + message);
  };
  const userCount = useSelector(selectCount);
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            id="questions"
            align="center"
            style={{
              padding: "15px",
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "35px",
              color: "white",
            }}
          >
            {check ? null : `Choose a number between 1 to 10000.`}
            {check == 1
              ? `Take the same amount from your Mother, and add it in the previous amount.`
              : null}
            {check == 2
              ? `Now take ${random} from me, add it in the total amount.`
              : null}
            {check == 3
              ? `Show some mercy to a poor begger, give him half of your amount`
              : null}
            {check == 4
              ? `Your mother is asking for the money she gave to you, return the amount she gave you in the beginning`
              : null}
            {check == 5
              ? `And here's the magic. now you are left with ${answer} rupees.`
              : null}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {checkbtn == true ? (
            <AwesomeButton
              onPress={increment}
              size="large"
              type="primary"
              style={{
                fontFamily: "Bungee Shade",
                fontSize: "5rem",
                height: "8rem",
                width: "25rem",
              }}
            >
              {check ? `${btntrue}` : `${btnfalse}`}
            </AwesomeButton>
          ) : (
            <AwesomeButton
              size="large"
              type="primary"
              style={{
                fontFamily: "Bungee Shade",
                fontSize: "2.5rem",
                height: "8rem",
                width: "25rem",
              }}
              onPress={shareme}
            >
              Share Me!
            </AwesomeButton>
          )}
        </Grid>
        <Grid item xs={12} sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
           <Typography align="center" style={{fontFamily:'ZCOOL KuaiLe', fontSize:'25px', color:'white'}}>
               Live Users {`${userCount}`}
           </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            align="center"
            style={{
              fontFamily: "ZCOOL KuaiLe",
              fontSize: "20px",
              color: "white",
            }}
          >
            <a href="https://kaalgroup.in/" target="_blank" style={{textDecoration: "none", color: "white"}}>Made With 💗 By KaalGroup</a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
