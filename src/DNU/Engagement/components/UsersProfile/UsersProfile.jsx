// import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
// import {
//   Grid, 
//   Typography,
//   Avatar
// } from '@material-ui/core';

// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from '@date-io/date-fns';

// import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import FlashOnIcon from '@material-ui/icons/FlashOn';

// import Application from './components/Application.jsx';
// import PhoneScreen from './components/PhoneScreen.jsx';
// import InPerson from './components/InPerson.jsx';
// import Offer from './components/Offer.jsx';
// import Interview from './components/Interviews.jsx';

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: 'white',
//     padding: theme.spacing(2)
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: '10px'
//   },
//   avatar: {
//     width: '64px',
//     height: '64px'
//   },
//   name: {
//     color: '#2E384D',
//     fontSize: '25px'
//   },
//   position: {
//     color: '#8798AD',
//     fontSize: '12px',
//     marginTop: '5px'
//   },
//   card: {
//     marginTop: '20px'
//   },
//   activity: {
//     color: theme.palette.primary.main,
//     backgroundColor: theme.palette.background.card1,
//     marginRight: '10px',
//     borderRadius: '10px',
//   },
//   desc: {
//     fontWeight: '700',
//     fontSize: '13px',
//     marginLeft: '10px'
//   },
//   flash: {
//     color: theme.palette.phonescreen.font,
//     backgroundColor: theme.palette.phonescreen.background,
//     marginRight: '10px',
//     borderRadius: '10px',
//   },
//   skill: {
//     width: '50px',
//     height: '25px',
//     marginLeft: '10px',
//     backgroundColor: '#EEECFE',
//     borderRadius: '5px',
//     fontSize: '12px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   wrap: {
//     backgroundColor: '#F9F9FF',
//     margin: '20px 0 0 20px',
//     minWidth: '425px',
//     padding: '20px',
//     borderRadius: '15px',
//   },
//   calendar: {
//     marginTop: '20px',
//     borderRadius: '15px',
//   }
// }));

// const data = {
//   avatarUrl: '/images/table/jacob.svg',
//   name: 'Jacob Cooper',
//   companyType: '/images/table/oragon.svg',
//   company: 'Oragon',
//   type: 'Corporation',
//   position: 'Software Engineering Immersive',
//   employment: 'Full-time',
//   stage: 'Applied',
//   createdAt: 'May 19, 2020'
// };

// const skills = [
//   'Java', 'CSS', 'HTML', 'Python', 'Ruby'
// ]

// const UserProfile = props => {
//   const [date, changeDate] = useState(new Date());
//   const classes = useStyles();
//   const history = useHistory();

//   const goBack = () =>{ 
//     history.goBack();
//   }

//   return (
//     <div className={classes.root}>
//       <Grid container>
//         <Grid xs={12} className={classes.row} item>
//           <KeyboardBackspaceIcon style={{marginRight: '10px'}} />
//           <Typography style={{cursor: 'pointer'}} onClick={goBack}>Back to cohort</Typography>
//         </Grid>

//         <Grid container>
//           <Grid item lg={4} sm={6} xl={4} xs={12} className={classes.row}>
//             <Grid item xs={3}>
//               <Avatar
//                 className={classes.avatar}
//                 src={data.avatarUrl}
//               >
//                 {data.name}
//               </Avatar>
//             </Grid>
//             <Grid item xs={9}>
//               <Grid item xs={12} className={classes.name}>
//                 {data.name}
//               </Grid>
//               <Grid item xs={12} className={classes.position}>
//                 {data.position}
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item ={5} sm={6} xl={5} xs={12}>
//             <div className={classes.row}>
//               <AccessTimeIcon className={classes.activity} />
//               <Typography>Activity:</Typography>
//               <Typography className={classes.desc}>Lorem ipsum dolor sit amet, consectetur </Typography>
//             </div>
//             <div className={classes.row}>
//               <FlashOnIcon className={classes.flash} />
//               <Typography >Skills:</Typography>
//               {skills.map( (skill, index) => (
//                 <Typography key={index} className={classes.skill}>{skill}</Typography>
//               ))}
//             </div>
//           </Grid>
//         </Grid>

//         <Grid container>
//           <Grid item ={7} sm={6} xl={7} xs={12}>
//             <Application avatar={data.companyType} className={classes.card}/>
//             <PhoneScreen avatar={data.companyType} className={classes.card}/>
//             <InPerson avatar={data.companyType} className={classes.card}/>
//             <Offer avatar={data.companyType} className={classes.card}/>
//           </Grid>
//           <Grid item ={4} sm={6} xl={4} xs={12} className={classes.wrap}>
//             <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.calendar}>
//               <DatePicker
//                   autoOk
//                   orientation="landscape"
//                   variant="static"
//                   openTo="date"
//                   value={date}
//                   onChange={changeDate}
                  
//                 />
//             </MuiPickersUtilsProvider>
//             <Interview />
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// UserProfile.propTypes = {
//   className: PropTypes.string
// };

// export default UserProfile;
