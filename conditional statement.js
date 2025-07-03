let bill = 0;
let keepOrdering = true;

while (keepOrdering) 
{
  console.log("-------MENU -------");
  console.log("1. Burger - ₹80");
  console.log("2. Pizza - ₹150");
  console.log("3. Sandwich - ₹60");
  console.log("4. Pasta - ₹120");
  console.log("5. Fries - ₹50");

  let userChoice = prompt("Enter item number (1 to 5):") * 1;
  let name = "";
  let price = 0;

  if (userChoice == 1) 
  {
    name = "Burger";
    price = 80;
  } 
  else if (userChoice == 2) 
  {
    name = "Pizza";
    price = 150;
  } 
  else if (userChoice == 3) 
  {
    name = "Sandwich";
    price = 60;
  } 
  else if (userChoice == 4) 
  {
    name = "Pasta";
    price = 120;
  } 
  else if (userChoice == 5) 
  {
    name = "Fries";
    price = 50;
  } 
  else 
  {
    console.log("Invalid choice! select from 1 to 5.");
    continue;        
  }

  let count = prompt(`How many ${name} do you want?`) * 1;
  let total = price * count;
  bill = bill + total;

  console.log(`You ordered ${count} ${name}. Cost: ₹${total}`);
  console.log("Current total bill: Rs" + bill);

  let more = prompt("Do you want to order more? (yes/no)").toLowerCase();
  if (more != "yes") 
  {
    keepOrdering = false;
  }
}

console.log("--------------------");
console.log("Thank you for ordering!");
console.log("Your final bill is ₹" + bill);
