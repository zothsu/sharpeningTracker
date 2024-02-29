import { useState } from "react";
import { useEffect } from "react";
import * as knivesApi from '../../utilities/knives-api'
import './KnifeDetails.css'

export default function KnifeDetails({knife}) {
  const [knives, setKnives] = useState([])

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };


  useEffect(() => {      
    async function getAllKnives() {
      const allKnives = await knivesApi.getKnives()
      setKnives(allKnives)
    }
  getAllKnives()
}, [])

  return (
  <>
    {knives.map((k, idx)=> (
      <div className="knifedetails" key={idx}>
        <p className="name">Name/Series Name<br/>{k.name}</p>
        <p className="steel">Steel Type<br/>{k.steel}</p>
        <p className="date">Purchase Date <br/>{formatDate(k.purchaseDate)}</p>
        <p className="date">Last Sharpened <br/>{formatDate(k.purchaseDate)}</p>
      </div>
    ))}
  </>
  );
}