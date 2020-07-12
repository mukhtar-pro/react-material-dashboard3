import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Avatar,
  Badge,
  TextField,
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete'

import {
  EditOutlined
} from '@material-ui/icons';

import { CustomInput, DropDown} from 'components';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignContent: 'center',
    marginTop: '20px'
  },
  avatar: {
    width: '120px',
    height: '120px'
  },
  editIcon: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
  },
  label: {
    color: '#BFC5D2',
    fontSize: '14px',
  },
  autoComplete: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
    border: '1px solid #E3E5E6',
    borderRadius: '5px',
    paddingLeft: '10px',
    minWidth: '200px',
    height: '40px'
  },
  
  textfield: {
    fontSize: '16px',
    border: '1px solid #E3E5E6',
    borderRadius: '5px',
    paddingLeft: '10px',
    width: '100%',
    minHeight: '72px',
    marginTop: '12px'
  },
}))

const info = {
  avatar: './images/avatars/John Doe.svg',
  name: 'John Doe',
  skills: [
    "Java", "CSS", "HTML", "Python", "Ruby", "Java"
  ],
  biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
}

const stacks = [
  "Backend Developer",
  "Frontend Developer",
  "FullStack Developer"
]

const conditions = [
  "Full Time",
  "Part Time",
  "Intern"
]

const GeneralInfo = () => {
  const classes = useStyles();

  return(
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2">General Information</Typography>
      </Grid>
      <Grid item xs={12} className={classes.row}>
        <Grid container>
          <Grid item xs={2}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<EditOutlined className={classes.editIcon} />}
            >
              <Avatar alt="Travis Howard" className={classes.avatar} src="./images/avatars/avatar.svg" />
            </Badge>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={4}>
                <Typography className={classes.label} style={{marginBottom: '18px'}}>Your Name</Typography>
                <CustomInput value="John Doe"/>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.label}>Preferred Stack</Typography>
                <DropDown inputLabel="Please Select" items={stacks}/>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.label}>Preferred working conditions</Typography>
                <DropDown inputLabel="Please Select" items={conditions}/>
              </Grid>
              <Grid item xs={12} style={{marginBottom: '20px'}}>
                <Typography className={classes.label}>Technologies</Typography>
                {/* <Autocomplete
                  multiple
                  id="tags-standard"
                  options={info.skills}
                  defaultValue={[info.skills[0]]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      placeholder="Teches"
                    />
                  )}
                  className={classes.autoComplete}
                /> */}
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={info.skills}
                  defaultValue={[info.skills[0]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.label}>Biography</Typography>
                <TextField
                  value={info.biography}
                  className={classes.textfield}
                  InputProps={{
                    disableUnderline: true
                  }}
                  multiline
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default GeneralInfo;