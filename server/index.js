const express = require('express');
const path = require('path');

const app = express();

// setting up the port so it automatically checks if there's one already
const PORT = process.ENV || 5000;

const logger = require('./middleware/logger');

// init logger middleware
// app.use(logger);

//  this is a utility/ middleware included with Express.js
app.use(express.json());
// below lets us use urlencoded data
app.use(express.urlencoded({ extended: false }));

/* Note that if we run it in the browser without app.get(), it's going to spit an error
This is because the server isn't sending anything back to the browser */

/* Also note that if you're serving pages, you have the option of setting a static folder with Express
  NOTE app.use() is also the method for consuming middleware

  If you recall the node crash course, there was way more code to get the same result
 */
app.use(express.static(path.join(__dirname, '../', 'public')));

app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`));