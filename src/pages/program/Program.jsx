import "./program.css";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="pfeatured">
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">
          Arts, Humanities, & Social Sciences
        </span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">261</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Business</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">524</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <Link to={"/products"}>
          <span className="pfeaturedSub">
            <button className="btn">See All</button>
          </span>
        </Link>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Education</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Engineering</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Human Kinetics</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Law</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Nursing</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">Science</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
      <main className="pfeaturedItem">
        <span className="pfeaturedTitle">New</span>
        <section className="pfeaturedMoneyContainer">
          <span className="pfeaturedMoney">20</span>
          <span className="pfeaturedMoneyRate"></span>
        </section>
        <span className="pfeaturedSub">
          <button className="btn">See All</button>
        </span>
      </main>
    </div>
  );
};

export default Program;
