const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.
*/

// Define the GET endpoint
app.get('/assistant/greet', (req, res) => {
    // Get the 'name' query parameter, default to 'Guest' if not provided
    const name = req.query.name || 'Guest';

    // Get the current day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayName = days[today.getDay()];

    // Generate the day-specific cheerful message
    let dayMessage;
    if (dayName === 'Monday') {
        dayMessage = 'Happy Monday! Start your week with energy!';
    } else if (dayName === 'Friday') {
        dayMessage = "It's Friday! The weekend is near!";
    } else {
        dayMessage = 'Have a wonderful day!';
    }

    // Send the JSON response
    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
