import React, { useEffect, useState } from "react";
import EachBookmark from "../EachBookmark/EachBookmark";
import { clearAll, getDB, getDBtime } from "../../utilities/fakedb";
import { toast } from "react-hot-toast";

const Bookmarks = ({ posts, getDBval, getTimeval }) => {
  //   const [posts, setPosts] = useState([]);
  const [datapost, setDatapost] = useState([]);
  const [time, setTime] = useState(0);
  const [clearTime, setClearTime] = useState(true);
  const clearToast = () => toast.success("Cleared! ");

  //   console.log(posts);

  //   useEffect(() => {
  //     fetch("fakeData.json")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  useEffect(() => {
    const database = getDB();
    // console.log(database);
    let found = [];

    database.forEach((element) => {
      let post = posts.find((post) => post._id === element);
      if (post) {
        found.push(post);
      }
    });
    setDatapost(found);

    // console.log(found);
  }, [posts, getDBval, clearTime]);

  useEffect(() => {
    let times = getDBtime();
    setTime(times);
  }, [getTimeval, clearTime]);
  // console.log(times);
  const clear = () => {
    clearAll();
    clearToast();
    setClearTime(!clearTime);
  };
  //   console.log(datapost);
  return (
    <div className="sticky top-0">
      <p className="bg-[#6047EC1A] text-center py-6 text-[#6047EC] text-2xl font-bold border-violet-600 border-[1px] rounded-lg mt-4">
        Spent time on read: {time} min
      </p>
      <div className="bg-[#1111110D] rounded-lg mt-5 min-h-[600px] p-7">
        <div className="flex justify-between items-center">
          <p className=" text-xl font-bold">
            Bookmarked Blogs: {datapost.length}
          </p>
          <button
            onClick={() => clear()}
            className="bg-red-500 p-2 rounded-lg text-xl font-semibold text-red-100"
          >
            Clear All
          </button>
        </div>
        {datapost ? (
          datapost.map((element) => (
            <EachBookmark key={element._id} element={element}></EachBookmark>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
