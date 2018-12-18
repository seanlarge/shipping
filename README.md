## Shipping Label 
It was interesting working with this project only using the state of each component versus
something like mobx (which is what I have been using for a majority of this year). Throughout the code
I have left comments by starting them with : TODO. In on step, I used the constructor to set the state before the rest of the 
component mounted. I looked into using different lifecycle methods like componentDidMount(which comes after render()) and the getDerivedStateFromProps method.
For style and reusable components I choose material UI, they have a nice way of styling things and creating reusable components. There are some minor validations on the forms and on the shipping options step.
I broke down the form into a reusable component for collection addresses. I no that there are a few other components that could be broken out but I did not do them for the sake of time on this exercise. There will be a TODO mentioning so..
As for using {prev: 1, next: 2,end: 3} to move the wizard back and forth, I did not use this approach because I used the stepper from MaterialUI. Material UI moves back and forth based on activeState prop. I passed this prop down to the steps to let them know if they should render their content
or not. all of the other props mentioned I used and allowed the steps to control movement by using the onAction prop. the last step uses the onAction prop and passes "complete" as a param. The wizard onAction then calls it's props onComplete to complete the label 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
