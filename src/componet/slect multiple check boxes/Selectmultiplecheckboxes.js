import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";


const multiplecheck =[
    {name: "Karachi"},
    {name: "Islamabad"},
    {name: "Lahore"},
    {name: "Rawalpindi"},
    {name: "Peshawar"},
    {name: "Faisalabad"},
    {name: "Multan"},
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(multiplecheck);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log("user data",users)
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
 const  deleteSingleRecourd=()=>{

  }
  const deleteAllrecourd=()=>{

  }

  return (
    <div className="container my-4" style={{ width: 400 }}>
      <form className="form">
        <h3>Select Users</h3>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
          <div>
          <button className="btn bg-secondary"
              onClick={deleteAllrecourd}
              > Delete All</button> </div>
        </div>

        {users.map((user) => (
          <div className="form-check">
              <button className="btn bg-info"
              onClick={()=>deleteSingleRecourd}
              > delete row</button>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
