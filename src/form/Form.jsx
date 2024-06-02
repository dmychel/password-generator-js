export default function Form() {
  return (
    <section className="password_form">
      <form>
        <label htmlFor="min-length">Min Length</label>
        <select name="min-length" id="min-length">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>

        <label htmlFor="min-length">Max Length</label>
        <select name="max-length" id="max-length">
          +<option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <label htmlFor="special">Special Characters</label>
        <input type="checkbox" name="special" id="special" checked />

        <label htmlFor="numbers">Numbers</label>
        <input type="checkbox" name="numbers" id="numbers" checked />

        <input type="submit" value="Generate" />
      </form>
    </section>
  );
}
