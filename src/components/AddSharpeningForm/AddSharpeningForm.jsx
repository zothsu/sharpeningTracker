import { useState } from "react";
import './AddSharpeningForm.css'

export default function AddSharpeningForm({handleAddSharpening, setAddForm}) {
  const [content, setContent] = useState({
    brand: '',
    medium: 'Diamond',
    otherMedium: '',
    grit: '',
    date: '',
  });

  function handleChange(evt) {
    const data = {...content, [evt.target.name]:evt.target.value}
    setContent(data)
  }


  function handleSubmit(e) {
    e.preventDefault();
    handleAddSharpening(content)
    setAddForm(false)
  }

  return(
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label >Date</label>
        <input name="date" type="datetime-local" onChange={handleChange} value={content.date || ''}/>
        <label >Brand</label>
        <input name="brand" type="text" onChange={handleChange} value={content.brand || ''}/>
        <label >Grit</label>
        <input name="grit" type="text" onChange={handleChange} value={content.grit || ''}/>
        <label >Medium</label>
        <select name="medium" onChange={handleChange}>
          <option value="Diamond">Diamond</option>
          <option value="Glass">Glass</option>
          <option value="Water Stone">Water Stone</option>
          <option value="Oil Stone">Oil Stone</option>
          <option value="Natural Stone">Natural Stone</option>
          <option value="Other">Other</option>
        </select>
        {content.medium === "Other" && <input name="otherMedium" type="text" onChange={handleChange} value={content.otherMedium || ''}/>}
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setAddForm(false) }>Cancel</button>
    </div>
  )
}