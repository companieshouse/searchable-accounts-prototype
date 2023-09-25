//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


// NOT FOR PRODUCTION - this code is not accessible

window.GOVUKPrototypeKit.documentReady(() => {

    function toggleDivs(selectedDivId) {
        const divs = ["general-overview", "accounts"];
        divs.forEach(divId => {
            const div = document.getElementById(divId);
            if (divId === selectedDivId) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });

        // Add/remove the "active" class on the corresponding links
        const linkIds = ["general-overview-toggle", "accounts-toggle"];
        linkIds.forEach(linkId => {
            const linkLi = document.getElementById(linkId);
            if (linkId === selectedDivId + "-toggle") {
                linkLi.classList.add("active");
            } else {
                linkLi.classList.remove("active");
            }
        });
    }

    // Add click event listeners to the links
    document.getElementById("general-overview-toggle").addEventListener("click", function () {
        toggleDivs("general-overview");
    });

    document.getElementById("accounts-toggle").addEventListener("click", function () {
        toggleDivs("accounts");
    });

    // Add checkbox functionality as in the previous code
    document.getElementById("toggleCheckbox").addEventListener("change", function () {
        var allDiv = document.getElementById("All");
        var currentOnlyDiv = document.getElementById("CurrentOnly");

        if (this.checked) {
            allDiv.style.display = "none";
            currentOnlyDiv.style.display = "block";
        } else {
            allDiv.style.display = "block";
            currentOnlyDiv.style.display = "none";
        }
    });



    
  })
  
  
  
  