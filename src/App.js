import './App.css';
import Background from './components/background.jsx';
import CursorFollower from './components/CustomCursor.jsx';
import LogoAnimation from './components/LogoAnimation.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Background/>
      <LogoAnimation>
        <Navbar/>
        <CursorFollower />
     
     </LogoAnimation>
    </div>
  );
}

export default App;
