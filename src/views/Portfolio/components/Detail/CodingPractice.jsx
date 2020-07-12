import React from 'react';

import {
  Grid
} from '@material-ui/core';
import CodingPracticeCard from './CodingPracticeCard';

const practices = [
  {
    title: 'Diary of a Psychopath',
    pathes: [
      "Loops", "Strings", "Medium"
    ],
    coding: './images/other/Coding.svg',
    up: "+112",
    down: '-4'
  },
  {
    title: 'Diary of a Psychopath',
    pathes: [
      "Loops", "Strings", "Medium"
    ],
    coding: './images/other/Coding.svg',
    up: "+112",
    down: '-4'
  },
]

const CodingPractice = () => {
  return(
    <Grid container>
      {practices.map((practice, index) => (
        <Grid item lg={6} sm={12} md={6} xs={12} key={index}>
          <CodingPracticeCard practice={practice}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default CodingPractice;