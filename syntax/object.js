var members = ['gunwoo', 'kk99', 'muyaho'];
console.log(members[1]);//kk99
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer':'gunwoo',
    'awesome':'kk99',
    'happy':'muyaho'};

console.log(roles.awesome); //kk99
console.log(roles['awesome']); //kk99

for(var name in roles){
    console.log('object =>', name, 'value => ',roles[name]);
}