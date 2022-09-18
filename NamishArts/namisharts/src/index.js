import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import './index.css';
import {Button, TextField, Dialog, DialogTitle, CircularProgress} from "@mui/material"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.className = "design";
const btnStyle = {
  width:"100%",
  fontWeight:"500",
  fontSize:"18px",
  fontFamily:"psr"
};
function LoginDialog(props) {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  /*const handleListItemClick = (value) => {
    onClose(value);
  };*/
  return (
    <Dialog onClose={handleClose} open={open} style={{textAlign:"center", overflow:"hidden"}}>
      <DialogTitle>Please wait...</DialogTitle>
      <CircularProgress style={{textAlign:"center"}}></CircularProgress>
      </Dialog>
    )
}
LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function ShowLoginDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason && reason === "backdropClick") 
        return false;
        setOpen(true)
  };
  return (
    <React.StrictMode>
    <p>Welcome to NamishArts. Kindly login with your username and password</p>
    <form onSubmit={function onSubmit(e) {
      e.preventDefault();
      handleClickOpen();
      
    }}>
    <TextField label="Username" style={{width: "100%"}} required></TextField>
    <br></br>
    <br></br>
    <TextField label="Password" style={{width: "100%"}} required></TextField>
    <br></br>
    <br></br>
    <Button style={btnStyle} type="submit" variant="contained">Login Now</Button>
    </form>
    <LoginDialog
    style={{overflow:"hidden"}}
        open={open}
        onClose={handleClose}
      />
 </React.StrictMode>
  )
}
root.render(
   <ShowLoginDialog></ShowLoginDialog>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
