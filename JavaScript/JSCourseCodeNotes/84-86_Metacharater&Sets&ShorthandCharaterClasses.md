#  Metacharters, Sets & Shorthand Charater Classes / Lecture 84-86 Code
### JS APP.JS
```javascript
let re;
// Literal Charaters
re = /hello/;
re = /hello/i;

// Metacharater Symbols
re = /^h/i;    // Must start with

re = /o world$/i;    // Must end with

re =/^hello$/i;    // Must start with & end with only word
// const str = 'hello hello'; does not work

re = /h.llo/i; // . Matches any one charater

re = /h*llo/i;   // Matches any charater 0 or more times

re = /gre?a?y/i; // Optional charater e & a, none also works

re = /gre?a?y\?/i; // Escape charater, \ 

// Brackets [] - Charater Sets
re = /gr[ae]y/i; // Must be an a or e better than above
re = /Gr[ae]y/; // Must be an  or a, case sensitive
re = /Gr[^ae]y/; // Match anything except for F or G
re = /Gr[A-Z]y/; // Matches any uppercase
re = /Gr[a-z]y/; // Matches any lowercase
re = /Gr[A-Za-z]y/; // Matches any letter
re = /Gr[0-9][0-9]y/; // Matches any digit in range

// Braces {} - Quantifiers
re = /Hel{2}o/i;   // Charater occur {m} amount of times
re = /Hel{2,4}o/i;   // The number of times that the charater occurs between range{x-y}
re = /Hel{2,}o/i;   // Charater must occur at least {m} times 

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Charater Classes
re = /\w/; // Word charater - alphanumeric or _ 
re = /\w+/; // + = one or more 
re = /^\w+$/; // all charaters must comply
re = /\W/  // Non-Word charater
re = /\d/; // Match any digit
re = /\d+/; // Match any digit one or more
re = /\D/;  // Match any Non-digit
re = /\s/;  // Match whitespace char TAB or SPACE
re = /\S/;   // Match non-whitespace char
re = /lep\b/i // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y


// String to match 
const str = 'yhrwuixdskjxy';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);

```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox</title>
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
```
