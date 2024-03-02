import { useState } from "react";

export default function AddKnifeForm({handleAddNote, setAddNoteForm}) {
  const [content, setContent] = useState({
    noteType: 'Damage Report',
    noteDetails: '',
  });

  function handleChange(evt) {
    const data = {...content, [evt.target.name]:evt.target.value}
    setContent(data)
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddNote(content)
    setAddNoteForm(false)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Note Type</label>
        <select name="noteType" onChange={handleChange}>
          <option value="Damage Report">Damage Report</option>
          <option value="Bevel Angle">Bevel Angle</option>
          <option value="Other">Other</option>
        </select>
        <label>Note Details</label>
        <input name="noteDetails" type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setAddNoteForm(false) }>Cancel</button>
    </div>
  )
}