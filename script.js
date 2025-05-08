document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    // Check if device has no hover (touch device)
    if (window.matchMedia('(hover: none)').matches) {
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');

            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                const isActive = dropdown.classList.contains('active');

                // Close all dropdowns
                dropdowns.forEach(d => d.classList.remove('active'));

                // Toggle current if it wasn't already active
                if (!isActive) {
                    dropdown.classList.add('active');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function() {
            dropdowns.forEach(d => d.classList.remove('active'));
        });
    }
});
