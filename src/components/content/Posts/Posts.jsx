/* eslint-disable react/prop-types */
import EachPost from "../EachPost/EachPost";

const Posts = ({ posts, handlerTimeAdd, handlerClick, lastPostID }) => {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <EachPost
            key={post._id}
            post={post}
            lastPostID={lastPostID}
            handlerClick={handlerClick}
            handlerTimeAdd={handlerTimeAdd}
          ></EachPost>
        ))}
    </div>
  );
};

export default Posts;
