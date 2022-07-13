import React, { useState } from "react";
import { Box, CssBaseline, } from '@mui/material';

import { Container } from "./components/sidebar/style";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const Panel = (props) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleSidebarToggle = (index) => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box>
      <CssBaseline />
      <Box className='flex overflow-hidden'>
        <Container opensidebar={openSidebar}>
          <Main />
        </Container>
        <Sidebar opensidebar={openSidebar} handleSidebarClose={handleSidebarToggle} {...props} />
      </Box>
    </Box>
  );
}

export default Panel;