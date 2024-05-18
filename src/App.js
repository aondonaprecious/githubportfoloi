import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/repos" component={RepoList} />
          <Route path="/repos/:repoName" component={RepoDetails} />
          <Route component={NotFoundPage} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
