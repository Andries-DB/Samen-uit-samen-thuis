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