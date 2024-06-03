import PropTypes from "prop-types";
import createPassword from "../CreatePassword";

export default function Password({ formObject }) {
  let password = createPassword(formObject);
  return (
    <section className="password">
      <div>
        <p>{password}</p>
        <button>Copy</button>
      </div>
    </section>
  );
}

Password.propTypes = {
  formObject: PropTypes.object,
};
