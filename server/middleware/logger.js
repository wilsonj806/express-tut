const moment = require('moment');

/* Making middleware
  note that in our middleware function, we call a nextFn function,
  this would be the next middleware function that we'd be calling in the stack
*/
const logger = (req, res, nextFn) => {
  /* with the request obj, we have access to several properties, including the URL
    here we're building the URL out of the protocol(HTTP), the host via req.get(), and the original URL/ the actual page */
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:
    ${moment().format()}
  `);
}

module.exports = logger;