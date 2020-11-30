import React, {useState} from 'react';

const DataContext = React.createContext([{}, () => {}]);

const DataProvider = (props) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};