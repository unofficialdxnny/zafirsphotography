function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Smooth scroll to the selected section
    selectedSection.scrollIntoView({ behavior: 'smooth' });

    // Close sidebar (if open) on small screens
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains('open')) {
        toggleSidebar();
    }
}
