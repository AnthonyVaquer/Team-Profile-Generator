const staff = require('../index');

// This creates the cards for each employee
function createCards() {
  // cardData will store all the generated card templates
  const cardData = [];
  const fullStaff = staff.staff;

  // Loops through to generate a personalized card for each employee
  for (let i = 0; i < fullStaff.length; i++) {
    const staffValues = Object.values(fullStaff[i]);

    // checking the employee role based on specific fields to generate the proper card
    function staffExtra() {
      if ('github' in fullStaff[i]) {
        return `<li class="list-group-item">Github: <a href="https://github.com/${staffValues[4]}">${staffValues[4]}</a></li>`;
      } else if ('school' in fullStaff[i]) {
        return `<li class="list-group-item">School: ${staffValues[4]}</li>`;
      } else {
        return `<li class="list-group-item">Office: ${staffValues[4]}</li>`;
      }
    }

    const cardTemplate = `
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card mt-4">
            <div class="card-header" style="background-color: lightgreen;">
              <h4>${fullStaff[i].employeeName}</h4>
              <h4>${fullStaff[i].role}</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${fullStaff[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${fullStaff[i].email}">${fullStaff[i].email}</a></li>
              ${staffExtra()}
            </ul>
          </div>
        </div>
      </div>\n`;

    cardData.push(cardTemplate);
  }

  // The main HTML page with basic styling from Bootstrap
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Company Staff</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      <body>
        <header class="row">
          <div class="col-md-12">
            <h1 style="background-color: lightgreen; height: 100px; width: 100%; text-align: center; padding-top: 15px;" class="col-md-12">My Staff</h1>
          </div>
        </header>
        <div class="container-fluid" id="card=container">
          <!-- Staff Cards -->
          ${cardData.join('').trim()}
          <!-- Staff Cards -->
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>`;

  return htmlTemplate.trim();
}


const htmlOutput = createCards();
console.log(htmlOutput);