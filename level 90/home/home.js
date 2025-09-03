function collectArgs(...args) {
  return args;
}

// ტესტი
console.log(collectArgs(1, "hello", true, 42));


function sumAll(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

// ტესტი
console.log(sumAll(1, 2, 3, 4)); 
console.log(sumAll());          



function excludeFirst(first, ...rest) {
  return rest;
}

// ტესტი
console.log(excludeFirst("first", "second", "third", "fourth"));



function logExceptLast(...items) {
  const allExceptLast = items.slice(0, -1);
  console.log(allExceptLast);
}

// ტესტი
logExceptLast(1, 2, 3, 4, 5); 



const arr = [1, 2, 3, 4, 5];

const [first, second, ...rest] = arr;

console.log(first);  
console.log(second); 
console.log(rest);  




const user = { name: "Davit", age: 25, role: "admin", active: true };

const { name, age, ...rest } = user;

console.log(name); 
console.log(age);  
console.log(rest); 




function filterOut(target, ...values) {
  return values.filter(value => value !== target);
}

// ტესტი
console.log(filterOut(2, 1, 2, 3, 2, 4));



class Logger {
  constructor(prefix, ...messages) {
    this.prefix = prefix;
    this.messages = messages;
  }

  log() {
    console.log(this.prefix, ...this.messages);
  }
}

// ტესტი
const logger = new Logger("[INFO]", "Server started", "on port 3000");
logger.log();



const data = [1, [2, 3, 4], 5];

const [first, [second, ...nestedRest], last] = data;

console.log(first);      
console.log(second);     
console.log(nestedRest); 
console.log(last);       



function flatten(...args) {
  return args.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten(...val));
    } else {
      return acc.concat(val);
    }
  }, []);
}

// ტესტი
console.log(flatten(1, [2, [3, 4], 5], 6));




