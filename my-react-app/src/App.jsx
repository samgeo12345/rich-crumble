import {Routes,Route} from 'react-router-dom'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Cake from './Cakes.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
           <Home/>
           <Cake/>
           <Contact/>
          </>
        }/>
        <Route path="/about" element={
          <>
           <About/>
          </>
        } />
      </Routes>
      <Footer/>
    </>
  );
}
export default App