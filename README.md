# Acebook

In this project, eight of us were tasked with working on an existing MERN application with only the most basic signup, login and logout functions in place and minimal other functionality. The challenge was to familiarise ourselves with an unknown codebase with technologies we'd little to no previous experience in. We had to improve and extend it into a fully functioning app that we could present to the stakeholders.

You can view the fully deployed site here: [Acebook-Air](https://acebook-air-frontend.onrender.com/)

<p align="center">
<img src="https://user-images.githubusercontent.com/4661986/221147532-a7011ac5-7046-4c4d-a42c-f1c2c8897f0a.png" style="width:600px;"/> 
</p>


## Features achieved

#### MVP
The user can:
- [x] Sign up and create an account, and log in to Acebook
- [x] See all posts
- [x] Create posts
- [x] See a profile page with only their own posts
- [x] Visit to a live-deployed version of the website at [Acebook-Air](https://acebook-air-frontend.onrender.com/)

#### Beyond MVP

The user can:
- [x] Add/edit their account details, username, bio, password etc
- [x] See a profile picture next to their posts (a random avatar is assigned at sign-up)
- [x] Upload their own profile picture from their computer and see it next to their posts
- [x] Navigate the website with a nav bar at the top, which also shows their profile image
- [x] Click to like a post (once per user per post)
- [x] Unlike a post that they've liked already 
- [x] See a live counter of the number of people that have liked a post
- [x] Comment on a post 
- [x] Like/unlike comments
- [x] Choose to edit or delete their own posts (but not other users' posts)
- [x] See a live counter of the number of people that have liked a post
- [x] See a live timestamp of how long ago a post was made
- [x] Only see the beginning of longer posts, and can click to 'Show more'/'Show less' text


## Site demo

<p align="center">
<img src="https://user-images.githubusercontent.com/4661986/221147166-4d8f7809-f07a-4507-a6c3-a73db17dde0f.gif"/>
</p>

## Presentation

At the end of the two weeks, the team presented to the rest of our cohort and coaches detailing our team values and our approach, before giving a live demo of the site. Click the image to access the slides.

<p align="center">
<a href="https://drive.google.com/file/d/1pFIStTqxkfCCAvBrJhD5ji71xJYA2mbA/view?usp=share_link">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/4661986/221149291-a99cd7bc-5140-4ab8-aec0-647bf876b800.png">
</a>
</p>


## How to try the project

### Setup

1. Clone the repo
2. Install Node.js dependencies for both front and backend directories

   ```bash
   cd api
   npm install
   cd ../frontend
   npm install
   ```

3. Install MongoDB

   ```bash
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```

4. Start MongoDB

   ```bash
   brew services start mongodb-community@5.0
   ```

5. Add localhost as the API endpoint for the frontend by running the below:

   ```bash
   cd frontend && touch .env && echo 'REACT_APP_API_URL=http://localhost:8080' >> .env 
   ```

6. Optional: for the image uploading to function, you will need to create an account with [Cloudinary](https://cloudinary.com/) and add a .env file to the api folder with your API_KEY and API_SECRET too. You can run the below, with the keys inserted where indicated.

   ```bash
   cd api && touch .env && echo 'API_KEY=[INSERT KEY]\nAPI_SECRET=[INSERT SECRET]' >> .env
   ```
   
### Running

1.  Start the backend server:

   ```bash
   cd api
   JWT_SECRET=SUPER_SECRET npm start
   ```

2.  Start the front end in a new terminal session:

   ```bash
   cd frontend
   npm start
   ```

You should now be able to open your browser and go to `http://localhost:3000/`


## Testing

We used Jest for testing the back end and Cypress for testing the front end and, with 141 tests in total (79 back-end, 62 front-end, including unit and e2e tests), were extremely pleased with the level of coverage we achieved.

With the front and back end running, you can run the tests in a new terminal window:

   ```bash
   cd api && JWT_SECRET=SUPER_SECRET npm run test
   cd frontend && npm run test
   ```
## Our process

Working in a group of this size was a new experience for all of us and it was really helpful to set out our values and expectations for the project from the very beginning. We all learned a lot about working in tandem with each other and became very efficient with collaborating on Github by the end. 

From the outset, the team wanted to stick rigorously to a TDD process. This, at times, felt like it slowed us down given that we could spend a lot of time fixing broken tests as we went, when we could be implementing new/interesting features or polishing the styling, however we felt it was extremely important to stick to this, given that we were in a learning environment and also given the importance of thorough testing in real world applications. 

Given there were 8 of us, we predominantly worked in four pairs, two pairs on the front end, and two on the back end. We often tried to split the pairs so that someone with more experience in the front/back end was paired with someone with less experience in order to improve the learning experience.

## Reflections

The team is extremely pleased with what it managed to achieve in the short space of time having had little to no experience of the tech stack we were given. In particular the level of functionality we were able to reach as evidenced in the features showcased above is something that we are all proud of. 

We were particularly pleased to achieve a live-deployed version of the website and felt that once the site had finally gone live it was helpful in the development process to be able to see the site update in real time.

With more time for the project the team would have liked to have added features for adding friends and to have polished some of the styling more.

