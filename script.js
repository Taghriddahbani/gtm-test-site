document
  .getElementById("apiRequestButton")
  .addEventListener("click", function () {
    const parameters = new URLSearchParams();
    // const key = window.dataLayer.find((item) => item.key)?.key;
    // const value = window.dataLayer.find((item) => item.value)?.value;

    window.dataLayer.forEach((item) => {
      for (let key in item) {
        parameters.append(key, item[key]);
      }
    });

    const url = `https://httpbin.org/get?${parameters.toString()}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
      })
      .catch((error) => {
        console.error("request failed", error);
      });
  });
