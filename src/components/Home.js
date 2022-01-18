import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from "../reducers/paytmReducer";
import { db } from "../firebase";
import Card from "@mui/material/Card";
import Paytm from "./Paytm";

export default function Home() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState("2");
  console.log(db);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        //   border:"1px solid"
        }}
      >
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              xl: 800,
            },
            height: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              xl: 500,
            },
            backgroundColor: "primary.main",
            borderRadius: {
              xs: "0px",
              sm: "0px",
              md: "0px",
              xl: "25px",
            },
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
            <Paytm/>
       </Card>
      </div>
    </>
  );
}
