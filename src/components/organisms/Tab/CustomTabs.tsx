import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@emotion/react';
import { customTheme } from '../../../theme/CustomTheme';

type tabProps={
  stateHandler : (arg:string)=>void
}

function CustomTabs(props:tabProps) {

    const [value, setValue] = React.useState("currently reading");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
      props.stateHandler && props.stateHandler(newValue);
    };
  
    return (
      <ThemeProvider theme={customTheme}>
        <Box sx={{borderBottom: 1, borderColor: 'divider', justifyContent:"", width:"1180px", ml:24}}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab value="currently reading" label="Currently reading" />
            <Tab value="finished" label="Finished" />
          </Tabs>
        </Box>
      </ThemeProvider>
    );
}

export default CustomTabs;
