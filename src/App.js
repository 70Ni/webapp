import logo from './logo.svg';
import './App.css';
import IntoSec from './Sections/IntoSec';
import Navigation from './Section/Navigation/Navigation';
import Brief from './Section/Brief/Brief';
import Achieve from './Section/Achievements/Achieve';
import Case from './Section/Case/Case';
import Projects from './Section/Projects/Projects';
import Clients from './Section/Clients/Clients';
import Feedback from './Section/Feedback/Feedback';
import Footer from './Section/Footer/Footer';
import Capabilities from './Section/Capabilities/Capabilities';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='MainSec'>
      <IntoSec />
      <Brief />
      <Achieve />
      <Case />
      <Projects />
      <Capabilities />
      <Clients />
      <Feedback />
      <Footer />
      </div>
    </div>
  );
}

export default App;
