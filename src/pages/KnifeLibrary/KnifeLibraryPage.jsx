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

  async function handleDeleteKnife(id) {
    await knivesApi.deleteKnife(id);
    const updatedKnives = knives.filter(knife => knife._id !== id);
    setKnives(updatedKnives);
  }

  async function handleUpdateKnife(content, id) {
    const knife = await knivesApi.updateKnife(content, id)
    const updatedKnives = knives.map(k => k._id === knife._id ? knife : k )
    setKnives(updatedKnives)
  }

  return (
    <>
      {addForm 
        ? <AddKnifeForm knife={false} setAddForm={setAddForm} handleAddKnife={handleAddKnife}/>
        :<div>
        <h1>Knife Library &nbsp;
          <button onClick={() => {setAddForm(true) }}>Add Knife</button></h1>
          <KnifeDetails handleDeleteKnife={handleDeleteKnife} handleUpdateKnife={handleUpdateKnife} knives={knives}/>
        </div>
      }
    </>

  )
}