import { useState } from "react";

export default function AddSharpeningForm({handleAddSharpening, setAddForm}) {
  const [content, setContent] = useState({
    brand: '',
    medium: 'Diamond',
    otherMedium: '',
    grit: '',
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
    <div>
      <form onSubmit={handleSubmit}>
        <label >Brand</label>
        <input name="brand" type="text" onChange={handleChange} value={content.brand || ''}/>
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
        <label >Grit</label>
        <input name="grit" type="text" onChange={handleChange} value={content.grit || ''}/>
        <label >Date</label>
        <input name="date" type="date" onChange={handleChange} value={content.date || ''}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setAddForm(false) }>Cancel</button>
    </div>
  )
}