document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded. Checking dataLayer...");

  // Ensure dataLayer is initialized
  window.dataLayer = window.dataLayer || [];
  console.log("Current dataLayer:", window.dataLayer);

  const button = document.getElementById("apiRequestButton");

  if (!button) {
    console.error("Button not found!");
    return;
  }

  button.addEventListener("click", function () {
    console.log("Button clicked!");

    const parameters = new URLSearchParams();

    // Check if dataLayer is not empty
    if (window.dataLayer.length === 0) {
      console.warn("dataLayer is empty, no parameters will be sent.");
      return;
    }

    window.dataLayer.forEach((item) => {
      for (let key in item) {
        parameters.append(key, item[key]);
      }
    });

    const url = `https://httpbin.org/get?${parameters.toString()}`;
    console.log("Generated URL:", url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:");
        console.table(data);
      })
      .catch((error) => {
        console.error("Request failed", error);
      });
  });
});
