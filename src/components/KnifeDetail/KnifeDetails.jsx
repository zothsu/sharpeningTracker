import { Link } from "react-router-dom";
import './KnifeDetails.css'
import AddKnifeForm from "../AddKnifeForm/AddKnifeForm";
import { useState } from "react";

export default function KnifeDetails({knives, handleDeleteKnife, handleUpdateKnife}) {
  const [edit, setEdit] = useState(false)
  const [editKnife, setEditKnife] = useState(null)
  

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  function findLastSharpened(k) {
    const stone = k.stones.sort((a,b) => a.createdAt-b.createdAt)
    return stone[0].createdAt
  }

  function handleEdit(id) {
    const knife = knives.find(k => k._id === id)
    setEditKnife(knife)
    setEdit(true)
  }


  return (
    <>
    { edit 
      ? <AddKnifeForm setEdit={setEdit} knife={editKnife} handleUpdateKnife={handleUpdateKnife}/>
      : <table>
          <thead>
            <tr>
              <th>Name/Series Name</th>
              <th>Steel Type</th>
              <th>Purchase Date</th>
              <th>Last Sharpened</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {knives.map((k, idx) => (
              <tr className="knifedetails" key={idx}>
                <td>
                  <Link to={`/library/${k._id}`}>
                    {k.name}
                  </Link>
                </td>
                <td>{k.steel === "Other" ? k.otherSteel : k.steel}</td>
                <td>{k.purchaseDate ? formatDate(k.purchaseDate) : "Unknown"}</td>
                <td>{k.stones.length > 0 ? formatDate(findLastSharpened(k)) : "N/A"}</td>
                <td>
                  <button onClick={() => handleDeleteKnife(k._id)}>Delete</button>
                  <button onClick={() => handleEdit(k._id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
}
        </>
  );
}
