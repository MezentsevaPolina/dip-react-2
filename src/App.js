import './App.css';
import {
    Route,
    Routes
} from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RegistrationForm from "./components/login/RegistrationForm";
import CursListAll from "./components/curs-list/CursListAll";
import CursListPop from "./components/curs-list/CursListPop";
import CursListFree from "./components/curs-list/CursListFree";
import CursForm from "./components/curs-data/CursForm";
import UserForm from "./components/user/UserForm";
import Contacts from "./components/contacts/Contacts";
import CertificateList from "./components/certificate/CertificateList";

function App() {
  return <>
        <div className="App">
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/registration' element={<RegistrationForm/>}/>
                <Route path='/' element={<CursListAll/>}/>
                <Route path='/allclass' element={<CursListAll/>}/>
                <Route path='/popclass' element={<CursListPop/>}/>
                <Route path='/freeclass' element={<CursListFree/>}/>
                <Route path='/cursform' element={<CursForm/>}/>
                <Route path='/user' element={<UserForm/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/certificates' element={<CertificateList/>}/>
            </Routes>
        </div>
  </>;
}

export default App;
