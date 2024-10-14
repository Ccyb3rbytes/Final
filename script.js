document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const jsonData = {};
    
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Quote submitted successfully');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
