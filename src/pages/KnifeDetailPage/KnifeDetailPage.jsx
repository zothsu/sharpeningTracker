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
              <p className="name">Name/Series Name: <span>{knife.name}</span> 
                </p>
              <p className="steel">Steel Type: <span>{knife.steel === "Other" ? knife.otherSteel : knife.steel}</span></p>
              <p className="length">Length: <span>{knife.length}</span></p>
              <p className="purchase">Purchase Date: <span>{formatDate(knife.purchaseDate)}</span></p>
            </div>
            <div className="knifeNotes">
              <h2 className="btnInTitle">Notes &nbsp;
                <button onClick={() => setAddNoteForm(true)}>Add Note</button>
              </h2>
              {addNoteForm && <AddNoteForm handleAddNote={handleAddNote} setAddNoteForm={setAddNoteForm} />}
              { knife.notes.map((n, idx)=> (
                <div key={idx}>
                  <p className="notes">{n.noteType}: &nbsp;<span> {n.noteDetails}</span></p>
                </div>
              ))}
            </div>
          </aside>
          <div className="sharpeingDetails">
            <h2 className="btnInTitle">Sharpening History &nbsp;
              <button onClick={() => setAddForm(true)}> Add Sharpening</button>
            </h2>
              {addForm && <AddSharpeningForm handleAddSharpening={handleAddSharpening} setAddForm={setAddForm} />}
            <div className="sharpeingDetailsTable">
              <table>
                <tr>
                  <th className="hide-on-small">Stone Brand</th>
                  <th>Grit</th>
                  <th className="hide-on-small">Medium</th>
                  <th>Date</th>
                </tr>
                {knife.stones.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td className="hide-on-small">{val.brand}</td>
                      <td>{val.grit}</td>
                      <td className="hide-on-small">{val.medium === "Other" ? val.otherMedium : val.medium}</td>
                      <td>{formatDate(val.date)}</td>
                    </tr>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      }
    </>
  )
}