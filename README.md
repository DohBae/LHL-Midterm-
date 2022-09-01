# F.A.A.Q. (Fun and Awesome Quizzes) U. 

Does the idea of a quiz stress you out? When you hear the word "quiz" does it make you want to use an expletive?! Well, we've got an app for you! 

Welcome to F.A.A.Q. U., a browser-based app that lets you create an account, create your own multiple-choice quiz (content, number of questions, and thumbnail image totally up to you!), take quizzes made by users, and share your quiz results with your friends. Learning has never been so fun -- and so stress-free. 

## Screenshots
![Screenshot of My Quizzes page in Mobile View](https://github.com/DohBae/LHL-Midterm-/blob/error-handling/public/images/SS-my-quizzes-mobile.png?raw=true)
![Screenshot of My Quizzes page in Desktop View](https://github.com/DohBae/LHL-Midterm-/blob/error-handling/public/images/SS-my-quizzes-desktop.png?raw=true)


## Dependencies
- Body Parser
- Bootstrap
- Cookie Parser
- Dotenv
- EJS 
- Express
- pg

### Developer Dependencies
- SASS
- Morgan
- Nodemon

## Getting Started
1. Install all dependencies (using the npm install command).
2. Run the development web server using the npm run local command.
3. Visit localhost:8080 in your browser to start creating and taking quizzes!

## Features

### Homepage
The F.A.A.Q. U. homepage features all publically-listed quizzes in the database. They are listed as handy links to the quizzes themselves with a helpful share function that copies the quiz link to your clipboard. 

### Register and Login
Separate web pages allow users to sign up for an account. You are still able to create and take quizzes without logging in, and you can share your results from each individual quiz without an account, too. But, logged-in users gain access to additional features like personalized My Quizzes and My Results pages. Plus, they'll see their names on their results pages. 

### Fancy SASS and Responsive Nav Design
This app makes effective use of SASS for css and design, and is quite responsive to various screen sizes.

### Create a Quiz
The make-quiz page lets the client create and customize a quiz. Clients can add a quiz title, description, and a thumbnail image URL of their choice. Then, the client can add as many multiple choice questions as they'd like, indicating which of the answers are correct. Clients can also choose to make their quiz public--which means it will be listed on the homepage--or private--which means it can only be shared by copying the link to one's clipboard. 

### Take a Quiz
The take-a-quiz page for each individual quiz--indicated by a randomly-generated id tag--lets any client (signed in or not) take a quiz. Once the quiz form is submitted, the app calculates the number of correct responses and returns a customized results page that can be shared with anyone by selecting the Share Results button, which copies the unique results page URL to the client's clipboard.

### My Quizzes and My Results
For logged-in users only -- the nav bar will direct you to a customized My Quizzes page which compiles all quizzes created by the signed-in user. You can also visit the My Results page which compiles all the quizzes taken by the signed-in user, including repeated attempts at the same quiz. This way, logged-in users can track their progress. 

## Known Bugs
Currently, the results calculation does not include unanswered questions in the total question calculation, so cheeky quiz-takes could just not answer any question they weren't sure about and while that wouldn't be included in their correct answers, rendering a potentially-incorrect answer inconsquential to the total. 

## Future Development

### Detailed Results
A future development for this app could be the addition of the quiz body in the results page, with coloured indicators to show which questions were answered correct and which questions were not. In its currently implementation, the number of correct scores function only calculates the number of true booleans returned by the quiz form, so some work--and an additional query--would need to be implemented for this feature.

### Other Question Forms
With some database schema adjustment, a new element could be added to this app which would allow for the selection of different question forms (short answer, true or false, fill in the blank) to allow for more varied quiz options.

## Thank Yous
Our team--Bailee Doherty, Dani Conte, and Dani Spinosa--would like to thank the LHL instructors and mentors--ESPECIALLY THE MENTORS!--for all their help in getting this app finished. It might be more of a motorcycle than a car, but we're so proud of the end result! 
