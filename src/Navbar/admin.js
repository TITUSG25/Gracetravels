

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import '../App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email === 'titusg2599@gmail.com' && password === 'titusG') {
      alert("login sucessful");
      navigate("/Read");
    } else {
      alert("Pls check the password and mail");
    }
  };

  return (
 
    <div className="picture">
      <div className="register">
      
          <form className="forms">
            <Paper elevation={3} className="papers">
              <Box>
                <div className="field">
                  <h1 className="names">UserLogin</h1>
                  <TextField
                    required
                    id="outlined-required"
                    label="Mail Id"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button variant="contained" onClick={handleSubmit}>
                    Login
                  </Button>
                </div>
              </Box>
            </Paper>
          </form>

          
      </div>
    
    </div>
   );
};

export default Login;