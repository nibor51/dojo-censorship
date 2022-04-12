/*
Create a function `censor` which takes an array of sentences and a forbidden word as argument, then returns the array with the word censored.

A censored word is replaced with asterisks, example: "tacos" -> "*****".

Only a full word should be censored.

sentences: [
  "I love the smell of tacos in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat tacos every day."
]
forbidden word: "tacos"

result: [
  "I love the smell of ***** in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat ***** every day."
]

You can't use a loop!

Don't mutate the parameter.

*/

// TODO add your code here

  // On prend le tableau et on transforme les entrées en tableau
  // On fait passer le include dans chaque tableau pour verifier si le mot interdit
  // Si le mot interdit est présent on le remplace par des étoiles
  // On fait un join sur les tableau précédent 

  
function censor(sentences, forbiddenWord) {
    //const splitted = sentences.map((sentence) => sentence.split(" "));
   // const newSplitted = splitted.map((el) => el.map((word) => word.length === forbidden.length ? word.replace(forbidden, '******') : word.replace (word, word)));
    // const joined = newSplitted.join()
    // const words = sentences.map((sentence) => sentence.replace(forbidden, '******'));
    // if (words.length === forbidden.length) {
    //   word.replace(forbidden, '******')
    // } else {
    //   word.replace (word, word)
    // }
    // console.log(words);
    
    const censorWord = (word) => {
      if (word === forbiddenWord) {
        return '*'.repeat(forbiddenWord.length);
      }
      return word;
    };
  
    return sentences.map((sentence) => sentence.split(' ').map(censorWord).join(' '));
  }



  
  // // Begin of tests
  const assert = require("assert");
  
  assert.strictEqual(typeof censor, "function");
  assert.strictEqual(censor.length, 2);
  assert.strictEqual(
    censor.toString().includes("for "),
    false,
    "don't use a loop"
  );
  assert.strictEqual(
    censor.toString().includes("while "),
    false,
    "don't use a loop"
  );
  assert.deepStrictEqual(censor([], "test"), []);
  assert.deepStrictEqual(censor(["schnibble"], "schnibble"), ["*********"]);
  assert.deepStrictEqual(
    censor(
      [
        "I love the smell of tacos in the morning.",
        "Where is my umbrella?",
        "The test is not a diagnosis of the disease psittacosis.",
        "Eat tacos every day.",
      ],
      "tacos"
    ),
    [
      "I love the smell of ***** in the morning.",
      "Where is my umbrella?",
      "The test is not a diagnosis of the disease psittacosis.",
      "Eat ***** every day.",
    ]
  );
  let test = ["this test is awesome"];
  censor(test);
  assert.deepStrictEqual(
    test,
    ["this test is awesome"],
    "don't mutate the parameter"
  );
  
  // // End of tests
  