import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import SendItem from './pages/SendItem';
import  Drive from './pages/Drive';

const App = () => {
 const theme = createTheme({
  palette: {
    primary: {
      main: '#27296d', 
    },
  },
});
  return (
    <>
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/pages/Login' element={<Login />} /> 
          <Route path='/Signup' element={<Signup />} /> 
           <Route path='/pages/SendItem' element={<SendItem />} />
          <Route path='/pages/Drive' element={<Drive/>} />
        </Routes>
      </Router>
      <Footer/>
     </ThemeProvider>
     </AuthProvider>
    </>
  )
}
export default App


