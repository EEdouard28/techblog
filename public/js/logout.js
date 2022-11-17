const logoutBtn = document.getElementById("logout");

const logout = async (event) => {
  const response = await fetch("/api/logout", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

if (logoutBtn)
  document.querySelector("#logout").addEventListener("click", logout);

//   const el = document.querySelector("#logout");
// if (el) {
//   el.addEventListener("click", logout);
// }
