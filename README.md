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

### UML 
Before I started with the SPA, I've made a UML structure. It is a developmental modeling language that is intended to provide a standard way to visualize the design of a system.

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

#### Extra information page
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

#### Event details page
When you want to see the details of a event, there is a button that will redirect you to the details page. At that time, the title of the event you clicked on is stored in the localstorage. When you are on the details page, you see all the details of the specific event. There are 2 sorts of events, the ones you made, and the events other people made. 

1) Event you made:
    You can delete, update and read the details of the event. Once you've updated it, other people will instantly see the updated version of it. You are the only one that can update or delete the details of the event.
2) Event others made:
    You can only read the details of the event. You can't change anything or delete anything

#### Map Page
On the map page, you will see a map where your current location is centered. Every user has his marker. You will see all the users that are currently logged in. If u press the panic button, everyone within 500m will get an alert that you are in danger with the coördinates (don't know how to do coördinates -> adress) (Isn't working yet). There is a second button, report. Than you will be redirected to the report page.

#### Report Page
If you want to report an assault, you can do that on this page. There is a form that you can fill in. The location is automatically set on the location you are now but you can still change that. When the necessary information is filled in, there is a button SEND with in the onClick() event a function called sndmsg(). What this function does is it saves the filled in infomation into an email. With the sendGrid API, I can send a mail to a particular email-adress. (ISNT WORKING YET (code is there but isn't working, instead I log the email to the console)). U can change the email-adress to any adress you want.

#### Settings Page
On the settingspage, you can edit your own personal information by updating or deleting it. You can also change the language between Dutch, French and English. When you log in to the application, you will be automatically redirected to the english version of the page.

1) Onsnapshot
2) addDocument
3) deleteDocument

###### Onsnapshot
An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document. Then, each time the contents change, another call updates the document snapshot.

###### addDocument
If you have changed your information, there is a button 'SAVE'. In the onClick() event of the button, I have put the addDocument() function. It overwrites the old information with the new information that you just changed.

###### deleteDocument
If you want to delete your account, there is a button 'DELETE'. In the onClick() event of the button, I've put the deleteDocument() function. It deletes the account and redirects you to the login page. The data stored in firestore will be deleted because the ID of the user is the email. There is a item in the localstorage that gets the currently logged in user so I can get the email adress.

### MORE COMING SOON

## My own contribution
I've made 3 versions. The dutch, english and french version. Its all linked with each other. When you are on the settings page, you can choose for a specific language. However for the login, register & map page, I only have it in English. Login & register are coming soon but the Map page wouldn't work. Still figuring out how that comes

MORE COMING SOON

## Deployment
I've deployed my website with Render. It is mostly the same as Netlify, but you don't need to pay for it which is easy. Everytime I push something to me repository on github, it will automatically change.

The link is: https://samenuitsamenthuis.onrender.com/

!! Not working !!
## Author
Made by: Andries De Baere