//import logo from './logo.svg';
import './App.css';
//import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Comments from '../Comments/Comments';
import Register from '../Register/Register'
import Login from '../Login/Login';
import Posts from '../Posts/Posts';
import Header from '../Header/Header'
import Detail from '../publications/Detail/Detail';
import CreatePost from '../publications/CreatePost/CreatePost'
import Main from './Main/Main'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function render(title, Cmp) {
  return function({match}) {
    return <Main title={title}><Cmp match={match} /></Main>
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Navigation /> */}
        <div className="Container">
          {/* <Aside /> */}
          <Switch>
            <Route path="/" exact><Redirect to="/posts" /></Route>
            <Route path="/posts" render={render('Posts', Posts)} />
            <Route path="/comment" exact><Redirect to="/comments" /></Route>
            <Route path="/comments" render={render('Comments', Comments)} />
            <Route path="/post/:id" render={render('Posts', Detail)} />
            <Route path="/create-posts">
              <Main title="Create Post"><CreatePost /></Main>
            </Route>
            <Route path="/login">
              <Main title="Login"><Login /></Main>
            </Route>
            <Route path="/register">
              <Main title="Register"><Register /></Main>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
