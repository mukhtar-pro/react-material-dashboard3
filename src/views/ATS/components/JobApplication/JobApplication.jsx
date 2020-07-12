import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
  Dialog,
  Divider,
  Button
} from '@material-ui/core';

import {
  ChevronLeft,
  ChevronRight
} from '@material-ui/icons';

import { 
  CustomButton,
  MessageBadge, 
  SearchInput, 
  AppCard, 
  AppStatus,
  CustomInput,
  DropDown,
  DateSelect
} from 'components'

const useStyles = makeStyles((theme) => ({
  root: {
    padding:' 10px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  row1: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginRight: '10px'
  },
  arrow: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  dialog1: {
    padding: '30px 60px'
  },
  label: {
    color: '#BFC5D2',
    fontSize: '14px',
    marginTop: '15px'
  },
  addApp: {
    width: '100%',
    height: '56px',
    marginTop: '23px',
    textTransform: 'capitalize',
    background: theme.palette.primary.main,
    borderRadius: '10px',
    fontSize: '18px',
    color: 'white'
  },
}))

const apps = {
  1: [
    {
      logoUrl: '/images/logos/Rocket.svg',
      title: 'Rocket'
    },
    {
      logoUrl: '/images/logos/Disney.svg',
      title: 'Disney'
    },
    {
      logoUrl: '/images/logos/Nintendo.svg',
      title: 'Nintendo'
    },
    {
      logoUrl: '/images/logos/Hasbro.svg',
      title: 'Hasbro'
    },
    {
      logoUrl: '/images/logos/Sony.svg',
      title: 'Sony'
    },
  ],
  2: [
    {
      logoUrl: '/images/logos/Disney.svg',
      title: 'Disney'
    },
    {
      logoUrl: '/images/logos/Sony.svg',
      title: 'Sony'
    },
    {
      logoUrl: '/images/logos/Nintendo.svg',
      title: 'Nintendo'
    },
    {
      logoUrl: '/images/logos/Hasbro.svg',
      title: 'Hasbro'
    },
    {
      logoUrl: '/images/logos/Rocket.svg',
      title: 'Rocket'
    },
  ],
  3: [
    {
      logoUrl: '/images/logos/Nintendo.svg',
      title: 'Nintendo'
    },
    {
      logoUrl: '/images/logos/Rocket.svg',
      title: 'Rocket'
    },
    {
      logoUrl: '/images/logos/Disney.svg',
      title: 'Disney'
    },
    {
      logoUrl: '/images/logos/Sony.svg',
      title: 'Sony'
    },
    {
      logoUrl: '/images/logos/Hasbro.svg',
      title: 'Hasbro'
    },
  ]
};

const status = [
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Applied',
    'description': ' for Software-Engineer at Oragon ',
    'deadLine': '7 day left',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Phone interview',
    'description': ' for Software-Engineer at Oragon on 18 May,2020 ',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Face-to-face',
    'description': ' interview for Software-Engineer at Oragon on 20 May, 2020',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Applied',
    'description': ' for Software-Engineer at Oragon ',
    'deadLine': '7 day left',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Phone interview',
    'description': ' for Software-Engineer at Oragon on 18 May,2020 ',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Face-to-face',
    'description': ' interview for Software-Engineer at Oragon on 20 May, 2020',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Applied',
    'description': ' for Software-Engineer at Oragon ',
    'deadLine': '7 day left',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Phone interview',
    'description': ' for Software-Engineer at Oragon on 18 May,2020 ',
  },
  {
    'avatarUrl': '/images/table/oragon.svg',
    'status': 'Face-to-face',
    'description': ' interview for Software-Engineer at Oragon on 20 May, 2020',
  },
]

const companies = [
  "Company1",
  "Company2",
  "Company3",
]

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog1}>
        <Typography variant="caption">Add New Application</Typography>
        <Grid item xs={12}>
          <Typography className={classes.label}>Where did you apply?</Typography>
          <CustomInput placeholder="The Great Company, Inc"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>What is the company's main website?</Typography>
          <CustomInput placeholder="https://"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>How would you describe the company?</Typography>
          <DropDown items={companies}/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>What did you apply for?</Typography>
          <CustomInput placeholder="Software Engneer"/>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>When did you apply?</Typography>
          <DateSelect />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.label}>Would you like to add your application link?</Typography>
          <CustomInput placeholder="https://"/>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.addApp}>Add Application</Button>
        </Grid>
      </div>
    </Dialog>
  );
}

const JobApplication = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false) ;
  const [page, changePage] = React.useState(1) ;
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const appDetail = (item) => {
    console.log("dfd");
    let path = `/applicationdetail`;
    history.push({ pathname: path, state: item });
  };

  const prevApp = () => {
    changePage(page-1<=0 ? 3 : page-1);
    // console.log((index-1)%3 +3);
  };

  const nextApp = () => {
    changePage(page % 3 + 1);
    // console.log((index+1)%3);
  };

  return(
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.row}>
        <div className={classes.row1}>
          <Typography variant="caption" className={classes.title}>Job Application</Typography>
          <MessageBadge count="15"/>
        </div>
        <div onClick={handleClickOpen}>
          <CustomButton buttonLabel="Add New" ></CustomButton>
        </div>
        <SimpleDialog style={{width: '430px'}} open={open} onClose={handleClose} />
      </Grid>
      <Grid item xs={12} className={classes.row}>
        <SearchInput placeholder="Search Сompany or Title"/>
      </Grid>
      <Grid container className={classes.row}>
        {apps[page].map((item, index) => (
          <Grid item lg={1} sm={2} xl={1} xs={2} key={index}>
            <div onClick={() => appDetail(item)}>
              <AppCard logoUrl={item.logoUrl} title={item.title} />
            </div>
          </Grid>
        ))}
        {/* {console.log(`apps${page}`)} */}
        <div className={classes.row}>
          <ChevronLeft className={classes.arrow} onClick={prevApp}/>
          {page}/3
          <ChevronRight className={classes.arrow} onClick={nextApp}/>
        </div>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Typography variant="caption" className={classes.title}>Application Status</Typography>
      </Grid>
      <AppStatus statusList={status}/>
    </Grid>
  )
};

export default JobApplication;