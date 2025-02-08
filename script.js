document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('waitlistModal');
    const btn = document.getElementById('waitlistBtn');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('waitlistForm');

    // Open modal
    btn.onclick = () => {
        modal.style.display = "block";
    }

    // Close modal
    span.onclick = () => {
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle form submission
    form.onsubmit = (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Add loading state
        const submitButton = e.target.querySelector('button');
        submitButton.innerHTML = 'Submitting...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for joining our waitlist!');
            form.reset();
            modal.style.display = "none";
            submitButton.innerHTML = 'Submit';
            submitButton.disabled = false;
        }, 1000);
    }
});

// Add smooth scroll animation for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
