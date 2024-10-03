

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Form from './pages/form';
import FormSubmit from './pages/submit';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


  const App: React.FC = () => {
      return (
        <>
         <Router>
          <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='/submit' element={<FormSubmit />} />
          </Routes>
         </Router>
        </>
      )
  }
  
root.render(<App />);


