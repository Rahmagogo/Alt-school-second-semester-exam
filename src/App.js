import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './pages/ErrorBoundary';
import NotFound from './pages/NotFound';
import RepositoryList from './pages/index';
import SingleRepository from './pages/RepositoryDetails';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/repo/:repoName" element={<SingleRepository />} />
          <Route element={<NotFound />} />
          <Route path="" />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;