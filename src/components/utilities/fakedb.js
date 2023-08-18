const addToDB = (data) => {
  let bookmarks = [];

  bookmarks = getDB();

  if (bookmarks.includes(data)) {
    return true;
  }

  bookmarks.push(data);
  localStorage.setItem("bookmark", JSON.stringify(bookmarks));
};

const getDB = () => {
  let bookmarks = [];
  const stored = localStorage.getItem("bookmark");

  if (stored) {
    bookmarks = JSON.parse(stored);
  }
  return bookmarks;
};

const getDBtime = () => {
  let times = 0;
  const stored = localStorage.getItem("times");
  if (stored) {
    times = JSON.parse(stored);
  } else {
    localStorage.setItem("times", JSON.stringify(0));
  }
  return times;
};

const addToDBtime = (data) => {
  let time = getDBtime();
  // console.log(time);
  localStorage.setItem("times", JSON.stringify(time + data));
};

const clearAll = () => {
  localStorage.removeItem("times");
  localStorage.removeItem("bookmark");
};
export { addToDB, getDB, addToDBtime, getDBtime, clearAll };
