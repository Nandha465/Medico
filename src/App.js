import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import BookingForm from './BookingForm.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/booking" element={<BookingForm/>}/>
      </Routes>
    </Router>
    );
  }
  
  export default App;
  
