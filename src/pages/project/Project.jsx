import React, { useState } from "react";
import "./project.css";
import { DataGrid } from "@mui/x-data-grid";
import windsor from "../../images/windsor.png";
import { DeleteOutline } from "@material-ui/icons";
import { projectRows } from "../../dummyData";
import { Link } from "react-router-dom";

const Project = () => {
  const [data, setData] = useState(projectRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Projects",
      headerName: "Projects",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={windsor} alt="profile" className="userListImg" />
            <div className="">{params.row.username}</div>
          </div>
        );
      },
    },
    {
      field: "Date",
      headerName: "Date Created",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editProject/" + params.row.id}>
              <button className="userListEdit">edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    {
      field: "Add",
      headerName: (
        <button className="newUserButton">
          <Link to={"/newUser"}>Add New</Link>
        </button>
      ),
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/testProject"}>
              <button className="testProjectBtn">New Program</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Project;
