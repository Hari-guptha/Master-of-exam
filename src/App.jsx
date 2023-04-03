import { Route, Routes } from 'react-router-dom'
// import Forgot from './components/forgot'
// import Reset from './components/reset'
// import Navbar from './components/Navbar'
// import Footer from './components/footer'
// import Homemain from './components/homemain'
// import Signup from './components/signup'
// import Login from './components/login'
// import Setexam from './components/setexam'
// import Examcode from './components/Examcode'
import Quiz from './components/Quiz'


function App() {
  return (
    <>
    <Quiz />
    {/* <Navbar/>
    <Routes>
      <Route path='/' element={ <Homemain/>} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/signup' element={ <Signup/>} />
      <Route path='/forgot' element={ <Forgot/>} />
      <Route path='/Reset' element={ <Reset/>} />
      <Route path='/setexam' element={ <Setexam/>} />
      <Route path='/examcode' element={ <Examcode/>} />
    </Routes>
    <Footer/> */}
    </>
  )
}

export default App
