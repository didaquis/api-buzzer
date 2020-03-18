# API-Buzzer

This is a Node.js API for interact with a buzzer connected to a Raspberry Pi.  


### 📝 Requirements
* Node.js 10 or higher
* Raspberry Pi 3 Model B+ (Should be work on Raspberry Pi 2 Model B and Raspberry Pi 4 Model B)
* Buzzer (active buzzer, 5v)
* 2 female-female jumper wires

### 📚 How to prepare the hardware


![hardware.jpg](./docs-assets/hardware.jpg)

### 📚 How to run the API
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
| GPIO | The GPIO pin connected to buzzer |


### 😭 Common problems
Some tips for solving most common problems:
* If you are using UFW firewall on Raspbian, ensures the http trafic is allowed: `sudo ufw allow from 192.168.1.0/24` (this allow all traffic from the network 192.168.1.0). Maybe you prefer allow all trafic for an specific port of API-Buzzer: `sudo ufw allow 31415/tcp`
* Are you sure you have connected the wires correctly? 🤔
* Are you sure you have configured the right GPIO port? 😬


### 💻 Tricks for development
* Run app in dev mode: `npm run dev`
* Run app in debugger mode: `npm run debug`
* Run the linter: `npm run lint`
* Delete all log files: `npm run purge`
