// Sample user data
const imagePool = ["card_image.jpg", "js_image.jpg", "web_trends.jpg", "workspace.jpg"];
blogsData = blogsData.map(blog => ({
  ...blog,
  image: imagePool[Math.floor(Math.random() * imagePool.length)]
}));
const usersData = [
    {
      id: 1,
      username: "John Doe",
      email: "john.doe@bacancy.com",
      password: "John@123",
    },
    {
      id: 2,
      username: "Jane Smith",
      email: "jane.smith@example.com",
      password: "Jane@456",
    },
    {
      id: 3,
      username: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "Alice@789",
    }
  ];
  
  // Sample blog data
  const blogsData = [
    {
      id: 1,
      title: "Lorem ipsum",
      image: "card_image.jpg",
      content: "Lorem ipsum, dolor sit amet.",
      comments: [
        {
          username: "John Doe",
          content: "Great insights!",
        },
        {
          username: "Jane Smith",
          content: "Thanks for sharing.",
        }
      ]
    },
    {
      id: 2,
      title: "Exploring JavaScript",
      image: "js_image.jpg",
      content: "A deep dive into JS fundamentals.",
      comments: [
        {
          username: "Alice Johnson",
          content: "Really helpful breakdown!",
        },
        {
          username: "John Doe",
          content: "I love JavaScript!",
        }
      ]
    },
    {
      id: 3,
      title: "Web Development Trends 2025",
      image: "web_trends.jpg",
      content: "What's hot in web dev this year?",
      comments: [
        {
          username: "Jane Smith",
          content: "Looking forward to more AI integrations.",
        }
      ]
    }
  ];
  
//   Optional: Save to localStorage
  localStorage.setItem("usersData", JSON.stringify(usersData));
  localStorage.setItem("blogsData", JSON.stringify(blogsData));
  