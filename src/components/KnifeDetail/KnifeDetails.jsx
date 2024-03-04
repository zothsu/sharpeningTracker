import { Link } from "react-router-dom";
import './KnifeDetails.css'

export default function KnifeDetails({knives}) {

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  function findLastSharpened(k) {
    const stone = k.stones.sort((a,b) => a.createdAt-b.createdAt)
    console.log(stone[0].createdAt)
    return stone[0].createdAt
  }

  return (
    <table>
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
          <tr key={idx}>
            <td>
              <Link to={`/library/${k._id}`}>
                {k.name}
              </Link>
            </td>
            <td>{k.steel === "Other" ? k.otherSteel : k.steel}</td>
            <td>{formatDate(k.purchaseDate)}</td>
            <td>{k.stones.length > 0 ? formatDate(findLastSharpened(k)) : "N/A"}</td>
            <td>
              <button>Delete</button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}