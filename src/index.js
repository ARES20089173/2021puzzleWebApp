import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/Pages/MainPage/Display.js';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import Box from '@mui/material/Box';
// import { Typography } from '@material-ui/core';
// import Grid from '@mui/material/Grid';
// import App from './App';
// import Scrollbanner from './component/framework/scrollbanner';
// import NavigationBar from './component/framework/navigationBar';

// export default function BasicGrid() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid
//                 container
//                 direction="row"
//             >
//                 <Grid item xs={12}  he >
//                     <NavigationBar />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Scrollbanner />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <App />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Typography>abc</Typography>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }