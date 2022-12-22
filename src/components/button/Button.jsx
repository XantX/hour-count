import './Button.css'
export const Button = ({ text, onClick }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} className="button-component">{ text }</button>
    </div>
  )
}
