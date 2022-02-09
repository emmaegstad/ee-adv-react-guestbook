import './App.css';
import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
