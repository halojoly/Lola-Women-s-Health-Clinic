// JavaScript for the Lola Women's Health Clinic website

// Toggle the navigation menu on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    // Select all FAQ trigger elements
    const faqTriggers = document.querySelectorAll(".faq-trigger---ak");

    faqTriggers.forEach(trigger => {
        // Add click event listener to each trigger
        trigger.addEventListener("click", function() {
            // Toggle the active class on the clicked trigger
            this.classList.toggle("active");

            // Get the associated FAQ content element
            const faqContent = this.nextElementSibling;

            // Check if the content is already open
            if (faqContent.style.height && faqContent.style.height !== "0px") {
                // Close the content
                faqContent.style.height = "0px";
            } else {
                // Open the content
                faqContent.style.height = faqContent.scrollHeight + "px";
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle dropdown and read information
    var dropdownToggles = document.querySelectorAll('.w-dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var dropdownList = this.nextElementSibling;
            dropdownList.classList.toggle('w--open');

            // Read the information from the dropdown
            var info = dropdownList.querySelector('p.text---ak').innerText;
            console.log('Dropdown Info:', info);
        });
    });

    // Function to handle service tab link clicks
    var serviceTabLinks = document.querySelectorAll('.service-tab-link---ak.w-inline-block.w-tab-link');
    var tabContents = document.querySelectorAll('.our-services-tabs-content---ak.w-tab-content > div');

    serviceTabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs and contents
            serviceTabLinks.forEach(function(link) {
                link.classList.remove('w--current');
            });
            tabContents.forEach(function(content) {
                content.classList.remove('w--tab-active');
            });

            // Add active class to clicked tab and corresponding content
            this.classList.add('w--current');
            var tabId = this.getAttribute('data-w-tab');
            document.querySelector('.our-services-tabs-content---ak.w-tab-content [data-w-tab="' + tabId + '"]').classList.add('w--tab-active');
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.w-dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var dropdownList = this.nextElementSibling;
            dropdownList.classList.toggle('w--open');
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Function to handle FAQ item toggle
    var faqTriggers = document.querySelectorAll('.faq-trigger---ak');

    faqTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            var faqContent = this.nextElementSibling;
            var contentHeight = faqContent.scrollHeight;

            // Toggle the FAQ content visibility
            if (faqContent.style.height === '0px' || faqContent.style.height === '') {
                faqContent.style.height = contentHeight + 'px';
            } else {
                faqContent.style.height = '0px';
            }
        });
    });
});








