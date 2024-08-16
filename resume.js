document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        this.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the clicked section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});

// Show the first section by default
document.querySelector('.nav-link[data-section="about"]').click();


