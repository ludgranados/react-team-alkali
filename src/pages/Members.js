import { membersData } from "../data/members";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const teamMember = membersData.filter((member) => {
      return member.firstName.toLowerCase().includes(inputValue.toLowerCase());
    });
    inputValue === "" ? setMembers(membersData) : setMembers(teamMember);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="members">
      <div className="row text-center mt-3">
        <div className="col">
          <h1>Welcome to Alkali</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-row flex-wrap">
          {members.map((member, i) => {
            return (
              <div key={i}>
                <div className="d-flex m-3">
                  <div
                    className="card"
                    style={{ width: "15rem", border: "white" }}
                  >
                    <img
                      className="card-img-top align-self-center"
                      src={member.profile_img}
                      alt="Alkali member"
                      style={{ borderRadius: "50%", width: "10rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-text">
                        {" "}
                        {member.firstName} {member.lastName}
                      </h5>
                      <p className="card-text mb-1">
                        {" "}
                        <strong>Role:</strong> {member.role}
                      </p>
                      <p className="card-link mb-1">
                        <Link to={`/members/${member.id}`}>View Details</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
