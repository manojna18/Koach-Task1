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

  const { userInput } = useParams();

  useEffect(() => {
    getUserData().then((res) => {
      setUserList(res);
    });
  }, []);

  return (
    <>
      <Link to="/">
        <p>Home</p>
      </Link>
      <div className="UserProfile">
        {userList
          .filter((user) => user.id === parseInt(userInput!))
          .map((user) => (
            <div className="user" key={user.name}>
              <p>{user.id}</p>
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
          ))}
      </div>
    </>
  );
};
export default UserProfile;
