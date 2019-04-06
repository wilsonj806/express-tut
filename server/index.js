const express = require('express');
const path = require('path');
const Members = require('./Members');

const app = express();

const logger = require('./middleware/logger');

// init logger
app.use(logger);

/* Here we're creating a route for requests
  tl;dr routes let the user access different parts of a web app, from other pages in the app to api access
*/

// GET all members
app.get('/api/members', (req, res) => {
  // Note that we don't need to use JSON.stringify() here
  res.json(Members);
});

// setting up the port so it automatically checks if there's one already
const PORT = process.ENV || 5000;

/* Note that if we run it in the browser without app.get(), it's going to spit an error
This is because the server isn't sending anything back to the browser */

/* Also note that if you're serving pages, you have the option of setting a static folder with Express
  NOTE app.use() is also the method for consuming middleware

  If you recall the node crash course, there was way more code to get the same result
 */
app.use(express.static(path.join(__dirname, '../', 'public')));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));