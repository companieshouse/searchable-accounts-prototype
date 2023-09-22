//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//
​
window.GOVUKPrototypeKit.documentReady(() => {
​
​
  document.getElementById("toggleCheckbox").addEventListener("change", function () {
      var allDiv = document.getElementById("All");
      var currentOnlyDiv = document.getElementById("CurrentOnly");
​
      if (this.checked) {
          allDiv.style.display = "none";
          currentOnlyDiv.style.display = "block";
      } else {
          allDiv.style.display = "block";
          currentOnlyDiv.style.display = "none";
      }
  });
​
​
​
})
​
​