const users = [
  {
    id: "1",
    username: "traveler",
    email: "traveler@example.com",
    password: "password123",
    full_name: "Karma",
    profile_picture: "https://example.com/profiles/traveler.jpg",
    bio: "Travel photographer",
    created_at: "2023-01-15"
  },
  {
    id: "2",
    username: "foodie",
    email: "foodie@example.com",
    password: "password123",
    full_name: "Pema Dorji",
    profile_picture: "https://example.com/profiles/foodie.jpg",
    bio: "Food lover and chef",
    created_at: "2023-02-10"
  },
  {
    id: "3",
    username: "adventurer",
    email: "adventurer@example.com",
    password: "password123",
    full_name: "Tshering Wangchuk",
    profile_picture: "https://example.com/profiles/adventurer.jpg",
    bio: "Mountain climber and hiker",
    created_at: "2023-03-05"
  }
];

const posts = [
  {
    id: "1",
    caption: "Beautiful sunset in the mountains!",
    image: "https://example.com/posts/sunset.jpg",
    user_id: "1",
    created_at: "2023-04-01"
  },
  {
    id: "2",
    caption: "Tried a new recipe today - turned out amazing!",
    image: "https://example.com/posts/food.jpg",
    user_id: "2",
    created_at: "2023-04-05"
  },
  {
    id: "3",
    caption: "Reached the summit after 3 days of hiking!",
    image: "https://example.com/posts/summit.jpg",
    user_id: "3",
    created_at: "2023-04-10"
  },
  {
    id: "4",
    caption: "Morning coffee with a view",
    image: "https://example.com/posts/coffee.jpg",
    user_id: "1",
    created_at: "2023-04-15"
  }
];

const comments = [
  {
    id: "1",
    text: "Stunning view!",
    user_id: "2",
    post_id: "1",
    created_at: "2023-04-02"
  },
  {
    id: "2",
    text: "I need to visit this place!",
    user_id: "3",
    post_id: "1",
    created_at: "2023-04-03"
  },
  {
    id: "3",
    text: "What recipe did you use?",
    user_id: "1",
    post_id: "2",
    created_at: "2023-04-06"
  }
];

const likes = [
  { id: "1", user_id: "2", post_id: "1", created_at: "2023-04-02" },
  { id: "2", user_id: "3", post_id: "1", created_at: "2023-04-03" },
  { id: "3", user_id: "1", post_id: "2", created_at: "2023-04-06" },
  { id: "4", user_id: "3", post_id: "2", created_at: "2023-04-07" }
];

const followers = [
  { id: "1", follower_id: "2", following_id: "1", created_at: "2023-03-01" },
  { id: "2", follower_id: "3", following_id: "1", created_at: "2023-03-05" },
  { id: "3", follower_id: "1", following_id: "2", created_at: "2023-03-10" }
];

module.exports = { users, posts, comments, likes, followers };
EOF