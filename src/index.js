import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const BookName = createContext(null)

ReactDOM.render(
  <React.StrictMode>

      <BookName.Provider value ={{name: "Evgen"}}>
          <App />
      </BookName.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

