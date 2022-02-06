# Countries Stats Finder app

[![Platform](https://img.shields.io/badge/framework-react--native--v6.0.6-blue)](https://github.com/facebook/react-native)
[![Platform](https://img.shields.io/badge/platform-Android-green.svg)](http://developer.android.com/index.html)

Countries Stats Finder app. Inspired by [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). This app is done with educational purposes in order to learn the basics of React-Native framework and redux-toolkit-query toolset. This app doesn't use expo and it only has been tested on my personal Android device.

The main screen retrieves from api rest call to [REST Countries API](https://restcountries.com) the list of countries with basic data about each of them. When the user clicks on each country's card the app navigates to another screen with more info about the selected country. User also is able to filter countries by name and different filters (capital, region...and so forth) from the left drawer using the gesture ability.

## Technology

App done with React-Native framework and the following libraries:

- **Routing**: React Navigation V6
- **State**: Redux Toolkit (RTK-Query for api calls) / Context API (theme switcher)
- **UX/UI**: Figma (Prototyping) / HTML - CSS - React-Native-Paper
- **Others**: Lodash

Some parts of the application could be refactor and improved. For instance navigation stack or conditional styles among others. Due to loss of interest on the development I don't plan on adding new features such as local persist storage configuration and so on.

## Demo usage

<p align="left">
    <img src="https://user-images.githubusercontent.com/49274799/152696365-199482d0-af5f-4248-b363-dfd2d05808eb.gif"
        alt="Countries list"    
        style="margin-right: 10px;"    
        width="180" />
    <img src="https://user-images.githubusercontent.com/49274799/152696565-75dbfa77-a69c-48ba-afbc-f91eda099836.gif"
        alt="Countries filter"    
        style="margin-right: 10px;"    
        width="180" />
     <img src="https://user-images.githubusercontent.com/49274799/152696546-a2160973-46ab-4807-a5ae-d627044bf5bf.gif"
        alt="Country info"    
        style="margin-right: 10px;"    
        width="180" />
</p>

## Installation and run

Clone this repository and install dependencies. Before running the app, be aware of your device is connected or avd emulator configured on Android Studio in case of running Android version check out:

```bash
$ npm run android
```

## Support me

> Just **star** or **fork** this repository, and follow my github. You have _supported_ me!

## Author

[**David Mareca**](https://www.linkedin.com/in/davidme/)
