import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  const handleGetDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog: Dog = await response.json();
    setDogs([...dogs, dog]);
  };

  const styles = {
    width: "200px",
  };

  if (dogs.length >= 1) {
    return (
      <div>
        <h1>Dog app</h1>
        <button onClick={handleGetDog}>Get another dog</button>
        <hr />
        {dogs.map((dog) => (
          <img key={dog.message} src={dog.message} alt="dog" style={styles} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random cute
          doggy from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }

}


export default App;
