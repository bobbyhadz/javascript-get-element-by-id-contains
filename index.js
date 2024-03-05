console.log('bobbyhadz.com');

// ✅ get an element by ID that STARTS WITH `bo`
const element1 = document.querySelector(`[id^="bo"]`);
console.log(element1); // 👉️ div#box1

// ✅ get element by ID that ENDS WITH `ox1`
const element2 = document.querySelector(`[id$="ox1"]`);
console.log(element2); // 👉️ div#box1

// ✅ get element by ID that CONTAINS `ox`
const element3 = document.querySelector(`[id*="ox"]`);
console.log(element3); // 👉️ div#box1
