
    // JavaScript for the page
    function getJoke() {
      // Make a request to the Chuck Norris Jokes API
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          // Display the joke on the page
          document.getElementById('joke').innerHTML = data.value;
        });
    }
    // Call getJoke() when the page loads
    getJoke();
