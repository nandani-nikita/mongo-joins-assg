import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='App'>

      <Header title={'Team List'} />
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Missing />} />
      </Routes>

    </div>
  );
}

export default App;
