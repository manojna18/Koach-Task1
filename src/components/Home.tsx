import { useState } from "react";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userInput, setUserInput] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="Home">
      <h2>Welcome! Enter a User ID to view their profile</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (userInput !== "") {
            navigate(`/user/${userInput}`);
          } else {
            navigate(`/`);
          }
        }}
      >
        <label htmlFor="user-input">Enter a number between 1-10</label>
        <input
          id="user-input"
          type="string"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
        <button type="submit">Get user profile</button>
      </form>
    </div>
  );
};

export default Home;
