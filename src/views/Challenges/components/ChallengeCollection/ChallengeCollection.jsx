import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Typography,
  Grid
} from '@material-ui/core';

import {
  ChevronRight
} from '@material-ui/icons';

import CollectionCard from './CollectionCard';
// import { CollectionCard } from 'components';

const collections = [
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    name: 'Shawn Jones',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    name: 'Shawn Jones',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    name: 'Shawn Jones',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    name: 'Shawn Jones',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '24px'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  cardWrap: {
    height: '500px',
    overflowY: 'scroll'
  },
  arrowRight: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    width: '40px',
    height: '56px',
    background: theme.palette.application.background,
    borderRadius: '5px'
  }
}));

const ChallengeCollection = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography variant="caption">Challenge collection</Typography>
      <Grid container className={classes.row}>
        <Grid item xs={11} className={classes.cardWrap}>
          <Grid container>
          {collections.map((collection, index) => (
            <Grid item lg={6} sm={12} md={6} xl={6} xs={12} key={index}>
              <CollectionCard collection={collection}/>
            </Grid>
          ))}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <ChevronRight className={classes.arrowRight}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChallengeCollection;