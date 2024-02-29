import { useState } from "react";
import { useEffect } from "react";
import * as knivesApi from '../../utilities/knives-api'

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
      <div key={idx}>
        <h1>{k.name}</h1>
        <p>{k.steel}</p>
        <p>{formatDate(k.purchaseDate)}</p>
      </div>
    ))}
  </>
  );
}