import React from 'react';

import {
  Grid
} from '@material-ui/core';
import CollectionCard from './CollectionCard';

const collections = [
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    proName: 'Example project name',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    proName: 'Example project name',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    proName: 'Example project name',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    proName: 'Example project name',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    avatar: './images/avatars/Shawn Jones.svg',
    proName: 'Example project name',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
  {
    cUrl: './images/other/Collection.svg',
    proName: 'Example project name',
    skills: [
      "Java",
      "CSS",
      "HTML"
    ]
  },
]

const Portfolio = () => {
  return(
    <Grid container>
      {collections.map((collection, index) => (
        <Grid item lg={4} sm={6} xl={4} xs={12} key={index}>
          <CollectionCard collection={collection}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Portfolio;