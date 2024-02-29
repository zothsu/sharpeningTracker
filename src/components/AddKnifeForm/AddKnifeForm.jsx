import { useState } from "react";

export default function AddKnifeForm({handleAddKnife, setAddForm}) {
  const [content, setContent] = useState({
    steel: 'Stainless Steel',
    otherSteel: '',
    purchaseDate: '',
    brand: '',
    imageURL: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleAddKnife(content)
    setAddForm(false)
  }

  function handleChange(evt) {
    const data = {...content, [evt.target.name]:evt.target.value}
  setContent(data)
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label ></label>
        <input name="name" type="text" onChange={handleChange} value={content.name || ''}/>
        <label >Steel</label>
        <select name="steel" onChange={handleChange}>
          <option value="Stainless Steel">Stainless Steel</option>
          <option value="Carbon Steel">Carbon Steel</option>
          <option value="Powdered Metal">Powdered Metal</option>
          <option value="Other">Other</option>
        </select>
        {content.steel === "Other" && <input name="otherSteel" type="text" onChange={handleChange} value={content.otherSteel || ''}/>}
        <label >Brand</label>
        <input name="brand" type="text" onChange={handleChange} value={content.brand || ''}/>
        <label >Purchase Date</label>
        <input name="purchaseDate" type="date" onChange={handleChange} value={content.purchaseDate || ''}/>
        <label >Image URL</label>
        <input name="imageURL" type="text" onChange={handleChange} value={content.imageURL || ''}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setAddForm(false) }>Cancel</button>
    </div>
  )
}