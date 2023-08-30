import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import{Link} from 'react-router-dom';
import './style.css';

const pages = [ 
<Button  style={{
  textTransform:'capitalize'}}>
  <Link to='/' className='btn-link' style={{ color:'#0B885B' }}> House</Link>
 </Button>
,  
  <Button style={{ textTransform:'capitalize', }}>
    <Link to='/aboutus' className='btn-link'  style={{color:'#0B885B' }}> AboutUs</Link>
  </Button>,
  <Button style={{ textTransform:'capitalize', }}>
    <Link to='/contactus' className='btn-link' style={{ color:'#0B885B'}}>ContactUs</Link>
  </Button>
  ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#0B885B',
              textDecoration: 'none',
            }}
          >
            Homes
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#0B885B"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}  
            </Menu>
          </Box>
          <Typography
            variant="h7"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: '#0B885B',
              textDecoration: 'none',
            }}
          >
            Homes
          </Typography>


    




<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: { md: 'center' } }}>
   



                 <Button  style={{
                  textTransform:'capitalize',
                 }}>
                  <Link to='/' className='btn-link' style={{ color:'#0B885B',fontSize:' large' }}>
                    House</Link>
                 </Button>


                 <Button style={{textTransform:'capitalize' }}>
                  <Link to='/aboutus' className='btn-link'  style={{color:'#0B885B' ,fontSize:' large' }}>
                  AboutUs</Link>
                  </Button>


                 <Button style={{ textTransform:'capitalize' }}>
                  <Link to='/contactus' className='btn-link' style={{color:'#0B885B' ,fontSize:' large'}}>
                    ContactUs</Link>
                  </Button>



          </Box> 




          <Box>
          <Stack spacing={2} direction="row">
          <Button variant="text" style={{ color: '#0B885B',textTransform:'capitalize' }}            
           sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 300,
              color: '#0B885B',
              textDecoration: 'none',
            }} >
                                <Link to='/SigninPages' className='btn-link' style={{color:'#0B885B' ,fontSize:' large'}}>
                                Login</Link>
              
              </Button>
          <Button variant="contained" style={{ backgroundColor: '#0B885B', color: 'white',textTransform:'capitalize' }}
                      sx={{
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 300,
                        color: '#0B885B',
                        textDecoration: 'none',
                      }}>
                                <Link to='/SignupPages' className='btn-link' style={{color:'#fff' ,fontSize:' large'}}>
                                Register</Link>

                        </Button>
    </Stack>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;