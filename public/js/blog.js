const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const body = document.querySelector("#blog-body").value.trim();
  
  if (title && body) {
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
console.log(response)
    if (response.ok) {
      console.log(response)
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

document.querySelector("#blog-form").addEventListener("submit", blogFormHandler);
