import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import ProgramList from "./pages/programList/ProgramList";
import ProgramOut from "./pages/programOut/ProgramOut";
import UserProfile from "./pages/userProfile/UserProfile";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import CourseOutList from "./pages/courseOutList/CourseOutList";
import Project from "./pages/project/Project";
import EditProject from "./pages/editProject/EditProject";
import TestProject from "./pages/testProject/TestProject";
import Program from "./pages/program/Program";
import Course from "./pages/course/Course";
import NewProduct from "./pages/newProduct/NewProduct";
import CuriMaps from "./pages/curiMaps/CuriMaps";
import NewMap from "./pages/newMap/NewMap";
import EditMap from "./pages/editMaps/EditMap";
import Board from "./pages/board/Board";

function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/userProfile">
            <UserProfile />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/editProject">
            <EditProject />
          </Route>
          <Route path="/testProject">
            <TestProject />
          </Route>
          <Route path="/program">
            <Program />
          </Route>
          <Route path="/programList">
            <ProgramList />
          </Route>
          <Route path="/programOut/:programOutId">
            <ProgramOut />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/courseOutList">
            <CourseOutList />
          </Route>
          <Route path="/course/:courseId">
            <Course />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/curiMaps">
            <CuriMaps />
          </Route>
          <Route path="/newMap">
            <NewMap />
          </Route>
          <Route path="/editMap">
            <EditMap />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Dashboard;
