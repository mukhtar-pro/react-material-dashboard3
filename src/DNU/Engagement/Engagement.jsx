// import React from 'react';

// import { makeStyles } from '@material-ui/styles';
// import { Grid, Typography } from '@material-ui/core';

// import { UsersToolbar, UsersCard } from './components';

// const items = [
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   },
//   {
//     avatarUrl: '/images/table/jacob.svg',
//     name: 'Jacob Cooper',
//     position: 'Software Engineering Immersive'
//   }
// ]

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: theme.spacing(2)
//   },
//   card: {
//     marginTop: '10px'
//   }
// }));

// const Engagement = () => {

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <UsersToolbar />
//       <Typography variant="h3" style={{marginTop: '20px'}}>Example cohort name</Typography>
//       <Grid container spacing={4} className={classes.card}>
//           {items.map( (item, index) => (
//             <Grid key={index} item lg={4} sm={6} xl={4} xs={12}>
//                 <UsersCard  data={item}/>
//             </Grid>
//           ))}
//       </Grid>
//     </div>
//   );
// };

// export default Engagement;
