// Welcome message (homepage)
document.getElementById('welcomeAlert').addEventListener('click', function() {
    alert('Welcome to SmartLiving Automation! Explore smart solutions for your home!');
});

// show a message based on the current time of day, once the page loads, a message is printed based on the time of day
let greeting;
const hour = new Date().getHours();

if (hour < 12) {
    greeting = "Good Morning!";
} else if (hour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

alert(greeting + " Welcome to SmartLiving Automation!");