import {Route, Routes, redirect} from "react-router-dom"
import Hub from './component/Hub'
import Hub1 from './component/Hub1'
import Homepage1 from './component/Homepage1';
import Homepage2 from './component/Homepage2';
import Homepage3 from './component/Homepage3';


function App() {
  return (
    <>
    <Routes>
      <Route path = '/Resume-Maker' element = {<Hub1/>}/>
      <Route path = '/Homepage1' element = {<Homepage1/>}/>
      <Route path = '/Homepage2' element = {<Homepage2/>}/>
      <Route path = '/Homepage3' element = {<Homepage3/>}/>
    </Routes>
    
    </>
  );
}

export default App;
