import './App.css';
import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <EntryProvider>
          <Home />
        </EntryProvider>
      </UserProvider>
    </div>
  );
}

export default App;
