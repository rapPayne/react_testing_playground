import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import TodoPage from './pages/TodoPage';
import JokePage from './pages/JokePage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/jokes" element={<JokePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
