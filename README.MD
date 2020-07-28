# Covid-19 Dashboard

A cross-platform (Android, iOS, Web) dashboard to represent the trend of the Covid-19 pandemic in Italy.


## Instructions

#### 1. Install Expo globally

```npm install -g expo-cli```

if the command above generates errors try with sudo. 

After installing it's common to see:

```zsh: command not found: expo``` 

when you try to run expo-cli.

To avoid this problem launch these two commands:

```export PATH=$PATH:~/.npm-global/bin```

and then:

```source ~/.bash_profile```


#### 2. Launch expo-cli

Simply go to the project path and write:

```npm install```

and after

```npm start```

The Metro Bundler web page should appear in seconds.


#### 3. Launch the web app

Simply click on **'run in web browser'** from the Metro Boundler web page.


#### 3. Try the mobile app (without building the standalone)

If you have the iOS simulator installed, just click on **'run on iOS simulator'**, otherwise:

 1. download Expo on your mobile
    phone (from App Store or Play Store);
    
 2. connect the phone to the same network of the computer where you launched the Expo;
 
 3. Scan the QR code (using the Expo app integrated scanner on Android; for iOS use the system integrated scanner). 


## Technologies

* [React-Native](https://reactnative.dev)
* [D3.js](http://d3js.org)
* [Expo](https://expo.io)
* [Redux](https://redux.js.org) 


## Data

Source:

```https://github.com/pcm-dpc/COVID-19```


## Authors

 * [Mauro Marini](https://github.com/marinimau)
 * [Alberto Pes](https://github.com/scambuilds)
