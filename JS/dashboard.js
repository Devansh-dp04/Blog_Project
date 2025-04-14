// Redirect if not logged in
if (localStorage.getItem("isLoggedIn") !== "true" || !localStorage.getItem("loggedInUser")) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const welcomeHeading = document.querySelector(".header h1");

  if (loggedInUser) {
    welcomeHeading.textContent = `Welcome, ${loggedInUser.username}!`;
  }

  const blogs = JSON.parse(localStorage.getItem("blogsData")) || [];
  const wrapper = document.getElementById("blogsWrapper");

  if (!blogs.length) {
    wrapper.innerHTML = "<p>No blog posts found.</p>";
    return;
  }

  blogs.forEach((blog, blogIndex) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    const image = document.createElement("img");
    image.src = `../images/${blog.image}`;
    image.alt = blog.title;

    const blogContent = document.createElement("div");
    blogContent.className = "blog-content";

    const title = document.createElement("h3");
    title.textContent = blog.title;

    const content = document.createElement("p");
    content.textContent = blog.content;

    const badge = document.createElement("div");
    badge.className = "comment-badge";
    badge.textContent = `${blog.comments.length} 💬`;

    const commentsContainer = document.createElement("div");
    commentsContainer.className = "comments";

    blog.comments.forEach((c, commentIndex) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.dataset.blog = blogIndex;
      commentDiv.dataset.comment = commentIndex;

      const textWrapper = document.createElement("div");
      textWrapper.className = "comment-text-wrapper";
      textWrapper.innerHTML = `<p><strong>${c.username}</strong>: <span class="comment-text">${c.content}</span></p>`;

      commentDiv.appendChild(textWrapper);

      if (c.username === loggedInUser.username) {
        const actionDiv = document.createElement("div");
        actionDiv.className = "comment-actions";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.title = "Edit";
        editBtn.innerHTML = "&#9998;";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.title = "Delete";
        deleteBtn.innerHTML = "&#10006;";

        actionDiv.appendChild(editBtn);
        actionDiv.appendChild(deleteBtn);
        commentDiv.appendChild(actionDiv);
      }

      commentsContainer.appendChild(commentDiv);
    });

    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.dataset.index = blogIndex;
    commentForm.innerHTML = `
      <input type="text" placeholder="Write a comment..." required />
      <button type="submit">Post</button>
    `;

    blogContent.appendChild(title);
    blogContent.appendChild(content);
    blogContent.appendChild(badge);
    blogContent.appendChild(commentForm); 
    blogContent.appendChild(commentsContainer); 
          

    blogCard.appendChild(image);
    blogCard.appendChild(blogContent);
    wrapper.appendChild(blogCard);
  });

  // Comment submission handler
  wrapper.addEventListener("submit", (e) => {
    if (e.target.classList.contains("comment-form")) {
      e.preventDefault();
      const input = e.target.querySelector("input");
      const commentText = input.value.trim();
      const index = e.target.dataset.index;
      const user = JSON.parse(localStorage.getItem("loggedInUser")) || { username: "Guest" };

      if (commentText) {
        blogs[index].comments.push({
          username: user.username,
          content: commentText,
        });

        localStorage.setItem("blogsData", JSON.stringify(blogs));
        location.reload();
      }
    }
  });

  // Comment edit handler
  wrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      const commentDiv = e.target.closest(".comment");
      const blogIndex = commentDiv.dataset.blog;
      const commentIndex = commentDiv.dataset.comment;
      const commentSpan = commentDiv.querySelector(".comment-text");

      const currentText = commentSpan.textContent;
      const newText = prompt("Edit your comment:", currentText);

      if (newText !== null && newText.trim() !== "") {
        blogs[blogIndex].comments[commentIndex].content = newText.trim();
        localStorage.setItem("blogsData", JSON.stringify(blogs));
        location.reload();
      }
    }
  });
  // Comment delete handler
  wrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const confirmed = confirm("Are you sure you want to delete this comment?");
      if (!confirmed) return;

      const commentDiv = e.target.closest(".comment");
      const blogIndex = commentDiv.dataset.blog;
      const commentIndex = commentDiv.dataset.comment;

      blogs[blogIndex].comments.splice(commentIndex, 1);
      localStorage.setItem("blogsData", JSON.stringify(blogs));
      location.reload();
    }
  });

  // Logout button functionality
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
});
