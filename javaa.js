let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let comment = "this website is for loser";

function disemvowel(str) {
  let newString = "";

  for (i of str) {
    if (!vowels.find((v) => v == i)) {
      console.log(i);
    }
  }
}
disemvowel(comment);
