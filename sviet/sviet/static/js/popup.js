   // Function to open popup
        function openPopup() {
            document.getElementById('techArenaPopup').classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        // Function to close popup
        function closePopup() {
            document.getElementById('techArenaPopup').classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Close popup when clicking outside the container
        document.getElementById('techArenaPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        });

            window.addEventListener('load', function() {
                console.log("Popup function is working!");
    setTimeout(openPopup, 5000);
});
      