import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../recoil/dashboardState';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import bell from "../../public/notifications.svg";
import account from '../../public/account.svg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  paddingLeft: `calc(${theme.spacing(4)} + 2em)`,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

function SearchAppBar() {
  const [search, setSearch] = useState('');
  const [dashboard, setDashboard] = useRecoilState(dashboardState);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);

    const filteredCategories = dashboard.categories.map((category) => {
      const filteredWidgets = category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(value.toLowerCase())
      );
      return { ...category, widgets: filteredWidgets };
    });

    setDashboard({ categories: filteredCategories });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#fbfcfc" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center', 
              color: "#626567",
            }}
          >
            <p style={{ margin: 0, padding: "5px" }}>Home {" > "}</p>
            <p style={{ margin: 0, color: "#2471a3" }}>Dashboard</p>
          </Typography>
          <Box sx={{ flexGrow: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search className='border rounded-lg'>
              <SearchIconWrapper >
                <SearchIcon sx={{ color: 'white' }}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search widgets…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={handleSearchChange}
                style={{ backgroundColor: "#d7dbdd" }}
              />
            </Search>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <IconButton color="inherit" aria-label="notifications">
              <img src={bell} alt="Notifications" style={{ height: '24px', width: '24px' }} />
            </IconButton>
            <IconButton color="inherit" aria-label="profile">
              <img src={account} alt="Profile" style={{ height: '24px', width: '24px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar;
