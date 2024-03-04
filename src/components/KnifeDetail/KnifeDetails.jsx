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
    <>
      {knives.map((k, idx)=> (
        <Link to={`/library/${k._id}`}>
          <div className="knifedetails" key={idx}>
            <p className="name">Name/Series Name<br/>{k.name}</p>
            <p className="steel">Steel Type<br/>{k.steel === "Other" ? k.otherSteel : k.steel}</p>
            <p className="date">Purchase Date <br/>{formatDate(k.purchaseDate)}</p>
            {/* <p className="date">Last Sharpened <br/>{formatDate(k.stones[0].createdAt)}</p> */}
            {/* <p className="date">Last Sharpened <br/>{formatDate(findLastSharpened(k))}</p> */}
          </div>
        </Link>
      ))}
    </>
  );
}