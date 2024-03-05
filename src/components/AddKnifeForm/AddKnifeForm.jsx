import { useState } from "react";

export default function AddKnifeForm({handleAddKnife, handleUpdateKnife, setAddForm, knife, setEdit}) {
  const [content, setContent] = useState(knife ? knife : {
    name: '',
    length: '',
    steel: 'Stainless Steel',
    otherSteel: '',
    purchaseDate: '',
    brand: '',
    imageURL: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    knife ? handleUpdateKnife(content, knife._id) : handleAddKnife(content)
    knife && setEdit(false) 
    setAddForm(false)
  }

  function handleChange(evt) {
    const data = {...content, [evt.target.name]:evt.target.value}
    setContent(data)
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label >Name/Series Name</label>
        <input name="name" type="text" onChange={handleChange} value={content.name || ''}/>
        <label htmlFor="">Length</label>
        <input name="length" type="text" onChange={handleChange} value={content.length || ''}/>
        <label >Steel</label>
        <select value={content} name="steel" onChange={handleChange}>
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
      <button onClick={() => knife ? setEdit(false) : setAddForm(false) }>Cancel</button>
    </div>
  )
}