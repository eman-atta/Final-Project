import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './style.css';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0B885B',
    },
  },
});

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);

  React.useEffect(() => {
    if (email && password) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the email and password fields
    if (email === '') {
      setEmailError('Please Enter Your email');
      return;
    }
    if (password === '') {
      setPasswordError('Please Enter Your password');
      return;
    }

    console.log({
      email: email,
      password: password,
    });

  };

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ padding: '70px 0px 25px 0px', color: '#0B885B' }}
      >
        Sign in
      </Typography>

      <Paper
        sx={{
          p: 5,
          border: 1,
          borderColor: '#0B885B',
          margin: 'auto',
          maxWidth: '50%',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          flexDirection: 'column',
          maxHeight: '60%',
          justifyContent: 'center',
          minWidth: '80%',
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#0B885B',
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, color: '#0B885B', borderColor: '#0B885B' }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ color: '#0B885B' }}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                />
                {emailError && (
                  <Typography color="error" variant="caption">
                    {emailError}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                />
                {passwordError && (
                  <Typography color="error" variant="caption">
                    {passwordError}
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#0B885B' }}
                  disabled={submitButtonDisabled}
                >
                  <Link to="/ProfilePages" className="btn-link" style={{ color: '#FFF' }}>
                    Sign in
                  </Link>
                </Button>
                <Grid container>
                  <Grid item>
                    <Button style={{ textTransform: 'capitalize' }}>
                      <Link to="/SignupPages" className="btn-link" style={{ color: '#0B885B' }}>
                        Don't have an account? Sign Up
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Paper>
    </div>
  );
}
