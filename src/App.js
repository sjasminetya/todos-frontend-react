import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './configs/redux/store'
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Task from './pages/Task/Task'
import EditTask from './pages/Task/EditTask/EditTask'
import EditLabel from './pages/Admin/EditLabel/EditLabel'
import setAuthorization from './configs/redux/utils/setAuthorization'

if (localStorage.token) {
  setAuthorization(localStorage.token)
}


function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Main}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/task/:id" exact component={Task}></Route>
          <Route path="/task/edit/:id" component={EditTask}></Route>
          <Route path="/label/edit/:id" component={EditLabel}></Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
