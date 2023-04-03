import Landingpage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Layout from "./Layout";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Layout />
          </Route>
          <Route path="/userProfile">
            <Layout />
          </Route>
          <Route path="/project">
            <Layout />
          </Route>
          <Route path="/editProject">
            <Layout />
          </Route>
          <Route path="/testProject">
            <Layout />
          </Route>
          <Route path="/program">
            <Layout />
          </Route>
          <Route path="/programList">
            <Layout />
          </Route>
          <Route path="/programOut/:programOutId">
            <Layout />
          </Route>
          <Route path="/newUser">
            <Layout />
          </Route>
          <Route path="/courseOutList">
            <Layout />
          </Route>
          <Route path="/course/:courseId">
            <Layout />
          </Route>
          <Route path="/newproduct">
            <Layout />
          </Route>
          <Route path="/curiMaps">
            <Layout />
          </Route>
          <Route path="/newMap">
            <Layout />
          </Route>
          <Route path="/editMap">
            <Layout />
          </Route>
          <Route path="/board">
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
// export { Appp };
