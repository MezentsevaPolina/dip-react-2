import './App.css';
import {
    Route,
    Routes,
    Link
} from 'react-router-dom';
import Header from "./components/header/Header";
// import Fetcher from "./components/task";
import ManeBody from "./components/mane-body/ManeBody";
import CursList from "./components/curs-list/CursList";

function App() {
  return (
        <div className="App">
            <Header/>
            <ManeBody/>
            <CursList/>
            <Routes>
                <Route path='/path1' element={<Component1 />} />
                <Route path='/path2' element={<Component2 />} />
                <Route path='/path3/:id' element={<Component3 />} />
            </Routes>
        </div>
  );
}

export default App;
