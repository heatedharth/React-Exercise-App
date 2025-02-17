import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Planks", type: "duration" },
    { name: "Running", type: "duration" }
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Exercise Tracker</h1>

      {selectedExercise ? (
        <>
          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : (
            <DurationExercise name={selectedExercise.name} />
          )}
        </>
      ) : (
        exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setSelectedExercise(exercise)}
            style={{ margin: "10px", padding: "10px" }}
          >
            {exercise.name}
          </button>
        ))
      )}
    </div>
  );
}

export default App;

