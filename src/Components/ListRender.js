import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Glauco", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Glauco", age: 31 },
    { id: 2, name: "Jones", age: 19 },
    { id: 3, name: "Scorpion", age: 201 }
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      {/* render sem key primeiramente */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* render com Key mais utilizado */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
