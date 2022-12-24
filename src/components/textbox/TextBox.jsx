
import './TextBox.css'
export const TextBox = ({ handleChange }) => {
  return (
    <div className='textbox-container'>
      <textarea onChange={handleChange} className='textbox'>
      </textarea>
    </div>
  )
}
