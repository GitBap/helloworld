import React from "react";
import Hello from "./Hello";

function Main() {
  return (
    <main>
      <Hello name="Oli" />
      <section>
        <h2>Main Section </h2>
      </section>
      <aside>
        <h3>Aside</h3>
      </aside>
    </main>
  );
}

export default Main;
