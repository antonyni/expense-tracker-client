
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoggedIn from './pages/LoggedIn';
import { useCookies } from 'react-cookie'
import MyContext from './utils/MyContext';

const App = () => {
  const [cookies, setCookies] = useCookies();
  return (
    <>
      <MyContext.Provider value={{ cookies, setCookies }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/logged-in" element={<LoggedIn />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  )
}

export default App
