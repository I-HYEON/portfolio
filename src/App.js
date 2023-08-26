import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/common/NavigationBar';
import AppRouter from './utils/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
