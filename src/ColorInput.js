export default function ColorInput({ setColorInput, colorInput }) {
  return (
    <input onChange={(e) => setColorInput(e.target.value)} value={ colorInput } />
  );
}