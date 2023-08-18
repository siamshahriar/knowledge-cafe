import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-12 mb-8">
        <p className="text-[#111111] text-4xl font-bold">Knowledge Cafe</p>
        <img
          title="Md. Shahriar Rahman"
          className="w-14 rounded-full"
          src="https://avatars.githubusercontent.com/u/72511886?v=4"
          alt=""
        />
      </div>
      <hr className="border-1"></hr>
    </>
  );
};

export default Header;
