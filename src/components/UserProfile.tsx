import { useEffect, useState } from "react";
import "./css/UserProfile.css";
import User from "../models/User";
import { getUserData } from "../services/userDataService";
import UserActivities from "./UserActivities";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [showPosts, setShowPosts] = useState(false);
  const [showActivity, setShowActivity] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const { userInput } = useParams();
  console.log(userInput);

  useEffect(() => {
    getUserData().then((res) => {
      setLoading(false);
      setUserList(res);
    });
  }, []);

  return (
    <>
      <Link to="/">
        <p>
          <i className="material-icons">home</i>
        </p>
      </Link>
      {loading && <p>Data loading...</p>}
      <div className="UserProfile">
        {userInput ? (
          userList
            .filter((user) => user.id === parseInt(userInput))
            .map((user) => (
              <div className="user" key={user.name}>
                <p id="id">{user.id}</p>
                <p>Username: {user.username}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
                <button
                  onClick={() => {
                    setShowPosts(true);
                    setShowActivity(user.id);
                  }}
                >
                  View Activity
                </button>
                <button
                  onClick={() => {
                    setShowPosts(false);
                    console.log;
                  }}
                >
                  Hide Activity
                </button>
                {showPosts === true && showActivity === user.id && (
                  <UserActivities userId={user.id} />
                )}
              </div>
            ))
        ) : (
          <p>Enter a number between 1 and 10</p>
        )}
      </div>
    </>
  );
};
export default UserProfile;
