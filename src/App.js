import './App.css';
import {
    Route,
    Routes
} from "react-router-dom";
import MainPage from "./MainPage";
import LoginForm from "./components/login/LoginForm";
import RegistrationForm from "./components/login/RegistrationForm";

function App() {
  return <>
        <div className="App">
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/registration' element={<RegistrationForm/>}/>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </div>
  </>;
}

export default App;
