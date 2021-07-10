import React from 'react';
import { Alert } from "react-native";
import { clearValues } from './Verification'

const loggingOut = (navigation) => {

  // alert the user about logging out
  Alert.alert("Log Out", "Do you want to log out?", [{
    text: "No",
    style: "cancel"
  },
  {
    text: "Yes",
    style: "cancel",
    onPress: () => {

      // navigate to login screen
      navigation.navigate('Login');

      // setting user profiles to null
      clearValues();
    },
  }
  ])
}

export { loggingOut }
