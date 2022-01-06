# Changes made to the project

### 26 DEC 2021 22:18
Fixed most of the problems (Service worker isn't working correctly, put it in // so I could start).
Started with the Login & Register page. Still wondering how I need to implement firebase within the Login & Register Components.
Merry Christmas everyone!

### 27 DEC 2021 16:32
Implemented firebase within the Login & Register Components. I can now login a user trough email & password or via Google. Also I can register a new user trough email & password. 

### 28 DEC 2021 21:14
Implemented firestore within the Dashboard, Profile & Info Components. 

1) Dashboard
      I can make a new event which is going to be stored into the events collection. Still wondering how I'm implementing the photo & the users (invited, rejected & joined ).
2) Info
      When I register a new user, you go automatically to the info Component. Here you give extra information to the app. It is stored in the usersInfo collection. Still wondering how I'm implementing the photo or avatar.
3) Profile
      You can change the info you gave in the Info Component. It wil overwrite the old ID with the new information you gave. Still wondering how I'm implementing the photo or avatar.

### 6 JAN 2022 18:06
First of all, happy new year!! This will be our year without covid-19 (hopefully).

I've implemented storage (firebase), Sendgrid API en Google Maps API. These 3 aren't working yet 100%

The Map API is working but i still need to figure out if every user gets a marker and that you can see other markers (logged in people). Therefore I need to deploy the site to firebase hosting but I get some errors. Still working on it!!
Sendgrid API, I have the code like it was in the documentation, but it isnt't working yet. Work in progress.
Storage, there is a problem while uploading the file. It gives me a fakepath so that other people can't see your filepaths while uploading it. I have a solution in my head that might be working but I now have some other things on my head.

The good news, Mostly of the other things are working. I can see, add, update, refresh events and the details of the events. I have 'your events' and 'other events' and not your, accepted & invited events. I don't know how I need to implement it but it's not that hard I think. I'm going to do that at the end because there are other more important things to do. I can edit & delete the profile information and delete the profile itself.
I've made the app in 3 languages (english, dutch and french).