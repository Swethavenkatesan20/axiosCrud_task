import React, { useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ addUser, formData, setFormData, isEditing, setIsEditing, handleEditUser }) => {
  useEffect(() => {
    if (isEditing) {
      setFormData({ name: formData.name, email: formData.email, id: formData.id });
    }
  }, [formData, isEditing, setFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      handleEditUser();
    } else {
      addUser(formData);
    }
    setFormData({ name: '', email: '', id: null });
    setIsEditing(false);
  };

  return (
    <div className="mb-4">
      <h2>{isEditing ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">{isEditing ? 'Edit User' : 'Add User'}</button>
        {isEditing && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>Cancel</button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
