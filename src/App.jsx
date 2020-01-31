import React from 'react';
import './App.css';
import CampaignDashboard from './containers/CompaignDashboard';
import ErrorBoundary from './errors/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <CampaignDashboard />
      </div>
    </ErrorBoundary>
  );
}

export default App;
