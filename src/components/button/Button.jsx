import './Button.css'
export const Button = ({ text, onClick, value }) => {
  console.log(value)
  return (
    <div className="button-container">
      <button onClick={onClick} className={ value ? "button-component bg-color-love":"button-component"}>{ text }</button>
    </div>
  )
}
