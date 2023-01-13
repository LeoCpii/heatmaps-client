import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHabits from './pages/my-habits';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyHabits />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
