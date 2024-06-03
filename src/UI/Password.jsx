import PropTypes from "prop-types";
import createPassword from "../CreatePassword";

export default function Password({ formObject }) {
  let password = createPassword(formObject);
  function copyToClipBoard() {
    const text = document.getElementById("copyText");
    console.log(text.value);
    navigator.clipboard.writeText(text.value);
  }
  return (
    <section className="password">
      <div>
        <input type="text" name="" id="copyText" value={password} />
        <button onClick={copyToClipBoard}>Copy</button>
      </div>
    </section>
  );
}

Password.propTypes = {
  formObject: PropTypes.object,
};
