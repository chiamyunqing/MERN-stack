import { useState, useEffect } from "react";
import Axios from "axios";
import AddUserForm from "./components/AddUserForm";
import UserCard from "./components/UserCard";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [addedUser, setAddedUser] = useState(null);


  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  useEffect(() => {
    if (addedUser !== null) {
      setListOfUsers([...listOfUsers, addedUser]);
    }
  }, [addedUser]);

  return (
    <div>
       <div className="usersDisplay">
            {listOfUsers.map((user) => {
                return (
                    <UserCard user={user} />
                );
            })}
        </div>
      <div>
      <AddUserForm setAddedUser={setAddedUser} />
      </div>
    </div>
  );
}

export default App;
