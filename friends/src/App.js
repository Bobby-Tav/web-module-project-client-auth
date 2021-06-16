import './App.css';
import {Route, Link , Switch} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
//Reducer
import reducer from './reducer/loginReducer'

//Components
import Login from './components/Login'
import Friends from './components/Friends'
import AddFriend from './components/addFriend';
const store = createStore(reducer)
function App() {
  
  return (
    <Provider store={store}>
    <div>
      <Link to='/api/login'>Home</Link>
      <Link to='/api/friends'>Friends </Link>

      <Switch>
        <Route path='/api/login' component={Login} />
        <Route path='/api/friends' component={Friends}/>
        <Route path='/api/add_friend' component={AddFriend}/>
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
