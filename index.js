const express = require('express');
const cors = require('cors');
const { profile } = require('console');
const app = express();
const port = 3000;

// routes 
    const resume = {
        Personal_Information: [
            {
                Name: 'Ahmad Alnajjar',
                Birthdate: '01/01/2000',
                Gender: 'Male',
                Contact_No: '0123456789',
                Address: '123 Main Street',
            }
        ],
        About_Me: [
            {
                Description: "Hello! I'm Jomar Alberastine, passionate about Web Development. I enjoy creativity, problem-solving, and maintaining a balanced life. Whether designing, creating, or exploring, I thrive on challenges and value collaboration. Excited about making a positive impact, and looking forward to connecting with you!",
            }
        ],
        Skills: [
            {
                Languages: ['html', 'JavaScript', 'React'],
            }
        ],
        Education: [
            {
                Degree: 'Bachelor of Science',
                Institution: 'University of XYZ',
                Year: '2017-2021',
            }
        ],
        Personal_References: [
            {
                Name: 'John Doe',
                Contact_No: '1234567890',
                Relationship: 'Friend',
            }
        ],
        Work_Experience: [
            {
                Company: 'ABC Inc.',
                Job_Title: 'Front-end Developer',
                Start_Date: '01/01/2020',
                End_Date: '01/01/2021',
            }
        ],  

    };
app.use(cors());
app.get('/', (req, res) => res.json(resume));

app.listen(port, () => {console.log(`Server Running on port ${port}!`)});