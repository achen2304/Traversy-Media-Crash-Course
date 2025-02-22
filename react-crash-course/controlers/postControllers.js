let posts = [
    { id: '1', title: 'Post One', body: 'This is post one' },
    { id: '2', title: 'Post Two', body: 'This is post two' },
    { id: '3', title: 'Post Three', body: 'This is post three' },
  ];

//@desc Get all posts
//@route GET /api/posts
const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

//@desc Get single post
//@route GET /api/posts/:id
const getPost = (req, res, next) => {
  const post = posts.find((post) => post.id === req.params.id);
  if (!post) {
    const error = new Error(`Post ${req.params.id} not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

//@desc Create new post
//@route POST /api/posts
const createPost = (req, res, next) => {
  const newPosts = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPosts.title) {
    const error = new Error(`please include title`);
    error.status = 200;
    return next(error);
  }

  posts.push(newPosts);
  res.status(201).json(posts);
};

//@desc Update post
//@route PUT /api/posts/:id
const updatePost = (req, res, next) => {
  const post = posts.find((post) => post.id === req.params.id);
  if (!post) {
    const error = new Error(`Post ${req.params.id} not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc Delete post
//@route DELETE /api/posts/:id
const deletePost = (req, res, next) => {
  const post = posts.find((post) => post.id === req.params.id);
  if (!post) {
    const error = new Error(`Post ${req.params.id} not found`);
    error.status = 404;
    return next(error);
  }
  posts.splice(posts.indexOf(post), 1);
  res.status(200).json(posts);
};

export { getPosts, getPost, createPost, updatePost, deletePost };
