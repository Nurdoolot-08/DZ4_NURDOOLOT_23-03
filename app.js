const tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
const tagCount = {};

for (const tag of tags) {
     if (tag in tagCount) {
          tagCount[tag] += 1;
     } else {
          tagCount[tag] = 1;
     }
}

const sortedTagCount = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
console.log(sortedTagCount);