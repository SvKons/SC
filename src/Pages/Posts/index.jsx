import Post from "./Post.jsx";
import "./Posts.scss";
// import { posts } from "../../utils.js";
import { useState } from "react";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const clear = () => {
    setText("");
    setTitle("");
  };

  const addPost = () => {
    setPosts([...posts, { title, text }]);
    clear();
  };
  return (
    <div>
      <div>
        <input value={title} type="title" onChange={onChangeTitle} />
        <input value={text} type="text" onChange={onChange} />
        {/* <input value={Image} type="text" onChange={onChange} /> */}
        <button onClick={addPost}>Добавить пост</button>
        <button onClick={clear}>Очистить</button>

        <h2>{title}</h2>
        <h3>{text}</h3>
        {posts.map((item) => {
          return <Post post={item} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
