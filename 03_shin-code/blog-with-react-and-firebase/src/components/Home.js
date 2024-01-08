import React, { useEffect } from "react";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  useEffect(() => {
    // #42 追記分
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map((doc) => ({ doc })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          React学習中
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          facilis nam officiis ad reiciendis distinctio laudantium doloremque
          quae enim fugiat. Alias accusantium rerum, exercitationem ex cum quae
          voluptatum minima facilis.
        </div>
        <div className="nameAndDeleteButton">
          <h3>@Shincode</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
