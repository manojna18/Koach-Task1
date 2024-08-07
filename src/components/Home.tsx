import { useState } from "react";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userInput, setUserInput] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="Home">
      Welcome! Enter a user id to see their profile
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/user/${userInput}`);
        }}
      >
        <label htmlFor="user-input">Enter a user id between 1-10</label>
        <input
          id="user-input"
          type="string"
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button type="submit">Get user profile</button>
      </form>
    </div>
  );
};

export default Home;
