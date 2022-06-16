export default function ColorInput({ colorInput, setColorInput }) {
  return (
    <div>
      <label>Background color: </label>
      <input type="color" onChange={(e) => setColorInput(e.target.value)} value={ colorInput } />
    </div>
  );
}