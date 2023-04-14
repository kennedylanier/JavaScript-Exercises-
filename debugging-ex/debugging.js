const storeOwners = [
    { charles: 1 },
    { sally: 1 },
    { cassandra: 1 },
    {
      "Danny Shavez": 1,
      location: "in NM",
    },
  ];
  
  console.log("Before function definition");
  
  function listNumberOfStores() {
    console.log("Inside listNumberOfStores function");
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
      console.log("Current object:", storeOwners[i]);
      totalLocations++;
    }
    return totalLocations;
  }
  
  let locations = listNumberOfStores();
  
  console.log("After function definition");
  
  function tellMeMyStores() {
    console.log("Hey, can you tell me how many stores you have?");
    if (locations > 0) {
      console.log("Of course, we have " + locations + " stores");
    }
  }
  
  function hasStore() {
    for (let i = 0; i < 2; i++) {
      let people = Object.keys(storeOwners[i]);
      let person = people[0];
      console.log("Yes, " + person + " has one");
    }
  }
  
  tellMeMyStores();
  hasStore();
  
  let man = storeOwners[3];
  let mister = Object.keys(man)[0];
  
  let whereHeLives = man.location;
  console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");
  