const accountId = 12345;
let accountEmail = "sandeep@google.com";
var accountPassword = "12345abc";
 accountCity = "Delhi";
let accountState

//accountId = 2   //not allowed as const cannot be reassigned
accountEmail = "sandeep@outlook.com";
accountPassword = "12345xyz";
accountCity = "Mumbai";
console.log(accountId);

console.table([{ accountId, accountEmail, accountPassword, accountCity, accountState }]);
