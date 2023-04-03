import React from "react";
import "./widgetSm.css";
import windsor from "../../images/windsor.png";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Faculty</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Arts & Social Science</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Business Faculty</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Education</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Engineering</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Human Kinetics</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Law</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nursing</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Science</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={windsor} alt="profile  " className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">New</span>
            <span className="widgetSmUTitle">program</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            See All
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
