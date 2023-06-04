// Fetch the menu items when the page loads
window.addEventListener('load', getMenu);

// Function to fetch the menu from the JSON file
async function getMenu() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const data = await response.json();
    // Display the menu items on the screen
    console.log('Menu:', data);
    startProcess();
  } catch (error) {
    console.log('Fetching link may be incorrect.');
  }
}

// Function to simulate taking an order
function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const order = { "orderOne": "Cheese Burger", "orderTwo": "Chicken Burger", "orderThree": "Veggie Burger" };
      resolve(order);
    }, 2500);
  });
}

// Function to simulate order preparation
function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Function to simulate order payment
function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });

}

// Function to display a thank you message and clear the menu items list
function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// Main function to handle the promises sequentially
async function startProcess() {
  const order = await takeOrder(); // Take the order
  console.log('Order:', order);
  const prepStatus = await orderPrep(); // Prepare the order
  console.log('Preparation Status:', prepStatus);
  const paymentStatus = await payOrder(); // Pay for the order
  console.log('Payment Status:', paymentStatus);
  thankyouFnc(); // Display thank you message 
}


