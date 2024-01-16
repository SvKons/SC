const Post = ({ post }) => {
  return (
    <div className="item">
      <h2>{post?.title}</h2>
      <h3>{post?.text}</h3>
      <img src={post?.url} height="100" alt="" />
      <button>Buy</button>
    </div>
  );
};

export default Post;
