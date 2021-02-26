# Our App for the Regensburg University: URfit

## Welcome to the URfit App

This application is being created as part of the course "Advanced Software Engineering" in the Media Informatics master's degree program at University of Regensburg in collaboration with the Campus MOBIL project iniated by Universities Sports Center.

The application is developed during fall semester 2020/21 and currently work in progress.

---

## About

For learning and movement to no longer be at odds with each other, the goal of the Campus MOBIL project is to bring more movement and health into students' everyday lives.

Students are not only exposed to enormous stress during exam time, but also repeatedly confronted with challenges in their everyday student life. A lack of rest and exercise breaks between lectures often leads to students reaching a state of physical and mental overload. Due to time pressure, the lack of sports and a fast but often unbalanced diet are pre-programmed, since there is simply no energy left to deal with one's health. Health, which is probably our most important asset, deserves more attention.

The URfit app is a web-based application where students can find offers for a healthier daily study routine in the forms of exercise, fitness and relaxation videos as well as audio files. A link to the universities cafeteria offerings is also included.

[Here](https://urfit.software-engineering.education/) you can get in touch with the URfit app.

The development team can be reached by email at ur.fit.app@mailman.uni-regensburg.de.

## How to get started (as a developer)

The following steps will get you up and running in a working environment of your choice.
Please be aware, that there is no strait forward way to set up a running production version of this web app, so the instructions given below are only for a developement environment.

1. `git clone https://github.com/UniRegensburg/unsere-app-fur-die-universitat-regensburg-ur-fit/tree/dev` clone the repository to your machine
2. go into the projects folder and run `npm ci` to perform a clean installation of all dependencies. (**don't use `npm i`** as this will result in uncommited changes to you `package-lock.json` file)
3. run `npm start` to get started. This will run the client and api servers simultaneously. You can also start client and api seperate from each other by using multiple termials or your IDE (e.g. VS Code), use `npm run client` and `npm run api`
4. (optional) to test changes on your phone, type `ipconfig` into your terminal (windows) and read the `IPv4 Address` where `Connection-specific DNS Suffix` is **localdomain**. That IP Address points to your machine inside your local network. Use the IP together with port `3000` to access the website from your phone. The full URL should look similar to this: `192.168.1.7:3000`
