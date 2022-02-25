import React from 'react';
import Tours from './Tours';
import { useGlobalContext } from './context';

const App = () => {
  const { tours, fetchTours, loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading">
          <h2>loading...</h2>
        </div>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />;
    </main>
  );
};

export default App;
