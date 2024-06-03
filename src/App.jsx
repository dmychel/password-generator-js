import { useState } from "react";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Form from "./form/Form";
import Password from "./UI/Password";

function App() {
  const [formObject, setFormObject] = useState({});

  return (
    <section className="app">
      <Header />
      <main>
        <Form setFormObject={setFormObject} />
        <Password formObject={formObject} />
      </main>
      <Footer />
    </section>
  );
}

export default App;
