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

// /**
//  * Functiont that shortens the length of a string ("paragraph").
//  *
//  */

// function truncate(str, n) {
//   return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
// }


// //First panel
// fetch("https://zillow-com1.p.rapidapi.com/property?zpid=11373745", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
//     "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {

//     document.getElementById("Mask-Group-3").src = response.imgSrc;
//     document.getElementById("zillow_price_3").innerHTML = "$" + response.price;
//     document.getElementById("zillow_address_3").innerHTML =
//       response.streetAddress;
  
//     const descriptionResponse = truncate(response.description, 210);
//     document.getElementById("zillow_description_3").innerHTML =
//  descriptionResponse;
//     //document.getElementById("zillow_address").innerHTML = response.streetAddress;
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// //Second panel
// fetch("https://zillow-com1.p.rapidapi.com/property?zpid=11620203", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
//     "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {
//     document.getElementById("Mask-Group-4").src = response.imgSrc;
//     document.getElementById("zillow_price_4").innerHTML = "$" + response.price;
//     document.getElementById("zillow_address_4").innerHTML =
//       response.streetAddress;
  
//     const descriptionResponse = truncate(response.description, 210);
//     document.getElementById("zillow_description_4").innerHTML =
//  descriptionResponse;
//     //document.getElementById("zillow_address").innerHTML = response.streetAddress;
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// //Third panel
// fetch("https://zillow-com1.p.rapidapi.com/property?zpid=11287156", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "zillow-com1.p.rapidapi.com",
//     "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {
//     document.getElementById("Mask-Group-5").src = response.imgSrc;
//     document.getElementById("zillow_price_5").innerHTML = "$" + response.price;
//     document.getElementById("zillow_address_5").innerHTML =
//       response.streetAddress;
  
//     const descriptionResponse = truncate(response.description, 210);
//     document.getElementById("zillow_description_5").innerHTML =
//  descriptionResponse;
//     //document.getElementById("zillow_address").innerHTML = response.streetAddress;
//   })
//   .catch((err) => {
//     console.error(err);
//   });



// /*


// //var arrayOfProperties; //Global for storing properties from ExtendedSearch API

// /**
//  * Functiont that shortens the length of a string ("paragraph").
//  *
//  */
// /*
// function truncate(str, n) {
//   return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
// }
// /******************************************************************************
// const GEOLOCATION_URL =
//   "https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en"; //Geolocation API to get zip code
// const GEOLOCATION_HOST = "google-maps-geocoding.p.rapidapi.com";

// /*
//  * Make rapidAPI calls w/ generic template
//  *
//  */
// const getData = async (url, host) => {
//   console.log("Calling getData for", url);
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": host,
//       "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
//     },
//   });
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   return await response.json();
// };

// /*
//  * Fetches an Zipcode and returns it.
//  *
 
// const getZipCode = async () => {
//   console.log("call getZipCode");
//   //GET CITY NAME
//   const geoData = await getData(GEOLOCATION_URL, GEOLOCATION_HOST);
//   //Returp Code
//   return geoData.results[0].address_components[7].long_name;
//   console.log(geoData.results[0].address_components[7].long_name);
// };
// */
// /**
//  * Fetches a list of properties based on Zipcode
//  * (from getZipCode() ) and saves in an array
//  *
 
// const ZILLOW_HOST = "zillow-com1.p.rapidapi.com";
// const getExtendedSearch = async (url) => {
//   console.log("calling getExtendedSearch");
//   let arrProps;
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": ZILLOW_HOST,
//       "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
//     },
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       document.getElementById("Mask-Group-" + 1).src = response.imgSrc;
//       document.getElementById("zillow_price_" + 1).innerHTML =
//         "$" + response.price;
//       document.getElementById("zillow_address_" + 1).innerHTML =
//         response.streetAddress;

//       const descriptionResponse = truncate(response.description, 210);
//       document.getElementById("zillow_description_1").innerHTML =
//         descriptionResponse;
//     })
//     .catch((err) => {
//       console.error(err);
//     });

//   return arrProps;
// };

// /*
// const getPropDetails = async (ZILLOW_URL, ZILLOW_HOST, arrayOfProperties) => {
//   const zipCode = await getZipCode();
//   const final_URL = fetchURL_1 + zipCode + fetchURL_2;
//   const numberOfPanels = 2;
//   //const arrProps = await getExtendedSearch(final_URL);
//   console.log(arrayOfProperties);
//   if(arrayOfProperties !== undefined) {
//   for (let i = 0; i < numberOfPanels ; i++) {
    
//     //onst randomElement = arrProps[Math.floor(Math.random() * arrProps.length)];
//      ZPID = arrayOfProperties.props[i].zpid
//     console.log(ZPID);
  
   
//     fetch(ZILLOW_URL + ZPID, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": ZILLOW_HOST,
//         "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
      
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         if (i <= numberOfPanels) {
//           document.getElementById("Mask-Group-" + i).src = response.imgSrc;
//           document.getElementById("zillow_price_" + i).innerHTML =
//             "$" + response.price;
//           document.getElementById("zillow_address_" + i).innerHTML =
//             response.streetAddress;

//           const descriptionResponse = truncate(response.description, 210);
//           document.getElementById("zillow_description").innerHTML =
//             descriptionResponse;
//         } else {
//           document.getElementById("Mask-Group-" + i * 2 - 1).src =
//             response.imgSrc;
//           document.getElementById("zillow_price_" + i * 2 - 1).innerHTML =
//             "$" + response.price;
//           document.getElementById("zillow_address_" + i * 2 - 1).innerHTML =
//             response.streetAddress;

//           const descriptionResponse = truncate(response.description, 210);
//           document.getElementById("zillow_description").innerHTML =
//             descriptionResponse;
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     }
//   }
// };
// /
// const runAPIQueries = async () => {
//   console.log("calling runAPIQueries");

//   const zipCode = await getZipCode(); //A zip code to be passed into the ExtendedSearch API
//   console.log("Zip code = ", zipCode);

//   const fetchURL_1 =
//     "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location="; //First part of URL string BEFORE concatonation with zip
//   const fetchURL_2 = "&home_type=Houses"; //Second part of URL string AFTER concatonation with zip
//   const final_URL = fetchURL_1 + zipCode + fetchURL_2;

//   const fillPropsArray = async () => {
//     let arrayOfProperties = await getExtendedSearch(final_URL);
//     console.log(arrayOfProperties);

//     return arrayOfProperties;
//   };
//   const newArr = await fillPropsArray();
//   //getPropDetails(ZILLOW_URL, ZILLOW_HOST,newArr);
// };

// runAPIQueries();

// /**
//  * Fills arrayOfProperties with props. within the area according to geolocation
//  *
//  */
// /*
// const ZILLOW_URL = "https://zillow-com1.p.rapidapi.com/property?zpid=";
// var ZPID = "2091153528";

// fetch(ZILLOW_URL + ZPID, {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": ZILLOW_HOST,
//     "x-rapidapi-key": "cbddc829f6msh2facc7aa8ef9050p147ec4jsn1dde3fcde88c",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {
//     document.getElementById("Mask-Group-" + 1).src = response.imgSrc;
//     document.getElementById("zillow_price_" + 1).innerHTML =
//       "$" + response.price;
//     document.getElementById("zillow_address_" + 1).innerHTML =
//       response.streetAddress;

//     const descriptionResponse = truncate(response.description, 210);
//     document.getElementById("zillow_description_1").innerHTML =
//       descriptionResponse;
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// */