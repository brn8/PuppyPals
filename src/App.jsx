import { useState } from "react";
import "./App.css";
import { puppyList } from "./data";

function App() {
  const [puppyInformation, setPuppyInformation] = useState(null);
  return (
    <>
      <div className="card">
        {puppyInformation && (
          <div className="activeCard">
            <h2 style={{ textAlign: "center" }}>{puppyInformation.name}</h2>
            <p>
              <strong>Email:</strong> {puppyInformation.email}
            </p>
            <p>
              <strong>Age:</strong> {puppyInformation.age}
            </p>
            {puppyInformation.tricks.length > 0 && (
              <>
                <p>
                  <strong>Tricks: </strong>
                </p>
                <ul>
                  {puppyInformation.tricks.map((trick) => (
                    <li key={trick.id}>{trick.title}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
        <h2 style={{ textAlign: "center" }}>List of Puppies</h2>

        {puppyList.map((puppy) => {
          return (
            <p
              style={{ textAlign: "center" }}
              key={puppy.id}
              onClick={() => setPuppyInformation(puppy)}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
