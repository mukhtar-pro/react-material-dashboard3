import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  ATS as ATSView,
  Challenges as ChallengesView,
  // DailyCoding as DailyCodingView,
  Dashboard as DashboardView,
  // Engagement as EngagementView,
  Message as MessageView,
  Portfolio as PortfolioView,
  Settings as SettingsView,
  // Solutions as SolutionsView,
  Todolist as TodolistView,
} from './views';

// import {
//   UsersProfile as UsersProfileView
// } from './DNU/Engagement/components';

import {
  TodoDetail as TodoDetailView,
  TodoCreate as TodoCreateView
} from './views/Todolist/components';

import {
  ApplicationDetail as ApplicationDetailView,
} from './views/ATS/components/JobApplication/ApplicationDetail';

import {
  ShareApplication as ShareApplicationView,
} from './views/ATS/components/JobApplication/ApplicationDetail/ShareApplication';

import {
  CurrentChallenge as CurrentChallengeView
} from './views/Challenges/components/CurrentChallenge';

import {
  PreviousChallenge as PreviousChallengeView
} from './views/Challenges/components/PreviousChallenge';

import {
  EditPortfolio as EditPortfolioView
} from './views/Portfolio/components';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={ATSView}
        exact
        layout={MainLayout}
        path="/ats"
      />
      <RouteWithLayout
        component={MessageView}
        exact
        layout={MainLayout}
        path="/message"
      />
      <RouteWithLayout
        component={PortfolioView}
        exact
        layout={MainLayout}
        path="/portfolio"
      />
      <RouteWithLayout
        component={TodolistView}
        exact
        layout={MainLayout}
        path="/todolist"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      
      {/* <RouteWithLayout
        component={UsersProfileView}
        exact
        layout={MainLayout}
        path="/profiledetail"
      /> */}
      <RouteWithLayout
        component={TodoDetailView}
        exact
        layout={MainLayout}
        path="/tododetail"
      />
      <RouteWithLayout
        component={TodoCreateView}
        exact
        layout={MainLayout}
        path="/todocreate"
      />
      <RouteWithLayout
        component={ApplicationDetailView}
        exact
        layout={MainLayout}
        path="/applicationdetail"
      />
      <RouteWithLayout
        component={ShareApplicationView}
        exact
        layout={MainLayout}
        path="/shareapplication"
      />
      <RouteWithLayout
        component={ChallengesView}
        exact
        layout={MainLayout}
        path="/challenges"
      />
      <RouteWithLayout
        component={CurrentChallengeView}
        exact
        layout={MainLayout}
        path="/currentchallenge"
      />
      <RouteWithLayout
        component={PreviousChallengeView}
        exact
        layout={MainLayout}
        path="/previouschallenge"
      />
      <RouteWithLayout
        component={EditPortfolioView}
        exact
        layout={MainLayout}
        path="/editportfolio"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
