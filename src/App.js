import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { db } from "./firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { usersCount, usersAsync, selectCount } from "./reducers/auth";
let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      // main: "#edf2ff",
      main: "#25D366",
    },
  },
});

function App() {
  const countuser = useSelector(selectCount);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((response) => {
        db.collection("users")
          .where("ip", "==", response.ip)
          .get()
          .then((res) => {
            const users = res.docs;
            console.log(users, "lolll");
            if (users.length == 0) {
              db.collection("users")
                .add({ ip: response.ip })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              console.log("elsez", users);
            }
          });
      });
    db.collection("users")
      .get()
      .then((res) => {
        const users = res.docs;
        console.log(users.length, "checkuser");
        dispatch(usersAsync(users.length));
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/paytm" />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
