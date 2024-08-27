import { Tweet } from "./Tweet";
import { useState } from "react";

function App() {
  let [username, setUsername] = useState("Eurin"); // Corrigé : la valeur initiale devrait être une chaîne, pas un tableau

  console.log("RERENDER", username);

  const addLetter = () => {
    setUsername((curr) => { // Corrigé : syntaxe de la fonction fléchée
      console.log(curr);
      return curr + "a";
    });
  };

  return (
    <div>
      <p>{username}</p>
      <button onClick={addLetter}>Ajoute une lettre</button>
      <div className="tweet-container">
        <Tweet name="Eurin" content={"Bonjour tout le monde !"} like={1000} />
        <Tweet name="Auriole" content={"je vais bien!"} like={100} />
        <Tweet name="Boris" content={"vous êtes lààà!"} like={50} />
        <Tweet name="Justine" content={"quelle fraîcheur !"} like={0} />
      </div>
    </div>
  );
}

export default App;
