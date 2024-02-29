import { useState } from "react";
import AddKnifeForm from '../../components/AddKnifeForm/AddKnifeForm'
import { useEffect } from "react";
import * as knivesApi from '../../utilities/knives-api'

export default function KnifeLibraryPage() {
  const [addForm, setAddForm] = useState(false)
  const [knives, setKnives] = useState([])
  // build a use effect to build once in the beginning, inside you will need an async funtion 
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
          {knives.map((k, idx)=> <h1>{k.steel}</h1>)}
        </div>
      }
    </>

  )
}