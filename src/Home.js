import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(500);
    }

    //   const handleClick = () => {
//     console.log("Hello, Ninjas!");
//   };

  const handleClickAgain = (name) => {
    console.log(`Hello, ${name}`);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Change Name</button>
      <button onClick={() => handleClickAgain("mario")}>Click Me Again!</button>
    </div>
  );
};

export default Home;
