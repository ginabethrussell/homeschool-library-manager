import logo from './logo.svg';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import AddBookForm from './components/AddBookForm';

import './App.css';


function App() {
  return (
      <div className="App">
        <header>
          <h1>Homeschool Library Manager</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/books'>View Books</Link>
            <Link to='/add'>Add Books</Link>
          </nav>
        </header>
        <Switch>
          <Route path='/books' component={Books} />
          <Route path='/add' component={AddBookForm} />
          <Route path='/' component={Home} />
        </Switch>
        <footer>
         &copy; 2021 <a href='https://ginarussell.netlify.app'>Gina Russell Software Developer</a>
        </footer>
      </div>
  );
}

export default App;
