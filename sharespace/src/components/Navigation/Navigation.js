import React from "react";
import Profile from '../../hoc/profile/Profile'
import Home from '../../hoc/home/Home'
import Login from '../../hoc/login/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";

class Navigation extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
        <Router>
            <div>
              <nav>
                <div className = "navigation"> 
                  <ul>
                    <li>
                      <Link to="/" style = {{textDecoration: "none", color: "#a9a1ab", fontSize: 20, fontFamily: "Rubik"}} >Home</Link>
                    </li>
                    {this.props.loggedIn?  <li>
                      <Link to="/profile" style = {{textDecoration: "none", color: "#a9a1ab", fontSize: 20, fontFamily: "Rubik"}} >Profile</Link>
                    </li> : null}
                    <li>
                      <Link to="/login" style = {{textDecoration: "none", color: "#a9a1ab", fontSize: 20, fontFamily: "Rubik"}} >Login</Link>
                    </li>
                  </ul>
                </div>
              </nav>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <LoginPage/>
                </Route>
                <Route path="/profile">
                  <ProfilePage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </Router>)
    }
}

function HomePage() {
    return <Home/>;
  }
  
  function ProfilePage() {
    return <Profile/>;
  }
  
  function LoginPage() {
    return <Login/>;
  }

const mapStateToProps = (state) => {
    return {
        userData: state.main.userData,
 /*
        User data should contain email, account username, account password
 */

        isAutheticated: state.main.isAuthenticated,
        loggedIn: state.main.loggedIn,
        //message: state.main.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //test: () => dispatch(actions.test()),
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navigation);