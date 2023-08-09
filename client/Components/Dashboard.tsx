import React, { useContext, useEffect, useState } from 'react';
import { JSX } from 'react';
import { Link, useRouteLoaderData, useNavigate } from 'react-router-dom';
import { UserData } from '../types';
import { Props, StoreContext } from '../stateStore';
import { Metric } from '../../server/models/userDataClass';
import MetricDisplay from './MetricDisplay';

const Dashboard = () => {
  //const { currentDashboard }: any = useContext(StoreContext);
  const userData = useRouteLoaderData('/') as UserData;

  //console.log('in dashboard component', currentDashboard);

  console.log('in dashboard', userData);
  const metricIds: any = [];
  //currentDashboard.map(metric => metricIds.push(metric));

  console.log('here are the ids', metricIds);

  //metricIds.forEach(metricId => {
  //     try {
  //       fetch(`/api/metrics:${metricId}`, {
  //         method: 'GET',
  //       })
  //         .then(data => data.json())
  //         .then(data => console.log(data));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });

  return (
    <div>
      <p>I am in a dashboard</p>
      {/* {metricIds.map(metricId => {
        try {
          fetch(`/api/data/metrics:${metricId}`, {
            method: 'GET',
          })
          .then(data => data.json())
          .then(data => console.log(data));
        } catch (err) {
          console.log(err);
        }
      })} */}
    </div>
  );
};

export default Dashboard;
//<h2>{currentDashboard.dashboardName}</h2>
