# Restaurant Reservation Management App

You are required to build a table reservation system for restaurants. This application will be used only by the restaurant managers themselves to keep track of the reservations that they receive by phone or email.

### Registration and Sign in

- The app is multi-tenant and will be used by multiple restaurants.
- Each restaurant manager is able to sign up and create an account for their restaurant
- Information required on the sign up is
  - Manager name
  - Email
  - Password
- Once signed up, the application should sign them in automatically and ask them to fill in the restaurant name before they're allowed to continue and "enter" the app. If they abandon the process, and come back later, they shouldn't be allowed to continue without providing the restaurant name.

## Application features

### Restaurant table layout editor

- Layout is represented by a 15x10 grid of empty cells by default
- Clicking on an empty cell opens up a modal dialog to create a new table in that cell
  - Table has an auto-generated reference number (#1 #2 #3 etc.) and number of seats (required)
  - The number of seats should be visible on the table in the layout once created
- Tables created in the cells can be moved to other cells by using drag&drop
- Clicking on a cell that contains a table should open up the edit modal dialog where the number of seats can be edited. This dialog should also give the owner the ability to delete the table

### Table reservation management

- Table reservation management needs to show the same table layout as the layout editor. However, the behavior here is different: tables cannot be moved or edited. New tables cannot be added from here.
- Clicking on a table should open up a list of all the reservations for the given table
  - The list can be filtered by past/future reservations.
  - The manager needs to have the ability to create/edit/delete reservations from here.
  - Every reservation has a date, time, customer name, and customer contact details. All fields are required.
  - Keep in mind that the same table cannot be reserved by two customers at the same time. Assume that every customer visit lasts an hour. Reservations can only start at the beginning of an hour (eg. 5:00PM, 6:00PM, but not 5:22PM, 5:30PM etc.)

### Reservations reporting

- The restaurant manager needs to be able to see an overview report of all the reservations for a given date
- Report should be grouped by table
- It needs to show all the relevant reservation info (reservation time, customer name, customer contact details)

## Implementation requirements

- This needs to be a Single-Page application developed in React. Refreshing the page at any point is not allowed (not even during authentication)
- All the data needs to be saved on the backend. You are allowed to use any backend technology you want. You can implement your own REST or GraphQL API, or use Firebase or a similar service for the backend.
- You are allowed (but not required) to use any state management mechanism: React Context / Redux / MobX etc.
- Please treat this project as if you are delivering it to a client
- Bonus: Use functional components with React Hooks to implement the application
- You will not be marked on design skills. However, functional design and UI interactions will be taken into account
Create a private GitHub repository for the above and share it with igor.pantovic@toptal.com 
- Submit your repository link and video walkthrough [here](https://toptalcommunity.typeform.com/to/Cy0WLM).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
