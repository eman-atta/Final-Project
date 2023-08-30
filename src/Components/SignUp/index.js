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




const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0B885B',
    },
  },
});

export default function SignUp() {
  const [usernameError, setUsernameError] = React.useState(false);
  const [formFilled, setFormFilled] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formFilled) {
      console.log("Please fill in all required fields.");
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
    });
  };

  const handleInputChange = () => {
    const data = new FormData(document.getElementById('signup-form'));
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');

    if (firstName && lastName && username && email && password) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }

    if (username.length < 5) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom style={{ padding: '70px 0px 25px 0px', color: '#0B885B' }}>
        Sign Up
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
          minWidth: '80%'
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <form id="signup-form" noValidate onSubmit={handleSubmit} style={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      inputProps={{ minLength: 5 }}
                      helperText="Username must be at least 5 characters."
                      error={usernameError}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#0B885B' }}
                  disabled={!formFilled}
                >
                  <Link to='/' className='btn-link' style={{ color: '#fff' }}>
                    Sign Up
                  </Link>
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button style={{ textTransform: 'capitalize' }}>
                      <Link to='/SigninPages' className='btn-link' style={{ color: '#0B885B' }}>
                        Already have an account? Sign in
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Container>
        </ThemeProvider>
      </Paper>
    </div>
  );
}
