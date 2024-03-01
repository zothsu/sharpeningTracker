import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as knivesApi from '../../utilities/knives-api'
import './KnifeDetails.css'

export default function KnifeDetails({knives}) {

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };



  return (
    <>
      {knives.map((k, idx)=> (
          <Link to={`/library/${k._id}`}>
        <div className="knifedetails" key={idx}>
          <p className="name">Name/Series Name<br/>{k.name}</p>
          <p className="steel">Steel Type<br/>{k.steel === "Other" ? k.otherSteel : k.steel}</p>
          <p className="date">Purchase Date <br/>{formatDate(k.purchaseDate)}</p>
          <p className="date">Last Sharpened <br/>{formatDate(k.lastSharpened)}</p>
        </div>
            </Link>
      ))}
    </>
  );
}