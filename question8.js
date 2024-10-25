// Step 1: Define the getUserData function
function getUserData(id, callback) {
    // Simulate an API call using setTimeout
    setTimeout(() => {
      // Dummy user data
      const user = {
        id: id,
        name: "John Doe",
        email: "john.doe@example.com"
      };
      // Call the callback with the user object after 2 seconds
      callback(user);
    }, 2000);  // 2-second delay
  }
  
  // Step 2: Define the displayUser function
  function displayUser(user) {
    // Display the user details
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
  
  // Step 3: Test the asynchronous call
  getUserData(1, displayUser);
  