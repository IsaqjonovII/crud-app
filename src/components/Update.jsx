import { useState } from "react";
import axios from "axios";
import { baseURL } from "../api";
const Update = ({id}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [number, setnumber] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault()
    axios
    .put(`${baseURL}/${id}`, {
        firstName,
        lastName,
        date,
        number,
        type,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });
    };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label>
          First name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Update;
