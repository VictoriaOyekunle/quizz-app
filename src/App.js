import { Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Signup/>}/>
      <Route path="/signin" element={<Signin />} />
      <Route path='/admin' element={ <Admin /> } />
    </Routes>
  );
}

export default App;
