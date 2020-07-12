// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
// import { 
//   Card, 
//   CardContent, 
//   Grid,
//   Button,
//   Avatar
// } from '@material-ui/core';

// import MailOutlinedIcon from '@material-ui/icons/MailOutlined';


// const useStyles = makeStyles(theme => ({
//   root: {
//     height: '190px',
//     border: '1px solid #E3E5E6',
//     borderRadius: '15px'
//   },
//   profile: {
//     background: '#E7F9F9',
//     color: '#5CD9D8',
//     borderRadius: '5px',
//     textTransform: 'capitalize',
//     fontSize: '12px',
//     float: 'right'
//   },
//   row: {
//     display: 'flex',
//     marginTop: '5px'
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
//   button: {
//     marginTop: '15px',
//     borderRadius: '10px',
//     width: '90%',
//     height: '40px',
//     textTransform: 'capitalize'
//   },
//   detailButton: {
//     background: '#5CD9D8',
//     color: 'white',
//   },
//   contactButton: {
//     background: '#FFFFFF',
//     border: '1px solid #2E384D',
//     display: 'flex',
//     alignItems: 'center'
//   },
//   wrap: {
//     textAlign: 'center',
//   },
//   mailButton: {
//     marginRight: '5px'
//   }
// }));

// const UsersCard = props => {
//   const { className, data } = props;

//   const history = useHistory();

//   const routerChange = () =>{ 
//     let path = `/profiledetail`; 
//     history.push(path);
//   }
//   const classes = useStyles();

//   useEffect(() => {

//     return () => {
//     }
//   }, [])

//   return (
//     <Card
//       className={clsx(classes.root, className)}
//     >
//       <CardContent>
//         <Grid container>
//           <Grid item xs={12}>
//             <Button className={classes.profile} onClick={routerChange}>Go to Profile</Button>
//           </Grid>

//           <Grid item xs={12} className={classes.row}>
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

//           <Grid item xs={6} className={classes.wrap}>
//             <Button className={`${classes.button} ${classes.detailButton}`}>Details</Button>
//           </Grid>

//           <Grid item xs={6} className={classes.wrap}>
//             <Button className={`${classes.button} ${classes.contactButton}`}>
//             <MailOutlinedIcon className={classes.mailButton} />Contact</Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// UsersCard.propTypes = {
//   className: PropTypes.string
// };

// export default UsersCard;
