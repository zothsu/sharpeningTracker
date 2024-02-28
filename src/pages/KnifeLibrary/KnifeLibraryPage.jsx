import { useState } from "react";
import KnifeDetailPage from "../KnifeDetailPage/KnifeDetailPage";
import { useEffect } from "react";
import * as knivesApi from '../../utilities/knives-api'

export default function App() {
const [knives, setKnives] = useState([])
  // build a use effect to build once in the beginning, inside you will need an async funtion 
  useEffect(() => {
    async function getAllKnives() {
      const allKnives = await knivesApi.getKnives()
      setKnives(allKnives)
    }
    getAllKnives()
  }, [])


  return (
    <main>
      <h1>Knife Library Page</h1>
      <div className="container"></div>
      <KnifeDetailPage />
    </main>
  )
}