// define an array of user objects
const users = [
    { id: 3031, name: 'Tara Jones', email: 'ttjones@gmail.com' },
    { id: 3032, name: 'Larson Downs', email: 'larsondowns@gmail.com' },
    { id: 3033, name: 'Frankie Shwartz', email: 'frankiesworls@gmail.com' }
  ];
  
  // function to fetch a user by ID
  function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.id === userId);
        if (user) {
          resolve(user);
        } else {
          reject(new Error(` Sorry, our system could not find a user with the ID number: ${userId} `));
        }
      }, 1000);
    });
  }
  
  // function to fetch the user with ID 3031
  fetchUserById(3031)
    .then(user => {
      console.log('User 3031:', user);
    })
    .catch(error => {
      console.log(error.message);
    });
  
  // function to fetch the user with ID 3032
  fetchUserById(3032)
    .then(user => {
      console.log('User 3032:', user);
    })
    .catch(error => {
      console.log(error.message);
    });
  // function to fetch the user with ID 3032
  fetchUserById(3035)
    .then(user => {
      console.log('User 3035:', user);
    })
    .catch(error => {
      console.log(error.message);
    });
  