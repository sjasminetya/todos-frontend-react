import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './configs/redux/store'
import Login from './Login/Login'
import Home from './Home/Home'
import Task from './Task/Task'
import EditTask from './Task/EditTask'
import setAuthorization from './configs/redux/utils/setAuthorization'

if (localStorage.token) {
  setAuthorization(localStorage.token)
}


function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/task/:id" exact component={Task}></Route>
          <Route path="/task/edit/:id" component={EditTask}></Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
