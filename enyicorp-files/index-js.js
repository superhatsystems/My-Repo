let businessSection = document.querySelector(".business-section");
        let contactSection = document.querySelector(".contact-section");
        let aboutSection = document.querySelector(".about-section");

        // Function to hide a section
        function hideSection(section) {
            section.classList.add("hide");
        }

        // Event listener to hide sections when clicking outside
        document.addEventListener("click", function(event) {
            const clickedElement = event.target;
            const isBusinessToggle = clickedElement.closest(".organisations-btn");
            const isContactToggle = clickedElement.closest(".contact-btn");
            const isAboutToggle = clickedElement.closest(".about-btn");

            // Check if the clicked element is outside the business section and not a business toggle button
            if (!isBusinessToggle && !clickedElement.closest(".business-section")) {
                hideSection(businessSection);
            }

            // Check if the clicked element is outside the contact section and not a contact toggle button
            if (!isContactToggle && !clickedElement.closest(".contact-section")) {
                hideSection(contactSection);
            }

            // Check if the clicked element is outside the about section and not an about toggle button
            if (!isAboutToggle && !clickedElement.closest(".about-section")) {
                hideSection(aboutSection);
            }
        });

        // Function to toggle visibility of business section
        function showHideBusiness() {
            businessSection.classList.toggle("hide");
        }


    // Function to toggle visibility of contact section
    function showHideContact() {
        contactSection.classList.toggle("hide");
    }
    
    // Function to toggle visibility of about section
    function showHideAbout() {
        aboutSection.classList.toggle("hide");
    }