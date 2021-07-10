import React from "react";
import { View, Alert, BackHandler } from "react-native";
import * as firebase from 'firebase';
import "firebase/firestore";
import { firebaseConfig } from './config';
import { sub } from "react-native-reanimated";

let currentID;
let currentUN;
let currentPW;
let currentN;
let currentEM;
let currentAD;
let faveArray = [];

const collectionName = "reg_system";

const loginUser = (un, pw, navigation) => {

    const showError = () => {
        Alert.alert("Error", "Account does not exist", [{ text: "Cancel", style: "cancel" }])
    }

    // Login Verification
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    db.collection(collectionName).where("regUsername", "==", un).where("regPassword", "==", pw).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.exists) {
                currentID = doc.id;
                currentUN = doc.get("regUsername");
                currentPW = doc.get("regPassword");
                currentN = doc.get("regName");
                currentEM = doc.get("regEmail");
                currentAD = doc.get("isAdmin");
                getUserFave(doc.id);
                navigation.navigate('Home');
            } else {
                showError();
            }
        });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });


}


// Register User if account does not exist
const registerUser = (n, em, un, pw, navigation) => {

    const showError = () => {
        Alert.alert("Error", "Username already exists", [{ text: "Cancel", style: "cancel" }])
    }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    db.collection(collectionName).where("regUsername", "==", un).get().then((doc) => {
        if (doc.exists) {
            console.log("account exists")
            showError();
        } else {
            var dbSize = Math.random();
            var docName = 'registered' + dbSize;
            console.log(docName);
            db.collection(collectionName).doc(docName).set({
                regName: n,
                regEmail: em,
                regUsername: un,
                regPassword: pw,
                isAdmin: false,
            })
            currentID = docName;
            currentUN = un;
            currentPW = pw;
            currentN = n;
            currentEM = em;
            currentAD = false;
            navigation.navigate('Home');
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

// Create user faves
const createFaves = (name, count) => {
    let fave = {};
    fave["id"] = faveArray.length.toString();
    fave["name"] = name;
    fave["rating"] = count;
    faveArray.push(fave);
}

// Current user faves
const getUserFave = (id) => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    let faveN;
    let faveC;

    db.collection(collectionName).doc(id).collection("favorites").get().then(query => {
        if (query.size > 0) {
            // createFaves
            db.collection(collectionName).doc(id).collection("favorites").orderBy("faveCount", "desc").get().then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    faveN = doc.get("name");
                    faveC = doc.get("faveCount");
                    createFaves(faveN, faveC); // turns favorites into a list
                })
            })
        } else {
            faveArray = []; //no favorites
        }
    })
}

// back button sign out
const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
};

const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
);

const backReturn = () => {
    return () => backHandler.remove();
}

// signout or logout
const clearValues = () => {
    currentID = "";
    currentUN = "";
    currentPW = "";
    currentN = "";
    currentEM = "";
    currentAD = "";
    faveArray = [];
}

// change password
const changePW = (pw, newPw, rePw) => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    if (pw != currentPW) {
        Alert.alert("Error", "Incorrect Current Password", [{
            text: "Cancel",
            style: "cancel"
        }])

    }
    if (newPw != rePw) {
        Alert.alert("Error", "New Password Does Not Match Retyped Password", [{
            text: "Cancel",
            style: "cancel"
        }])
    } else {
        currentPW = rePw;
        db.collection(collectionName).doc(currentID).set({
            regPassword: rePw
        }, { merge: true })
        Alert.alert("Process Complete", "Successful Password Change", [{
            text: "Okay",
            style: "cancel"
        }])
    }
}

export {
    loginUser, registerUser, getUserFave, backReturn, clearValues, changePW, faveArray, currentID, currentUN, currentPW,
    currentN, currentEM, currentAD
};
