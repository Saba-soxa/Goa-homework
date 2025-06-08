let academy = {
  name: "Tech Academy",
  courses: ["JavaScript", "Python", "HTML/CSS"],
  socialLink: "GOA BEST",
  reviews: {
    user1: {
      name: "ნიკა",
      status: "parent",
      review: "ძალიან კარგი აკადემიაა!"
    },
    user2: {
      name: "საბა",
      status: "child",
      review: "ძალიან მომეწონა კურსები!"
    },
    user3: {
      name: "ლევანი",
      status: "parent",
      review: "საუკეთესო აკადემიაა GOA."
    }
  }
};

console.log("თანდართული წყვილები:", Object.entries(academy));

console.log("თვისებების სია:", Object.keys(academy));

console.log("მნიშვნელობების სია:", Object.values(academy));

console.log("აქვს თუ არა 'courses' თვისება?", academy.hasOwnProperty("courses"));
console.log("აქვს თუ არა 'location' თვისება?", academy.hasOwnProperty("location"));


let newObject = { member: 321 };let mergedAcademy = Object.assign({}, academy, newObject);
console.log("გაერთიანებული ობიექტი:", mergedAcademy);

Object.freeze(academy);

console.log("გაყინულია თუ არა academy?", Object.isFrozen(academy));
