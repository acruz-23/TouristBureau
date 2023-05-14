"use strict";
console.log("JS working");
let categories = [
  "Adventures",
  "Arts & Crafts",
  "Museums",
  "Wine Tastings",
  "Other",
];

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description:
      "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.0,
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description:
      "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
    location: "145 FM 103",
    price: 145.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description:
      "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description:
      "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description:
      "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.0,
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description:
      "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.0,
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description:
      "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description:
      "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description:
      "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 0.0,
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description:
      "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.0,
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description:
      "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.0,
  },
];
const ticketFormEl = document.getElementById("ticketSection");
ticketFormEl.style.display = "none";
let chosenActivity, chosenObject;
const resetBtnEl = document.getElementById("resetBtn");
const activityCategoryEl = document.getElementById("activityCategory");
const activitiesListEl = document.getElementById("activitiesList");
const purchaseBtnEl = document.getElementById("ticketForm");
resetBtnEl.onclick = resetPurchaseForm;
purchaseBtnEl.onsubmit = generatePurchaseMessage;
activityCategoryEl.onchange = generateActivitiesList;
activitiesListEl.onchange = generateActivityInfo;
generateActivityCategory(categories);

function generateActivityCategory(array) {
  console.log("generateActivityCategory start");
  for (let categories of array) {
    const catergoryOptions = new Option(categories);
    activityCategoryEl.appendChild(catergoryOptions);
  }
  console.log("generateActivityCategory finish");
}

function generateActivitiesList() {
  console.log("generateActivitiesList start");
  const selectedCategory = activityCategoryEl.value;
  onCategoryChangePageReset(selectedCategory);
  console.log(selectedCategory);
  // let sizeCounter = 0;

  for (let object of activities) {
    if (selectedCategory == object.category) {
      const activityOptions = new Option(object.name, object.id);
      activitiesListEl.appendChild(activityOptions);
      // sizeCounter++;
    }
  }
  // activitiesListEl.size = sizeCounter;
  document.getElementById("category").innerHTML = selectedCategory;
  console.log("generateActivitiesList Finish");
}

function generateActivityInfo() {
  console.log("generateActivityInfo start");
  const selectedActivity = activitiesListEl.value;
  resetPurchaseForm();
  for (let object of activities) {
    if (selectedActivity == object.id) {
      chosenActivity = object;
      document.getElementById("id").innerHTML = `ID: ${object.id}`;
      document.getElementById("name").innerHTML = `Name: ${object.name}`;
      document.getElementById(
        "description"
      ).innerHTML = `Description: ${object.description}`;
      document.getElementById(
        "location"
      ).innerHTML = `Location: ${object.location}`;
      document.getElementById("price").innerHTML = `Price: $${object.price}`;
      if (object.price > 0.0) {
        console.log;
        displayform();
      } else {
        ticketFormEl.style.display = "none";
      }
    }
  }

  console.log("generateActivityInfo finish");
}
function displayform() {
  console.log("displayform start");
  ticketFormEl.style.display = "flex";
  console.log("displayform finish");
}
function generatePurchaseMessage() {
  console.log("generatePurchaseMessage start");
  const numberOfTickets = +document.getElementById("numOfTickets").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const userEmail = document.getElementById("userEmail").value;
  const amountCharged = numberOfTickets * chosenActivity.price;
  const purchaseMessage = `Your credit card has been charged $${amountCharged} for ${numberOfTickets} tickets to
  ${chosenActivity.name}. A confirmation email has been sent to ${userEmail}.`;
  document.getElementById("purchaseMessage").innerHTML = purchaseMessage;
  console.log(numberOfTickets, cardNumber, userEmail);
  return false;
}
function resetPurchaseForm() {
  console.log("resetPurchaseForm Start");
  const numberOfTicketsEL = document.getElementById("numOfTickets");
  const cardNumberEl = document.getElementById("cardNumber");
  const userEmailEl = document.getElementById("userEmail");
  const purchaseMessageEl = document.getElementById("purchaseMessage");
  purchaseMessageEl.innerHTML = "";
  numberOfTicketsEL.value = null;
  cardNumberEl.value = null;
  userEmailEl.value = null;
}
function onCategoryChangePageReset(category) {
  document.getElementById("category").innerHTML = category;
  activitiesListEl.options.length = 0;
  if (category === "Welcome") {
    document.getElementById("logoImage").src =
      "./images/VisitorsBureauSmall.webp";
    document.getElementById("logoImage").alt = "Visitors Bureau logo";

    const defaultActivity = new Option("Please Choose a Category", "select");
    activitiesListEl.appendChild(defaultActivity);
  } else {
    document.getElementById("logoImage").src = "";
    document.getElementById("logoImage").alt = "";
    const defaultActivity = new Option("Choose One", "select");
    activitiesListEl.appendChild(defaultActivity);
  }
  document.getElementById("id").innerHTML = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("description").innerHTML = "";
  document.getElementById("location").innerHTML = "";
  document.getElementById("price").innerHTML = "";
  ticketFormEl.style.display = "none";
}
