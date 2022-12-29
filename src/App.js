import { Router } from "./router/Router";
import './App.css';
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router/>
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
