import logo from './stackedbooks.png';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import github from './github-logo.png';
import linkedin from './linkedin.png';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
      <div className="App">
        <header>
          <div className='nav-wrapper'>
            <div className='logo'>
              <img className='App-logo' src={logo} alt='stacked books logo image' />
              <h2>Homeschool Library Manager</h2>
            </div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/signup'>Signup</Link>
              <Link to='/login'>Login</Link>
            </nav>
          </div>
        </header>
        <main className='main-wrapper'>
          <Switch> 
            <Route path='/login' component={ Login}  />
            <Route path='/signup' component={ Signup }  />
            <Route path='/about' component={ About } />
            <Route path='/' component={ Home } />
          </Switch>
        </main>
        <footer>
          <div className='gina-russell'>
            <p>&copy; 2021 <a href='https://ginarussell.netlify.app'>Gina Russell Software Developer</a></p>
            <div className='links'>
              <a href='https://github.com/ginabethrussell'><img src={github} alt='github icon'/></a>
              <a href='https://www.linkedin.com/in/gina-beth-russell/'><img src={linkedin} alt='linkedin icon'/></a>
            </div>
          </div>
         {/* <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
         and <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </footer>
      </div>
  );
}

export default App;
