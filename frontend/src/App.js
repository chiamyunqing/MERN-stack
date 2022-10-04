import { useState, useEffect } from "react";
import Axios from "axios";
import AddUserForm from "./components/AddUserForm";
import UserCard from "./components/UserCard";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:5000/addUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
      setAge(0);
      setName("");
      setUsername("");
    });
  };

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
      <AddUserForm setName={setName} setAge={setAge} setUsername={setUsername} createUser={createUser} />
      </div>
      
    </div>
  );
}

export default App;
