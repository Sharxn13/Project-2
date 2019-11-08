# Expense-Trackerr

This app aims to ease user from the trouble of keeping track of expenses over a period of time.

# Technologies Used
1. JavaScript
2. NodeJS
3. Express
4. React
5. PostgreSQL
6. Bootstrap 4
7. mockflow.com - wireframe

# Approach
I started by listing down the needs/goals as well as frustrations and challenges commonly faced by people. That helped me to narrow down the number of tables I need as well as the functionality of it. This also helps to provide me with the details I would include in my navigation bar which would help to show what form is needed to be rendered for each page.

I have sectioned my codes into different parts, for example; Create, Update, Delete and Edit. This would help me to locate and trace back the routes.

# Installation Instructions

1. Install all the depencies of the project:
npm install

2. Create the Postgres db for running on local:
createdb expense_db -U USERNAME

3. Create the tables neccessary to run this project:
psql -d expense_db -U USERNAME -f tables.sql

4. Use NodeJS and the following dependencies:

    "bootstrap": "^4.3.1",
    "cookie-parser": "^1.4.4",
    "express": "^4.17.1",
    "express-react-views": "^0.11.0",
    "jquery": "^3.4.1",
    "js-sha256": "^0.9.0",
    "jsonfile": "^5.0.0",
    "method-override": "^3.0.0",
    "pg": "^7.12.1",
    "react": "^16.10.2",
    "react-dom": "^16.10.2"

# Unsolved Problems:
Unable to show total amount within a period of time in the Stats page.

# Problem Statement:
"Sometimes we got to use outside sources to help us save up for our future."
