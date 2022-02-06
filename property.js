// var fetchZillowData = () => {
  fetch("https://zillow-com1.p.rapidapi.com/property?zpid=11373745", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
      "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("Mask-Group-3").src = response.imgSrc;
      document.getElementById("house-name").textContent = response.brokerageName
      document.getElementById("house-description").textContent = response.description.slice(0,278);
      document.getElementById("house-location").textContent = response.city;
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
// };

