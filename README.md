Tech Quiz Test Suite

This project is a MERN stack application that provides a tech quiz for users. It includes a backend API to serve random questions and a frontend interface to display the quiz. End-to-end and component tests are created using Cypress to ensure the reliability of the quiz functionality.

Features

	•	Tech quiz with multiple-choice questions
	•	Backend API to fetch random questions
	•	Frontend interface for quiz navigation and scoring
	•	Comprehensive testing with Cypress for reliability

Installation

	1.	Clone the repository:
      git clone <repository-url>
      cd Tech-Quiz-Test-Suite
      
  2.	Install dependencies:
      npm install

  	3.	Setup the environment:
	•	Rename .env.example to .env in the server directory.
	•	Configure MongoDB URI in .env for the database connection.
	4.	Seed the database (optional):
	•	If the Question collection is empty, manually insert question data into MongoDB or use a script to seed the data.

Usage

	1.	Start the development server:
       npm run start:dev
  •	The backend server runs on http://localhost:3001
	•	The frontend runs on http://localhost:3000

 2.	Run Cypress Tests:
	•	To run tests in headless mode:
    npm run test
   	
  •	To open Cypress in interactive mode:
    npm run cypress

API Endpoints

	•	GET /api/questions/random: Fetches a set of random questions for the quiz.

Technologies Used

	•	MongoDB: Database for storing questions
	•	Express: Backend framework
	•	React: Frontend library
	•	Node.js: JavaScript runtime
	•	Cypress: End-to-end and component testing
 
License

This project is licensed under the MIT License.

This README provides an overview, installation steps, usage instructions, and project structure to help others understand and use your project. Let me know if you’d like to add or modify anything!
  
