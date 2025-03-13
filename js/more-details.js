const headerPlaceholder = document.getElementById('header-placeholder'); // Added semicolon
  fetch('header.html')
      .then(response => response.text())