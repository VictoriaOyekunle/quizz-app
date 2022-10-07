import { Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import SetQuestions from './components/SetQuestions';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Start from './components/Start';
import TakeQuiz from './components/TakeQuiz';
import End from './components/End';
import NotFound from './components/NotFound';


function App() {
  return (
    <Routes>
      <Route path= '/' element={<Signup/>}/>
      <Route path="/signin" element={<Signin />} />
      <Route path='/admin' element={ <Admin /> } />
      <Route path='/setQuestion' element={<SetQuestions/>}/>
      <Route path='/takeQuiz' element={<TakeQuiz />} />
      <Route path='/start' element={<Start />} />  
      <Route path='/end' element={<End />} />
      <Route path= "/*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
