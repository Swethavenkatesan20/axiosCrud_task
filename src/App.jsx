import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', id: null });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addUser = (userData) => {
    axios.post('https://jsonplaceholder.typicode.com/users', userData)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  const handleEditClick = (user) => {
    setFormData({ name: user.name, email: user.email, id: user.id });
    setIsEditing(true);
  };

  const handleEditUser = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${formData.id}`, formData)
      .then(() => {
        const updatedUsers = users.map(user => (user.id === formData.id ? formData : user));
        setUsers(updatedUsers);
        setFormData({ name: '', email: '', id: null });
        setIsEditing(false);
      })
      .catch(error => console.error('Error editing user:', error));
  };

  const handleDeleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">
        <marquee>
          <h1 className="mb-4 bg-secondary text-white rounded-pill text-center">User Detail management</h1>
        </marquee>
        <div className="row">
          <div className="col-md-6">
            <UserForm
              addUser={addUser}
              formData={formData}
              setFormData={setFormData}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleEditUser={handleEditUser}
            />
          </div>
          <div className="col-md-6">
            <UserList
              users={users}
              handleEditClick={handleEditClick}
              handleDeleteUser={handleDeleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
