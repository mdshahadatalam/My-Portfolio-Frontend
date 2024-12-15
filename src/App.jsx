import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './component/Nav';
import { Home } from './component/Home';
import { About } from './component/About';
import { Process } from './component/Process';
import { Portfolio } from './component/Portfolio';
import { Together } from './component/Together';
import { Skill } from './component/Skill';
import { Education } from './component/Education';
import { Service } from './component/Service';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
function App() {
  

  return (
    <>
   
    <Nav/>
    <Home/>
    <About/>
    <Process/>
    <Portfolio/>
    <Together/>
    <Skill/>
    <Education/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
