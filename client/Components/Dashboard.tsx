import React, { useContext } from 'react';
import { StoreContext } from '../stateStore';
import MetricDisplay from './MetricDisplay';
import { MetricProps } from '../types';


const Dashboard = () => {
  const {
    currentDashboard,
    currentMetrics,
    setCurrentMetrics,
    currentUser,
  }: any = useContext(StoreContext);

  console.log('in dashboard component', currentDashboard);

  const metricIds: string[] = currentDashboard.metrics;

  console.log('here are the ids', metricIds);

  //   const metricComponents: any[] = [];

  setCurrentMetrics(metricIds);

  // initially currentDashboard = [] --> doesn't have .metrics, so l31 fails.
  // after first fetch, currentDashboard has data

  //   setTimeout(() => {
  //     console.log('my components', metricComponents);
  //   }, 2000);

  return (
    <div>
      <h2>{currentDashboard.dashboardName}</h2>
      {currentMetrics.map(metricId => (
        <MetricDisplay metricId={metricId} />
      ))}
    </div>
  );
};

export default Dashboard;

//{metricComponents.length === 8 ? { ...metricComponents } : <p>Loading</p>}
