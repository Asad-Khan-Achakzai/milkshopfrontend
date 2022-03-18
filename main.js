

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const mongoose = require('mongoose');
//require('../quettaMilkShop/app.js')

let win;
function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600,  webPreferences: {
    preload: path.join(__dirname, 'preload.js')
  }});
//    win.loadURL(`http://localhost:3000/`);
   
// mongoose.connect("mongodb://localhost:27017/fyp") 
// .then(() => console.log("DB connected!"));

//     mongoose.connection.on('error',function(err){   
// console.log("The error is: ");
// });
  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/index.html'), // compiled verion of our app
      protocol: "file:",
      slashes: true
    })
  );
  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
  win.on("closed", () => {
      win = null;
  });
  win.on("close", () => {
    win.webContents  .executeJavaScript('localStorage.clear();', true)
  .then(result => {
    console.log(result);
  });
    
  });
}
app.on("ready", createWindow);
// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});