let tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
let tagCounts = {};


for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    if (tagCounts[tag]) {
        tagCounts[tag]++;
    } else {
        tagCounts[tag] = 1;
    }
}


let sortedTagCounts = {};
Object.keys(tagCounts).sort(function(a, b) {
    return tagCounts[b] - tagCounts[a];
}).forEach(function(key) {
    sortedTagCounts[key] = tagCounts[key];
});

console.log(sortedTagCounts);


var user = ["name", "John", "lastname", "Black", "age", "23"];
var userJohn = {};
for (var i = 0; i < user.length; i += 2) {
    userJohn[user[i]] = user[i + 1];
}
console.log(userJohn);
