# Travel App

A mobile application that allows users to discover hotels, attractions, and restaurants in a specific location.

## Features

- Home Screen: Displays a welcoming message and a button to navigate to the Discover screen.
- Discover Screen: Allows users to search for travel destinations using Google Places Autocomplete and provides menu options to filter results by hotels, attractions, and restaurants.
- Item Card Container: Displays detailed information about a specific item, such as a hotel, attraction, or restaurant.

## Screenshots

![Home Screen](screenshots/home-screen.png)
![Discover Screen](screenshots/discover-screen.png)
![Item Card Container](screenshots/item-card-container.png)

## Prerequisites

- Node.js
- React Native
- Expo CLI

## Installation

1. Clone the repository: `git clone https://github.com/Sammzie92/travel-app.git`
2. Navigate to the project directory 
3. Install dependencies
4. Start the application
5. Use Expo Go or an emulator to run the app on your mobile device.

## Technologies Used

- React Native
- Expo
- Tailwind CSS
- React Navigation
- Google Places Autocomplete
- Axios

## API

The app uses the following APIs:

- Google Places API: Used for location autocomplete and retrieving place details.
- Travel Advisor API: Used to fetch data about hotels, attractions, and restaurants.

To run the app, you will need to obtain API keys from the Google Cloud Console and RapidAPI and configure them in the code.

## Contributing

Contributions are welcome! To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request.

## Additional Components

### MenuContainer

A reusable component used in the Discover screen to display menu options.

#### Usage


import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'; 

### Important
Make sure to replace "YOUR_RAPIDAPI_KEY" in the headers section with your actual RapidAPI key.
