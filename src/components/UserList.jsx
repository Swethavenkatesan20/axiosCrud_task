import React from 'react';

const UserList = ({ users, handleEditClick, handleDeleteUser }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>User List</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {users.map(user => (
            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
              {user.name} - {user.email}
              <div>
                <button className="btn btn-warning me-2" onClick={() => handleEditClick(user)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
