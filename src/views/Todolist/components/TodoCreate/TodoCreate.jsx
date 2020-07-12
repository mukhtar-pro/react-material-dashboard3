// import React from 'react';
// import { useHistory } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
// import {
//   Grid, 
//   Typography,
//   Card,
//   CardContent,
//   Input,
//   TextField,
//   Button,
//   Dialog,
//   Checkbox
// } from '@material-ui/core';

// import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// import AddIcon from '@material-ui/icons/Add';

// import { DateSelect } from 'components';

// const useStyles = makeStyles(theme => ({
//   root: {
//     borderRadius: '15px',
//   },
//   row: {
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: '20px'
//   },
//   card: {
//     margin: '15px 10px 10px 0',
//     display: 'flex',
//     borderRadius: '15px'
//   },
//   rows: {
//     marginTop: '20px'
//   },
//   input: {
//     fontSize: '16px',
//     border: '1px solid #E3E5E6',
//     borderRadius: '5px',
//     paddingLeft: '10px',
//     height: '40px',
//     width: '90%',
//     padding: '16px'
//   },
//   label: {
//     color: '#BFC5D2'
//   },
//   badge: {
//     width: '56px',
//     height: '56px',
//     backgroundColor: theme.palette.primary.main,
//     color: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '50%',
//     fontSize: '30px'
//   },
//   content: {
//     width: '100%',
//     display: 'flex',
//   },
//   textfield: {
//     fontSize: '16px',
//     border: '1px solid #E3E5E6',
//     borderRadius: '5px',
//     paddingLeft: '10px',
//     width: '90%',
//     minHeight: '240px',
//   },
//   addtask: {
//     justifyContent: 'flex-end',
//     display: 'flex',
//     alignItems: 'center',
//     color: theme.palette.primary.main,
//     marginTop: '15px',
//     width: '90%',
//     cursor: 'pointer'
//   },
//   button: {
//     width: '200px',
//     height: '50px',
//     backgroundColor: theme.palette.primary.main,
//     color: 'white',
//     borderRadius: '10px',
//     textTransform: 'capitalize',
//     marginBottom: '20px'
//   },

//   dialog: {
//     padding: '30px 60px',
//     width: '400px'
//   },
//   listTitle: {
//     fontSize: '24px',
//     textAlign: 'center'
//   },
//   subListTitle: {
//     color: '#8798AD',
//     fontSize: '14px',
//     textAlign: 'center',
//     marginTop: '10px'
//   },
//   container: {
//     height: '250px',
//     overflowY: 'scroll'
//   },
//   item: {
//     display: 'flex',
//     alignItems: 'center',
//     background: '#F7F9FA',
//     border: '1px solid #F1F3F4',
//     borderRadius: '5px',
//     justifyContent: 'space-around',
//     margin: '10px 0'
//   },
//   sendButton: {
//     width: '250px',
//     height: '50px',
//     background: '#5CD9D8',
//     boxShadow: '0px 8px 16px rgba(8, 35, 48, 0.2)',
//     borderRadius: '10px',
//     textTransform: 'capitalize',
//     marginTop: '10px'
//   }
// }));

// let items = [
//   {
//     name: 'Example task name',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
//   },
//   {}
// ]

// const items1 = [
//   {
//     name: 'Example name cohort'
//   },
//   {
//     name: 'Example name cohort'
//   },
//   {
//     name: 'Example name cohort'
//   },
//   {
//     name: 'Example name cohort'
//   },
//   {
//     name: 'Example name cohort'
//   }
// ]

// function SimpleDialog(props) {
//   const classes = useStyles();
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   return (
//     <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//       <div className={classes.dialog}>
//         <Typography className={classes.listTitle}>Send To Do List</Typography>
//         <Typography className={classes.subListTitle}>Select one or more cohorts</Typography>
//         <Grid container className={classes.container}>
//           {items1.map((item, index) => (
//           <Grid item xs={12} className={classes.item} key={index}>
//             <Typography>{item.name}</Typography>
//             <Checkbox
//               color="primary"
//             />
//           </Grid>
//           ))}
//         </Grid>
//         <Grid item xs={12} style={{textAlign: 'center'}}>
//           <Button className={classes.sendButton}>Send To Do List</Button>
//         </Grid>
//       </div>
//     </Dialog>
//   );
// }

// const TodoCreate = () => {
//   const classes = useStyles();

//   const history = useHistory();

//   const [open, setOpen] = React.useState(false);
//   const [item, addTask] = React.useState(100);   

//   const goBack = () => {
//     history.goBack();
//   };
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };  

//   return (
//     <div className={classes.root}>
//       <div className={classes.row} >
//         <KeyboardBackspaceIcon style={{marginRight: '10px'}} onClick={goBack} />
//         <Typography style={{cursor: 'pointer'}}>Back</Typography>
//       </div>
//       <Grid container className={classes.row}>
//         <Grid item lg={4} sm={6} xl={4} xs={12}>
//           <Typography className={classes.label}>To Do List Name</Typography>
//           <Input disableUnderline className={classes.input}>
//           </Input>
//         </Grid>
//         <Grid item lg={4} sm={6} xl={4} xs={12}>
//           <Typography className={classes.label}>Start Date</Typography>
//           <DateSelect />
//         </Grid>
//         <Grid item lg={4} sm={6} xl={4} xs={12}>
//           <Typography className={classes.label}>End Date</Typography>
//           <DateSelect />
//         </Grid>
//       </Grid>
//       {items.map((item, index) => (
//         <Card
//           className={classes.card}
//           key={index}
//         >
//           <CardContent className={classes.content}>
//             <Grid item lg={1} sm={2} xl={1} xs={2}>
//               <Typography className={classes.badge}>{index+1}</Typography>
//             </Grid>
//             <Grid item lg={11} sm={10} xl={11} xs={10}>
//               <Typography className={classes.label}>Task Name</Typography>
//               <Input disableUnderline className={classes.input} value={item.name}></Input>
//               <Typography className={classes.label} style={{marginTop: '15px'}}>Description</Typography>
//               <TextField 
//                 className={classes.textfield}
//                 InputProps={{
//                   disableUnderline: true,
//                 }}
//                 value={item.description}
//                 multiline
//               />
//             </Grid>
//           </CardContent>
//         </Card>
//       ))}
//       <Grid item xs={12} className={classes.addtask} onClick={() => addTask(items.push({}))}>
//         {/* <div className={classes.addtask}> */}
//           <AddIcon />Add Task
//         {/* </div> */}
//       </Grid>
//       <Grid item style={{textAlign: 'center'}}>
//         <Button className={classes.button} onClick={handleClickOpen}>Send To Do List</Button>
//         <SimpleDialog open={open} onClose={handleClose} />
//       </Grid>
//     </div>
//   )
// };

// TodoCreate.propTypes = {
//   className: PropTypes.string
// };

// export default TodoCreate;