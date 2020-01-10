const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

// create simple server log that outputs the method and url sent to the server
app.use((req, res, next) => {
  console.log(`Handling a ${req.method} request for ${req.url}`);
  next(); // needed to continue server processing of client request
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})