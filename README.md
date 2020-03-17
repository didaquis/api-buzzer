# API-Buzzer

This is a Node.js API for interact with a buzzer connected to a Raspberry Pi.  

### 📝 Requirements
* Node.js 10 or higher

### 📚 How to run the API?
* Use the command: `npm install`. If you are deploying the app in production, it's better to use this command: `npm install --production`
* Configure the application:
  * Duplicate the configuration file `_env` and rename as `.env`
  * Edit the file `.env`
* Then use: `npm run start`. 
* That's it!

**❗️You need help with `.env` file?** 

Do not worry, here you have a guide:

| Key | Description |
|-----|-------------|
| PORT | The port for running the backend |


### 💻 Tricks for development
* Run app in dev mode: `npm run dev`
* Run app in debugger mode: `npm run debug`
* Run the linter: `npm run lint`
* Delete all log files: `npm run purge`
