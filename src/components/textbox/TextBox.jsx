import './TextBox.css'
export const TextBox = ({ disable, value, handleChange, placeholder }) => {
  return (
    <div className='textbox-container'>
      <textarea disabled={disable} value={value} placeholder={placeholder} onChange={handleChange} className='textbox'>
      </textarea>
    </div>
  )
}
