/* eslint-disable react/prop-types */
import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const EachPost = ({ post, lastPostID, handlerClick, handlerTimeAdd }) => {
  //   console.log(post);
  const {
    _id,
    coverImg,
    username,
    readingTime,
    profileImg,
    postName,
    hashtag,
    date,
  } = post;
  const [tag1, tag2] = hashtag;
  //   console.log(last);
  //   console.log(lastPostID);
  //   console.log(hashtag);
  return (
    <div className=" p-4 mb-6">
      <img className="w-100 rounded-lg" src={coverImg} alt="" />
      <div className="my-6 flex justify-between items-center">
        <div className="flex items-center">
          <img className="rounded-full w-14" src={profileImg} alt="" />
          <div className="ps-5">
            <p className="text-[#111111] text-2xl font-bold">{username}</p>
            <p className="text-[#11111199] font-semibold">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#11111199]">
          <span className=" font-medium text-xl">{readingTime} min read</span>
          <FaRegBookmark
            onClick={() => handlerClick(_id)}
            className="text-xl cursor-pointer"
          ></FaRegBookmark>
        </div>
      </div>
      <p className="text-4xl font-bold mb-4 leading-normal">{postName}</p>
      <p className="mb-4">
        <span className="text-[#11111199] text-xl font-medium mb-4 ">
          {tag1}
        </span>
        <span className="text-[#11111199] text-xl font-medium mb-4 ps-3">
          {tag2}
        </span>
      </p>
      <button
        onClick={() => handlerTimeAdd(readingTime)}
        className="text-xl text-[#6047EC] font-semibold underline"
      >
        Mark as Read
      </button>
      {post._id !== lastPostID && (
        <hr className="border-1 mt-8  text-[#1111111A]"></hr>
      )}
    </div>
  );
};

export default EachPost;
