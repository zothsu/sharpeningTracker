import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";  
import AddSharpeningForm from '../../components/AddSharpeningForm/AddSharpeningForm'
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm'
import * as knivesApi from '../../utilities/knives-api'
import './KnifeDetailPage.css'

export default function KnifeDetailPage() {
  const { idx } = useParams();
  const [knife, setKnife] = useState(null);
  const [addForm, setAddForm] = useState(null);
  const [addNoteForm, setAddNoteForm] = useState(null)

  async function handleAddSharpening(content) {
    const sharpening = await knivesApi.addSharpening(idx, content)
    // setSharpenings([...sharpenings, sharpening])
    setKnife(sharpening)
  }
  async function handleAddNote(content) {  
    const updatedKnife = await knivesApi.addNote(idx, content)
    setKnife(updatedKnife)
  }

  useEffect(() => {
    async function getKnife() { 
      const knife = await knivesApi.getKnife(idx)
      setKnife(knife);
    }
    getKnife();
  }, [idx]);

  return (
    <>
      <h1>Knife Detail Page</h1>
      { knife && 
        <div className="detailcontainer">
          <aside className="leftSide">
            <div className="knifeDetails">
              <h2>Knife Details</h2>
              <p className="name">Name/Series Name: {knife.name}</p>
              <p className="steel">Steel Type: {knife.steel === "Other" ? knife.otherSteel : knife.steel}</p>
              <p className="purchase">Purchase Date: {knife.purchasedate}</p>
            </div>
            <div className="knifeNotes">
              <h2>Notes</h2>
              <button onClick={() => setAddNoteForm(true)}>Add Note</button>
              {addNoteForm && <AddNoteForm handleAddNote={handleAddNote} setAddNoteForm={setAddNoteForm} />}
              { knife.notes.map((n, idx)=> (
                <div key={idx}>
                  <p>{n.noteType}: {n.noteDetails}</p>
                </div>
              ))}
            </div>
          </aside>
          <div className="knifeSharpeningHist">
            <h2>Sharpening History</h2>
            <button onClick={() => setAddForm(true)}>Add Sharpening</button>
            {addForm && <AddSharpeningForm handleAddSharpening={handleAddSharpening} setAddForm={setAddForm} />}
            { knife.stone.map((s, idx)=> (
              <div key={idx}>
                <p className="brand">Brand {s.brand}</p>
                <p className="medium">Medium {s.medium === "Other" ? s.otherMedium : s.medium}</p>
                <p className="grit">Grit{s.grit}</p>
                <p className="date">Sharpen Date{s.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )
}