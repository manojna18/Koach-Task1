import { useEffect, useState } from "react";
import UserPost from "../models/UserPost";
import "./css/UserActivities.css";
import getUserPosts from "../services/userActivitiesService";

interface props {
  userId: number;
}

const UserActivities = (prop: props) => {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  useEffect(() => {
    getUserPosts().then((res) => {
      setUserPosts(res);
    });
  }, []);

  return (
    <div className="UserActivities">
      {userPosts
        .filter((post) => post.userId === prop.userId)
        .map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default UserActivities;
