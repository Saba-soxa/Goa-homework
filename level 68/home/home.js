// N1

let university = {
  name: "Tbilisi State University",
  departments: 10,
  website: "Tbilisi",
  ratings: {
    student1: 4.5,
    student2: 4.8,
    student3: 4.2
  }
};

console.log(Object.entries(university));
console.log("scholarship" in university); 
university = Object.assign({}, university, { studentsCount: 20000 });
console.log(university);
Object.freeze(university);
university.name = "New Name"; 
console.log(university.name); 
console.log(Object.isFrozen(university)); 


// N2 

let sportsClub = {
  clubName: "Dinamo Tbilisi",
  sportType: "Football",
  foundedYear: 1925,
  achievements: {
    title1: "League Champion 2020",
    title2: "Cup Winner 2018",
    title3: "Super Cup 2021"
  }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log("sponsors" in sportsClub); 
sportsClub = Object.assign({}, sportsClub, { stadiumCapacity: 55000 });
console.log(sportsClub);
Object.freeze(sportsClub);
sportsClub.clubName = "Changed Name"; 
console.log(sportsClub.clubName);
console.log(Object.isFrozen(sportsClub)); 


// N3

let hotel = {
  hotelName: "Holiday Inn",
  stars: 4,
  location: "Batumi",
  guestReviews: {
    guest1: 4.9,
    guest2: 4.5,
    guest3: 5.0
  }
};

console.log(Object.entries(hotel));
console.log("spa" in hotel); 
hotel = Object.assign({}, hotel, { roomsCount: 120 });
console.log(hotel);
Object.freeze(hotel);
hotel.location = "Tbilisi"; 
console.log(hotel.location);
console.log(Object.isFrozen(hotel)); 


// N4

let cinema = {
  cinemaName: "Rustaveli Cinema",
  moviesCount: 12,
  location: "Tbilisi",
  movieReviews: {
    user1: 5,
    user2: 4.7,
    user3: 4.8
  }
};

console.log(Object.entries(cinema));
console.log("vipSeats" in cinema); 
cinema = Object.assign({}, cinema, { ticketPrice: 15 });
console.log(cinema);
Object.freeze(cinema);
cinema.moviesCount = 100; 
console.log(cinema.moviesCount);
console.log(Object.isFrozen(cinema)); 

