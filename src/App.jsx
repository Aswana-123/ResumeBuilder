
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from './pages/ResumeGenerator'
import UserForm from './pages/UserForm'
import PageNotFound from './pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
import His from './pages/His'


function App() {
  

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
         <Route path='/resume' element={<ResumeGenerator/>}/>
          <Route path='/form' element={<UserForm/>}/>
           <Route path='/history' element={<His/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
