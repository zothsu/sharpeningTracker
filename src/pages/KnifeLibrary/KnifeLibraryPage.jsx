import { useState } from "react";
import AddKnifeForm from '../../components/AddKnifeForm/AddKnifeForm'
import { useEffect } from "react";
import * as knivesApi from '../../utilities/knives-api'
import KnifeDetails from "../../components/KnifeDetail/KnifeDetails";

export default function KnifeLibraryPage() {
  const [addForm, setAddForm] = useState(false)
  const [knives, setKnives] = useState([])



  useEffect(() => {      
      async function getAllKnives() {
        const allKnives = await knivesApi.getKnives()
        setKnives(allKnives)
      }
    getAllKnives()
  }, [])

  async function handleAddKnife(content) {
    const knife = await knivesApi.addKnife(content)
    setKnives([...knives, knife])
  }

  return (
    <>
      <h1>Knife Library</h1>
      {addForm 
        ? <AddKnifeForm setAddForm={setAddForm} handleAddKnife={handleAddKnife}/>
        :<div>
          <button onClick={() => {setAddForm(true) }}>Add Knife</button>
          <KnifeDetails knives={knives}/>
        </div>
      }
    </>

  )
}