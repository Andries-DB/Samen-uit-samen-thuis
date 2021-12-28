# Samen uit, Samen thuis
### Final project for Mobdev I.

## Description:
Aggression of any kind has no place in society. That we can feel safe should be self-evident, as became apparent a few weeks ago during the protests in Ghent. For this course, we do our part and create an application that provides outgoing people with a tool to take care of each other when things go wrong. We are making an application so that you are no longer alone, but with which you can intervene quickly and proactively as a group. In other words: out together, at home together.

## Installation:
0) Visual Studio Code + Extensions

1) NPM, NVM
2) Parcel
3) ESlint
4) Firebase
5) Netflify
6) Navigo
7) Regenerator Runtime

## Feature Overview
### ADOBE XD files 
Coming soon

### Design System with SASS
A design system is a complete set of standards intended to manage design at scale using reusable components and patterns.

I've made a design system for my project. The themes I am using are:
1) Typography
2) Colors
3) Buttons
4) Forms
5) Card
6) Layout

My design system must ensure that I can reuse certain pieces of code. Everything is brought together on 1 page.

### Main Application

#### Login Page
To log in we use firebase auth which we connect with our login component. We do this by creating a separate javascript file and connecting firebase to the app in it. We export the necessary functions to login and import them into the LoginComponent. We will create separate functions in it to log in via google or via email. We then place these functions in an Onclick() event of a certain button.

Used firebase functions for logging in:
1) Auth
2) signInWithEmailAndPassword
3) signInWithPopup
4) provider
5) GoogleAuthProvider

I've made 2 seperate functions (signIn & signInWithGoogle) where I put the necessary code to log in. When these functions are complete, I put them in the Onclick() event of my 2 buttons (btn--primary login & btn--primary loginGoogle).

#### Register Page
If you don't have an account yet, you can create one via the register page. I also used the firebase file for this. I have imported a function from the firebase auth and exported it again. This function is then imported into the registerComponent. There is a separate function for registering the user by email & password. Once this function was complete, I put it in the Onclick() event of the register button.

Used firebase functions to register a new user:
1) Auth
2) createUserWithEmailAndPassword

I've made a function (registerUser) where I put the necessary code to register. When the function was complete, I put it in the Onclick() event of my register button (btn--primary register).

##### Extra information page
When you have registered a new user in the app, you go to the InfoComponent. There you will get asked to give some more information about yourself like your firstname, lastname, phone number, ... . Once u have given the required info, you will go to the dashboard page.

I have made a function to do this. I made a collection in the firestore named 'usersInfo' where the information is saved. Each account has his own ID which is the email that I put in the localstorage. Later on in the app, you can still change the information that you gave.

#### Dashboard Page
On the dashboard page you have an overview of all events that you have created yourself, where you have been invited and which you have already accepted. There are 3 different sections for this. If you click on an event you will see a small detail page where you can find various information about the event.

There is a small navigation where you can navigate between Home (the dashboard), Map and your profile details.

Finally, there is also the log out button that ensures that you will log out and go to the login page.

Used firebase functions to log out:
1) Auth
2) signOut

I've made a function (signOut) where I put the necessary code to sign out the current user. When the function was complete, I put it in the Onclick() event of my signOut button (btn--primary signOut).

##### Map Page (COMING SOON)

##### Profile Page
I have made sure that when you are logged in you can view and edit your own information. There are 2 separate functions made for this:

1) Onsnapshot
2) addDocument

###### Onsnapshot
An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document. Then, each time the contents change, another call updates the document snapshot.

###### addDocument
If you have changed your information, there is a button 'SAVE'. In the onClick() event of the button, I have put the addDocument() function. It overwrites the old information with the new information that you just changed.


### MORE COMING SOON

## My own contribution
COMING SOON

## Deployment
COMING SOON

## Author
Made by: Andries De Baere