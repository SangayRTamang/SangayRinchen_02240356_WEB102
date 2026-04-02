const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const { likes, users, posts } = require('../utils/mockData');

// @desc    Get all likes
// @route   GET /api/likes
// @access  Public
exports.getLikes = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, count: likes.length, data: likes });
});

// @desc    Get single like
// @route   GET /api/likes/:id
// @access  Public
exports.getLike = asyncHandler(async (req, res, next) => {
  const like = likes.find(l => l.id === req.params.id);
  if (!like) {
    return next(new ErrorResponse(`Like not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: like });
});

// @desc    Create (add) a like
// @route   POST /api/likes
// @access  Private
exports.createLike = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
  if (!userId) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  const post = posts.find(p => p.id === req.body.post_id);
  if (!post) { return next(new ErrorResponse('Post not found', 404)); }

  // Check if already liked
  const existingLike = likes.find(l => l.user_id === userId && l.post_id === req.body.post_id);
  if (existingLike) {
    return next(new ErrorResponse('Post already liked', 400));
  }

  const newLike = {
    id: (likes.length + 1).toString(),
    user_id: userId,
    post_id: req.body.post_id,
    created_at: new Date().toISOString().slice(0, 10)
  };

  likes.push(newLike);
  res.status(201).json({ success: true, data: newLike });
});

// @desc    Update like (not typically used, included for completeness)
// @route   PUT /api/likes/:id
// @access  Private
exports.updateLike = asyncHandler(async (req, res, next) => {
  const like = likes.find(l => l.id === req.params.id);
  if (!like) {
    return next(new ErrorResponse(`Like not found with id of ${req.params.id}`, 404));
  }
  res.status(200).json({ success: true, data: like });
});

// @desc    Remove a like
// @route   DELETE /api/likes/:id
// @access  Private
exports.deleteLike = asyncHandler(async (req, res, next) => {
  const userId = req.header('X-User-Id');
  if (!userId) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  const like = likes.find(l => l.id === req.params.id);
  if (!like) {
    return next(new ErrorResponse(`Like not found with id of ${req.params.id}`, 404));
  }

  if (like.user_id !== userId) {
    return next(new ErrorResponse('Not authorized to remove this like', 401));
  }

  const index = likes.findIndex(l => l.id === req.params.id);
  likes.splice(index, 1);

  res.status(200).json({ success: true, data: {} });
});
EOF