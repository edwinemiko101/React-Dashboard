import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  PowerSettingsNew,
} from "@material-ui/icons";
import SearchBar from "material-ui-search-bar";
import avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="topbar">
      <main className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CuMA </span>
        </div>
        <div className="topCenter">
          <SearchBar
            style={{
              height: 45,
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to="/userProfile">
            <img src={avatar} alt="profile" className="topAvatar" />
          </Link>
          <Link to="/login">
            <div className="topbarIconContainer">
              <PowerSettingsNew />
            </div>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Topbar;
