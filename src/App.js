import React, { useEffect, useState } from "react";
import "./style.css";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.get("/people").then(
      (resp) => {
        setUser(resp.data.results);
      },
      (error) => console.log("Deu não meu bom ")
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        Nome personagem:
        {user.map((us, i) => {
          return (
            <table>
              <td>{us.name}</td>
            </table>
          );
        })}
      </header>
    </div>
  );
}
