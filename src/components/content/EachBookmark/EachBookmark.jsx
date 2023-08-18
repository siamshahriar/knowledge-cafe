import React from "react";

const EachBookmark = ({ element }) => {
  const { postName } = element;
  return (
    <div className="my-5">
      <p className="text-[#111111] text-lg font-semibold bg-white rounded-lg p-4">
        {postName}
      </p>
    </div>
  );
};

export default EachBookmark;
