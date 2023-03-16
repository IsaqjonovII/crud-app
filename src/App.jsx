import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./api";
import Update from "./components/Update";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Create from "./components/Create";

function App() {
  const [data, setData] = useState([]);
  const [userId, setuserId] = useState("");

  const [isUpdateClicked, setisUpdateClick] = useState(false);
  const [isCreateClicked, setisCreateClick] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/all`).then((res) => setData(res.data.data));
  }, []);

  console.log(data);
  const handleCreate = () => setisCreateClick(!isCreateClicked);

  function handleDelete(id) {
    axios
      .delete(`${baseURL}/${id}`)
      .then(() => {
        console.log("Post deleted!");
      })
      .then((res) => {
        window.location.reload();
      });
  }

  const handleUpdate = (id) => {
    setisUpdateClick(!isUpdateClicked);
    setuserId(id);
  };

  return (
    <div className="App">
      <button onClick={handleCreate}>Create</button>

      <div className="table__container">
     
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ _id, date, firstName, lastName, type }, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{date}</td>
              <td>{type}</td>
              <td>
                <button onClick={() => handleUpdate(_id)}>
                  <FiEdit2 />
                </button>
                <button onClick={() => handleDelete(_id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isUpdateClicked ? <Update id={userId} /> : <></>}
      {isCreateClicked  ? <Create /> : <></>}
      </div>
      
    </div>
  );
}

export default App;
