import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// Components
import HomePage from './components/HomePage/HomePage';
// import AddWordPage from './components/AddWordPage/AddWordPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} basename={"https://g-raywol-f.github.io/fab-word-checker"} />
        {/* <Route path='/addWord' element={<AddWordPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;