const posts = [
  { id: 1, title: "Post One", body: "This is post one" },
  { id: 2, title: "Post Two", body: "This is post Two" },
  { id: 3, title: "Post Three", body: "This is post Three" },
];

const getPosts = () => posts;
export const getPostsLength = () => posts.length;

export default getPosts;
