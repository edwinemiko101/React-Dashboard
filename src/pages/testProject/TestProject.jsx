import "./testproject.css";

const NewUser = () => {
  return (
    <main className="newUser">
      <h1 className="newUserTitle">Program Data Entry</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="project name" />
        </div>
        <div className="newUserItem">
          <label>Academic Level</label>
          <select
            name="academic level"
            id="academic level"
            className="newUserSelect"
          >
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Upload</label>
          <input type="file" placeholder="select" />
        </div>
        <div className="newUserItem">
          <label>Faculty</label>
          <select name="faculty" id="faculty" className="newUserSelect">
            <option value="Arts, Humanities, & Social Sciences">
              Arts, Humanities, & Social Sciences
            </option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Engineering">Engineering</option>
            <option
              value="Human Kinetics
"
            >
              Human Kinetics
            </option>
            <option value="Law">Law</option>
            <option value="Nursing">Nursing</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Revision Start</label>
          <input type="date" placeholder="mm-dd-yyyy" />
        </div>
        <div className="newUserItem">
          <label>Export</label>
          <select name="export" id="export" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <textarea id="freeform" name="freeform" rows="4" cols="50">
            Enter text here...
          </textarea>
        </div>
        <div className="newUserItem">
          <label>Document ID</label>
          <input type="text" placeholder="project scope" />
        </div>
        <div className="newUserItem">
          <label>Access Controls</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Owners</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Members</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Guests</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">create</button>
      </form>
    </main>
  );
};

export default NewUser;
