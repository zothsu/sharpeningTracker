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

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <h1>Knife Detail Page</h1>
      { knife && 
        <div className="detailcontainer">
          <aside className="leftSide">
            <div className="knifeDetails">
              <h2>Knife Details</h2>
              <p className="name">Name/Series Name: {knife.name}</p>
              <p className="length">Length: {knife.length}</p>
              <p className="steel">Steel Type: {knife.steel === "Other" ? knife.otherSteel : knife.steel}</p>
              <p className="purchase">Purchase Date: {formatDate(knife.purchaseDate)}</p>
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
          <div className="sharpeingDetails">
            <h2>Sharpening History &nbsp;
              <button onClick={() => setAddForm(true)}> Add Sharpening</button>
              {addForm && <AddSharpeningForm handleAddSharpening={handleAddSharpening} setAddForm={setAddForm} />}
            </h2>
            <table>
              <tr>
                <th>Stone Brand</th>
                <th>Grit</th>
                <th>Date</th>
              </tr>
              {knife.stones.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.brand}</td>
                    <td>{val.grit}</td>
                    <td>{formatDate(val.createdAt)}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      }
    </>
  )
}