import { Router } from "./router/Router";
import './App.css';
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  );
}

export default App;
