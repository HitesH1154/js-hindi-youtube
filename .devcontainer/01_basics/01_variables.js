const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12341"
accountCity = "jaipur"
let accountState;

// accountId = 2 // allowed

accountEmail = "hitesh123@hs.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountId, accountEmail, accountPassword,  accountCity, accountState]);

