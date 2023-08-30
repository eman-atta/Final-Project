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
import{Link} from 'react-router-dom';

import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';






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
  </Button>];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';


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


                 <Button style={{textTransform:'capitalize', }}>
                  <Link to='/aboutus' className='btn-link'  style={{color:'#0B885B' ,fontSize:' large' }}>
                  AboutUs</Link>
                  </Button>


                 <Button style={{ textTransform:'capitalize', }}>
                  <Link to='/contactus' className='btn-link' style={{color:'#0B885B' ,fontSize:' large'}}>
                    ContactUs</Link>
                  </Button>
                  



          </Box> 

          <div>
            <PersonOutlineOutlinedIcon style={{color:'#0B885B'}}
        size="large"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        
      >
      </PersonOutlineOutlinedIcon >
      <ArrowDropDownIcon style={{color:'#0B885B'}}
        size="large"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
      >
        <AccountCircle />
      </ArrowDropDownIcon>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <div onClick={handleMenuClose}>Profile</div>
        <div onClick={handleMenuClose}>My account</div>
      </Menu>
    </div>


 
      

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;