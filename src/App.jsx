
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/about" component={About} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
