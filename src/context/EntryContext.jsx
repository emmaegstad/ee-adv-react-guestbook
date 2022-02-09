import { createContext, useContext, useState, useEffect } from 'react';
import { getEntries } from '../services/entries';

export const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const value = { entries, setEntries };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEntries();
      console.log(data);
      setEntries(data);
    };
    fetchData();
  }, []);

  return <EntryContext.Provider value={value}>{children}</EntryContext.Provider>;
};

const useEntries = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error('useUser must be used within an EntryProvider');
  }

  return context;
};

export { EntryProvider, useEntries };
