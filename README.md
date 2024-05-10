# created a react project crud_axios
npm create vite@latest
 
# installed dependensies
npm install
npm install bootstrap
npm install axios

add bootstrap link in index.html

# creating a folder ------
 UserForm.jsx and UserList.jsx in src/components

UserForm.jsx 
    for user input  
    used UseEffect Hook ,
        for fetching initial user data from the mock API using Axios

   # addUser(userData):
        to add new user to the list by making a POST request to the API.
   # handleEditClick(user): 
        Sets the form data to edit mode when editing a user.
   # handleEditUser(): 
        Edits an existing user by making a PUT request to update the user data.
   # handleDeleteUser(id): 
        Deletes a user by making a DELETE request to the API.

    { addUser, formData, setFormData, isEditing, setIsEditing, handleEditUser }  props from app.js  

UserList.jsx 
    for displaying the list of users




