import "./sidebar.css";
import {
  Home,
  Folder,
  Subject,
  Bookmark,
  Bookmarks,
  Book,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Assignment,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <main className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/Project" className="link">
              <li className="sidebarListItem">
                <Folder className="sidebarIcon" />
                Projects
              </li>
            </Link>
            <Link to="/Program" className="link">
              <li className="sidebarListItem">
                <Subject className="sidebarIcon" />
                Programs
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">quick menu</h3>
          <ul className="sidebarList">
            <Link to="/programList" className="link">
              <li className="sidebarListItem ">
                <Bookmark className="sidebarIcon" />
                Program Outcomes
              </li>
            </Link>
            <Link to="/courseOutList" className="link">
              <li className="sidebarListItem">
                <Bookmarks className="sidebarIcon" />
                Course Outcomes
              </li>
            </Link>
            <Link to="/curiMaps" className="link">
              <li className="sidebarListItem">
                <Book className="sidebarIcon" />
                Curriculum Maps
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tools</h3>
          <ul className="sidebarList">
            <Link to="/board" className="link">
              <li className="sidebarListItem active">
                <Assignment className="sidebarIcon" />
                To-Do Board
              </li>
            </Link>
            <li className="sidebarListItem">
              <Folder className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
