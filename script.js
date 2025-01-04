const form = document.getElementById('eventForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const photographerName = document.getElementById('photographerName').value;
    const email = document.getElementById('email').value;

    messageDiv.textContent = 'Submitting...';
    messageDiv.style.color = 'black';

    try {
        const response = await fetch('https://your-backend-url.com/events', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({event_name: eventName, photographer_name: photographerName, email}),
        });

        if (!response.ok) {
            throw new Error('Failed to submit the form.');
        }

        const data = await response.json();
        messageDiv.textContent = `Event Created! Event ID: ${data.event_id}`;
        messageDiv.style.color = 'green';
    } catch (error) {
        console.error(error);
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.style.color = 'red';
    }
});
