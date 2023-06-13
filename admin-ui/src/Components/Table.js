import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faTrash,
  faCircleCheck,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./table.css";

const Table = ({
  users,
  selectedLine,
  handleRowSelect,
  handleEditUser,
  handleDeleteUser,
  handleSelectAll,
}) => {
  const [editIt, setEditIt] = useState(null);

  const AllSelect = selectedLine.length === users.length;

  const handleEditing = (user) => {
    setEditIt(user);
  };

  const handleSave = () => {
    handleEditUser(editIt);
    setEditIt(null);
  };

  const handleCancel = () => {
    setEditIt(null);
  };

  const handleInputChange = (event, space) => {
    setEditIt((prevUser) => ({
      ...prevUser,
      [space]: event.target.value,
    }));
  };

  const lineSelected = (user) => selectedLine.includes(user);

  return (
    <div className="table-div">
      <table className="user-tab">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={AllSelect}
                onChange={handleSelectAll}
              />
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={lineSelected(user) ? "selected-line" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={lineSelected(user)}
                  onChange={(event) => handleRowSelect(event, user)}
                />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {editIt && editIt.id === user.id ? (
                  <input
                    type="text"
                    value={editIt.name}
                    onChange={(event) => handleInputChange(event, "name")}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editIt && editIt.id === user.id ? (
                  <input
                    type="text"
                    value={editIt.email}
                    onChange={(event) => handleInputChange(event, "email")}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editIt && editIt.id === user.id ? (
                  <input
                    type="text"
                    value={editIt.role}
                    onChange={(event) => handleInputChange(event, "role")}
                  />
                ) : (
                  user.role
                )}
              </td>
              <td className="actions">
                {editIt && editIt.id === user.id ? (
                  <>
                    <button onClick={handleSave}>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#50b7f7" }}
                      />
                    </button>
                    <button onClick={handleCancel}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        style={{ color: "#f91706" }}
                      />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditing(user)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button onClick={() => handleDeleteUser(user)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#ff0000" }}
                      />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
