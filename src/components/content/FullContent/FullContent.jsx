import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import Bookmarks from "../Bookmarks/Bookmarks";
import { addToDB, addToDBtime, getDB } from "../../utilities/fakedb";
import { toast } from "react-hot-toast";

const FullContent = () => {
  const [posts, setPosts] = useState([]);
  const [getDBval, changeGetDBval] = useState(true);
  const [getTimeval, changeGetTimeval] = useState(true);
  const notify = () => toast.error("Already Bookmarked !");
  const timeAdded = () => toast.success("Marked as Read Success! ");
  const bookAdded = () => toast.success("Bookmarked successfully! ");

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  let lastPostID;
  if (posts) {
    lastPostID = posts[posts.length - 1]?._id;
  }
  const handlerClick = (data) => {
    // console.log(data);
    const addValue = addToDB(data);
    // console.log(addValue);
    if (addValue) {
      notify();
    } else {
      bookAdded();
    }
    changeGetDBval(!getDBval);
  };
  const handlerTimeAdd = (data) => {
    addToDBtime(data);
    timeAdded();
    changeGetTimeval(!getTimeval);
  };

  /* -------------------- */

  return (
    <div className="mt-3 grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Posts
          posts={posts}
          lastPostID={lastPostID}
          handlerClick={handlerClick}
          handlerTimeAdd={handlerTimeAdd}
        ></Posts>
      </div>
      <div className="">
        <Bookmarks
          posts={posts}
          getDBval={getDBval}
          getTimeval={getTimeval}
        ></Bookmarks>
      </div>
    </div>
  );
};

export default FullContent;
