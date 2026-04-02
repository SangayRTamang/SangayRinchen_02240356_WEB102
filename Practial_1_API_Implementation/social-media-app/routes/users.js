# Users route
cat > "/home/claude/social-media-api/routes/users.js" << 'ENDOFFILE'
const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();
router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
module.exports = router;
ENDOFFILE

# Posts route
cat > "/home/claude/social-media-api/routes/posts.js" << 'ENDOFFILE'
const express = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController');
const router = express.Router();
router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).put(updatePost).delete(deletePost);
module.exports = router;
ENDOFFILE

# Comments route
cat > "/home/claude/social-media-api/routes/comments.js" << 'ENDOFFILE'
const express = require('express');
const { getComments, getComment, createComment, updateComment, deleteComment } = require('../controllers/commentController');
const router = express.Router();
router.route('/').get(getComments).post(createComment);
router.route('/:id').get(getComment).put(updateComment).delete(deleteComment);
module.exports = router;
ENDOFFILE

# Likes route
cat > "/home/claude/social-media-api/routes/likes.js" << 'ENDOFFILE'
const express = require('express');
const { getLikes, getLike, createLike, updateLike, deleteLike } = require('../controllers/likeController');
const router = express.Router();
router.route('/').get(getLikes).post(createLike);
router.route('/:id').get(getLike).put(updateLike).delete(deleteLike);
module.exports = router;
ENDOFFILE

# Followers route
cat > "/home/claude/social-media-api/routes/followers.js" << 'ENDOFFILE'
const express = require('express');
const { getFollowers, getFollower, createFollower, updateFollower, deleteFollower } = require('../controllers/followerController');
const router = express.Router();
router.route('/').get(getFollowers).post(createFollower);
router.route('/:id').get(getFollower).put(updateFollower).delete(deleteFollower);
module.exports = router;
ENDOFFILE

echo "All routes created"