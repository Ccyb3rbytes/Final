function addFeedback() {
    const name = document.getElementById('name').value;
    const device = document.getElementById('device').value;
    const feedback = document.getElementById('feedback').value;
  
    const newFeedback = document.createElement('div');
    newFeedback.classList.add('quote-card');
    newFeedback.innerHTML = `<h3>${name}</h3><p>${device}</p><p>${feedback}</p>`;
  
    document.querySelector('.quotecontainer').appendChild(newFeedback);
    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('device').value = '';
    document.getElementById('feedback').value = '';
  }