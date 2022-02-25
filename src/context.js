import React, { useContext, useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tours-project';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <AppContext.Provider
      value={{
        tours,
        removeTour,
        loading,
        fetchTours,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
