// import React from "react";
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   Paper,
//   Box,
//   Grid,
//   Typography,
// } from '@mui/material';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Bardo
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//     // backgroundImage: `url(${image})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundColor:
//       theme.palette.type === "light"
//         ? theme.palette.grey[50]
//         : theme.palette.grey[900],

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   size: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center"
//   },

//   paper: {
//     margin: theme.spacing(2, 6),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(0),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// export default function LoginStyled(props) {

//   // if(authService.isLoggedIn()){

//   //   props.history.push("./home");

//   // }

//   const classes = useStyles();

//   console.log(typeof classes.root);

//   const [account, setAccount] = React.useState({ username: "", password: "" });

//   const handelAccount = (property, event) => {

//     const accountCopy = { ...account };
//     accountCopy[property] = event.target.value;

//     setAccount(accountCopy);

//   }

//   // const isVarifiedUser=(username, password)=>{

//   //   return users.find((user)=> user.username === username && user.password === password);

//   // };


//   const handelLogin = () => {
//     // if(isVarifiedUser(account.username,account.password)){
//     //   authService.doLogIn(account.username);
//     //   setAccount({username:"",password:""});
//     //   props.history.push("/home");

//     // }
//   };

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
//       <Grid
//         className={classes.size}
//         item
//         xs={12}
//         sm={8}
//         md={5}
//         component={Paper}
//         elevation={1}
//         square
//       >
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               onChange={(event) => handelAccount("username", event)}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoFocus
//             />
//             <TextField
//               onChange={(event) => handelAccount("password", event)}
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               onClick={handelLogin}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
