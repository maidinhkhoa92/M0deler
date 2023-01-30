# Deployment by html file

To deploy source code, please follow these steps:

- run `npm install`
- run `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Then, you can use `build` folder to deploy in your server.

# Deployment by Static Server

For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

- npm install -g serve
- serve -s build

The last command shown above will serve your static site on the port 3000. Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:

- serve -s build -l 4000

Run this command to get a full list of the options available:

- serve -h