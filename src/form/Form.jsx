import { useState } from "react";

export default function Form() {
  const [min, setMin] = useState(6);
  const [max, setMax] = useState(10);
  const [special, setSpecial] = useState(true);
  const [number, setNumber] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(min, max, special, number);
  }
  return (
    <section className="password_form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="min-length">Min Length</label>
        <select
          name="min-length"
          id="min-length"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        >
          <option value={6}>{6}</option>
          <option value={7}>{7}</option>
          <option value={8}>{8}</option>
        </select>

        <label htmlFor="min-length">Max Length</label>
        <select
          name="max-length"
          id="max-length"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        >
          <option value={6}>{6}</option>
          <option value={7}>{7}</option>
          <option value={8}>{8}</option>
          <option value={9}>{9}</option>
          <option value={10}>{10}</option>
          <option value={11}>{11}</option>
          <option value={12}>{12}</option>
        </select>

        <label htmlFor="special">Special Characters</label>
        <input
          type="checkbox"
          name="special"
          id="special"
          value={special}
          onChange={(e) => setSpecial(e.target.checked)}
        />

        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          value={number}
          onChange={(e) => setNumber(e.target.checked)}
        />

        <input type="submit" value="Generate" />
      </form>
    </section>
  );
}
