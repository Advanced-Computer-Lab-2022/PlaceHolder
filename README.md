# LearnMore.com Online Learning Platform

LearnMore.com is an online learning platform developed during the ACL course in the GUC in 2022 . The Main purpose of this website is for students to buy courses and take them online just like udemy and coursera and others. 

## Motivation 

We Created this project to help manage online courses more easily and make it more convenient to use we also wanted easy access for instructors to see how good they are preforming by course ratings and how much students enrolled in their courses. We are trying to fully digitalize learning.

## Badges

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)

## Build Status 🔨
Successful

## Coding Style 📜
standard

## Screenshots 📁

<details>
<summary>HomePage</summary>

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/Untitled.png)
</details>

<details>
<summary>Courses</summary>

   Courses

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/courses.png)

   My Courses

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/mycourses.png)

 Course Dashboard

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/coursedash.png)

 Subtitle Excerises

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/subexcer.png)


</details>

<details>

<summary> Profile </summary>

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/myProfile.png)

</details>

<details>
<summary> Buying a course checkout </summary>

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/Checkout.png)

</details>

<details>
<summary> Manage Discounts Admin </summary>

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/ManageDiscounts.png)

</details>

<details> 

<summary> My Reports </summary>

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/Myreports.png)

</details>

<details>

<summary> Add Course Instructor </summary>

![alt text](https://github.com/Advanced-Computer-Lab-2022/PlaceHolder/blob/main/ReadMeImages/addcourse.png)

</details>

## Tech/FrameWorks Used 📺

1. React
2. Nodejs
3. MongoDB
4. Mongoose
5. Express
6. axios
7. bcryptjs
8. body-parser
9. colors
10. toast
11. ejs
12. git
13. jsonwebtoken
14. nodemailer
15. nodemon
16. pdfkit
17. stripe
18. boostrap
19. alot of react sub libraries can be found in package.json in frontend folder
20. redux

## File Structure

We Have to Main Files : 
1. backend 
2. frontend

backend folder has the models , controllers , routes , server.js

frontend folder has the pages and features containing all the redux states and the store.js , components folder containing styles,  images and much more.. 


## Extra Features

1. Most Popular Courses Carousel
2. Transaction tracking 
3. Transaction History
4. Custom Certficates on completion
5. CSS card design for payments
6. Redux States 


## 


## Installation
Please Install [nodejs] (https://nodejs.org/en/download/) first before using the program.


```bash
npm install -g npm

#to check node version
node -v

#to check npm version
npm -v 
```

Then go cd into backend folder and do npm install 
```bash

cd backend

npm install

```
Wait for it to finish the repeat the same for the front end folder

```bash

cd frontend

npm install
```

You are now ready to use the program !

## Usage

```bash
# go back to main folder

cd ..

# then we run react and backend using concurrently

npm run devv

# your server should now be hosted locally on 8000 for the backend and 3000 for frontend
```


## Functions 

For Guest : 

```bash

A guest can : 

-See Courses and filter them
-Log In
-Sign Up
-Forgot Password

```

For Trainee : 

```bash

A trainee can :

-Accept TOS
-View Courses
-View His/Her Courses
-Open His/Her Course
-Buy a course
-Report a problem within a course
-Watch videos inside the course
-Rate instructor and course
-Solve Excersise for each subtitle inside the course
-Receive a certficate of completion after finishing the course via email or downloading from course dashboard
-Request refund if attended less than 50% of the course
-see his profile
-change his password
-view his wallet and transaction history

```

For Instructor:

```bash

An instructor can : 

-Accept TOS
-View Courses
-View Courses he made
-Add new course
-report a problem
-view his wallet balance and transcations
-view his reported problems
-see his ratings
-see his course ratings
-add discount to the course

```

For Corporate Trainee:

```bash

A Corporate Trainee can do the same as the normal trainee the only difference is :

-can request access to course instead of buying it

```

For Admin :

```bash 

An admin can : 

-View Courses
-Create New instructors,admin,corpTrainee
-Manage Discounts
-Manage Reports
-Manage Course Requests
-Change his/her passowrd

```

## API Reference

<details>
<summary>   
    Courses API
 </summary>
 
 #### Get all Courses

```http
  GET /courses/
```

<details>
<summary>
Response
</summary>


```json
[
    {
        "_id": "638f9b6a2b0e612cf53e819c",
        "title": "Python101",
        "subtitles": [
            {
                "subt": "Introduction",
                "description": "This is the introduction to the python course",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "Is Python an easy course?",
                        "answerA": "yes",
                        "answerB": "maybe",
                        "answerC": "no",
                        "answerD": "definitely yes ",
                        "correctanswer": "D",
                        "_id": "638f9b6a2b0e612cf53e819e"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Introduction",
                        "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                        "videodescription": "Introduction Video",
                        "_id": "638f9b6a2b0e612cf53e819f"
                    }
                ],
                "_id": "638f9b6a2b0e612cf53e819d"
            },
            {
                "subt": "Part 1 : Starting Out",
                "description": "Starting out your coding adventure",
                "totalh": 4,
                "exercises": [
                    {
                        "question": "what type of programming language is python?",
                        "answerA": "embeded",
                        "answerB": "assembly",
                        "answerC": "machine",
                        "answerD": "high level",
                        "correctanswer": "D",
                        "_id": "638f9b6a2b0e612cf53e81a1"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Starting Out",
                        "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                        "videodescription": "",
                        "_id": "638f9b6a2b0e612cf53e81a2"
                    }
                ],
                "_id": "638f9b6a2b0e612cf53e81a0"
            }
        ],
        "subject": "Computer Science",
        "price": 45,
        "summary": "This is a python course",
        "instructorName": "instructor",
        "courseRating": 2.5,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/rfscVS0vtbw",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9c852b0e612cf53e82da"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 0,
                "userMessage": "hai",
                "_id": "63906bebbae30876d9202c2c"
            }
        ],
        "totalratings": 2,
        "totalStars": 5,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:43:38.510Z",
        "updatedAt": "2023-01-05T13:13:17.511Z",
        "__v": 0,
        "NumberOfUsers": 41
    },
    {
        "_id": "638f9c3c2b0e612cf53e81ce",
        "title": "Java 201",
        "subtitles": [
            {
                "subt": "Getting Started",
                "description": "Getting Started ",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "31",
                        "answerB": "32",
                        "answerC": "32",
                        "answerD": "33",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d0"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java",
                        "url": "https://www.youtube.com/embed/eIrMbAQSU34",
                        "videodescription": "java",
                        "_id": "638f9c3c2b0e612cf53e81d1"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81cf"
            },
            {
                "subt": "New Stuff",
                "description": "a",
                "totalh": 3,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "d",
                        "answerB": "v",
                        "answerC": "b",
                        "answerD": "m",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d3"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java 2",
                        "url": "https://www.youtube.com/embed/drQK8ciCAjY",
                        "videodescription": "",
                        "_id": "638f9c3c2b0e612cf53e81d4"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81d2"
            }
        ],
        "subject": "Computer Science",
        "price": 55,
        "summary": "java201",
        "instructorName": "instructor",
        "courseRating": 3,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/eIrMbAQSU34",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9d0a2b0e612cf53e84b7"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 1,
                "userMessage": "tester",
                "_id": "63906df59d8c1edd3a1bf953"
            }
        ],
        "totalratings": 2,
        "totalStars": 6,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:47:08.353Z",
        "updatedAt": "2023-01-05T13:15:58.308Z",
        "__v": 0,
        "NumberOfUsers": 33
    },
    {
        "_id": "639079d0a456f2787802f18a",
        "title": "eval",
        "subtitles": [
            {
                "subt": "test",
                "description": "test",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "test",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "D",
                        "_id": "639079d0a456f2787802f18c"
                    },
                    {
                        "question": "test2",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "",
                        "_id": "639079d0a456f2787802f18d"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "test",
                        "_id": "639079d0a456f2787802f18e"
                    }
                ],
                "_id": "639079d0a456f2787802f18b"
            }
        ],
        "subject": "Kids and gadgets",
        "price": 12,
        "summary": "test",
        "instructorName": "instructor",
        "courseRating": 4,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 4,
                "userMessage": "it was a good course",
                "_id": "63907a82a456f2787802f38f"
            }
        ],
        "totalratings": 1,
        "totalStars": 4,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-07T11:32:32.350Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 3
    },
    {
        "_id": "6398cb89d3a6cad42d2a3a89",
        "title": "subtitle No Test",
        "subtitles": [
            {
                "subt": "1",
                "description": "aa",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "a",
                        "answerB": "a",
                        "answerC": "a",
                        "answerD": "a",
                        "correctanswer": "B",
                        "_id": "6398cb89d3a6cad42d2a3a8b"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "a",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "a",
                        "_id": "6398cb89d3a6cad42d2a3a8c"
                    }
                ],
                "_id": "6398cb89d3a6cad42d2a3a8a"
            },
            {
                "subt": "2",
                "description": "2",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "a",
                        "answerB": "a",
                        "answerC": "a",
                        "answerD": "a",
                        "correctanswer": "C",
                        "_id": "6398cb89d3a6cad42d2a3a8e"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "a",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "a",
                        "_id": "6398cb89d3a6cad42d2a3a8f"
                    }
                ],
                "_id": "6398cb89d3a6cad42d2a3a8d"
            }
        ],
        "subject": "Kids and gadgets",
        "price": 12,
        "summary": "12",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-13T18:59:21.274Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 3
    },
    {
        "_id": "6398cbe9d3a6cad42d2a3ac9",
        "title": "adasda",
        "subtitles": [
            {
                "subt": "1",
                "description": "a",
                "totalh": 32,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "ad",
                        "answerB": "as",
                        "answerC": "das",
                        "answerD": "das",
                        "correctanswer": "B",
                        "_id": "6398cbe9d3a6cad42d2a3acb"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "asd",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "asdsad",
                        "_id": "6398cbe9d3a6cad42d2a3acc"
                    }
                ],
                "_id": "6398cbe9d3a6cad42d2a3aca"
            },
            {
                "subt": "12",
                "description": "asdsa",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "dasd",
                        "answerA": "asd",
                        "answerB": "asd",
                        "answerC": "dsad",
                        "answerD": "asd",
                        "correctanswer": "B",
                        "_id": "6398cbe9d3a6cad42d2a3ace"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "asd",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "asdada",
                        "_id": "6398cbe9d3a6cad42d2a3acf"
                    }
                ],
                "_id": "6398cbe9d3a6cad42d2a3acd"
            }
        ],
        "subject": "Self-awareness (mindfulness, meditation, etc.)",
        "price": 12,
        "summary": "12",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-13T19:00:57.627Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 0
    },
    {
        "_id": "63aad7e4921a9f7d5ddf78d5",
        "title": "FeedBack Test",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "test",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "",
                        "_id": "63aad7e4921a9f7d5ddf78d7"
                    },
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78d8"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "1",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78d9"
                    },
                    {
                        "videotitle": "32",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78da"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78d6"
            },
            {
                "subt": "yahaya",
                "description": "11",
                "totalh": 12,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "3",
                        "answerB": "32",
                        "answerC": "1",
                        "answerD": "13",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78dc"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78dd"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78db"
            },
            {
                "subt": "Firing Range",
                "description": "321",
                "totalh": 123,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "123",
                        "answerA": "13",
                        "answerB": "1",
                        "answerC": "313",
                        "answerD": "123",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78df"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "12",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e0"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78de"
            },
            {
                "subt": "Firing Range1",
                "description": "132",
                "totalh": 32,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "3123",
                        "answerA": "1321",
                        "answerB": "313",
                        "answerC": "123",
                        "answerD": "1321",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78e2"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "aa",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e3"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78e1"
            }
        ],
        "subject": "Self-awareness (mindfulness, meditation, etc.)",
        "price": 60,
        "summary": "132312",
        "instructorName": "instructor",
        "courseRating": 5,
        "totalHours": 168,
        "preview": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 5,
                "userMessage": "Very Good Course",
                "_id": "63adea8cb85a9eb8d4e0a2a6"
            }
        ],
        "totalratings": 1,
        "totalStars": 5,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 7,
        "createdAt": "2022-12-27T11:32:52.833Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0
    },
    {
        "_id": "63adf32285948646cdbca12c",
        "title": "OneVideoTester",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "B",
                        "_id": "63adf32285948646cdbca12e"
                    },
                    {
                        "question": "a?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "C",
                        "_id": "63adf32285948646cdbca12f"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 1",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca130"
                    }
                ],
                "_id": "63adf32285948646cdbca12d"
            },
            {
                "subt": "Video Test 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "C",
                        "_id": "63adf32385948646cdbca132"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 2",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca133"
                    }
                ],
                "_id": "63adf32385948646cdbca131"
            },
            {
                "subt": "Video Test 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 3,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12?",
                        "answerA": "123",
                        "answerB": "312",
                        "answerC": "3213",
                        "answerD": "1231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca135"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "3123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca136"
                    }
                ],
                "_id": "63adf32385948646cdbca134"
            },
            {
                "subt": "Last Test1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 5,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "31?",
                        "answerA": "12312",
                        "answerB": "3123",
                        "answerC": "1231",
                        "answerD": "31231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca138"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca139"
                    }
                ],
                "_id": "63adf32385948646cdbca137"
            }
        ],
        "subject": "Leadership",
        "price": 41,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 11,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/jpeg;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 3,
        "createdAt": "2022-12-29T20:05:55.008Z",
        "updatedAt": "2023-01-05T13:18:59.798Z",
        "__v": 0
    },
    {
        "_id": "63b049f8f2b2332e67676592",
        "title": "Quiz Test",
        "subtitles": [
            {
                "subt": "sub 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "sub 1 ?",
                        "answerA": "sub 1 yes",
                        "answerB": "sub 1 no",
                        "answerC": "sub 1 maybe",
                        "answerD": "sub 1 definetly",
                        "correctanswer": "D",
                        "_id": "63b049f8f2b2332e67676594"
                    },
                    {
                        "question": "sub 2 ?",
                        "answerA": "sub 2 yes",
                        "answerB": "sub2 maybe",
                        "answerC": "sub2 no",
                        "answerD": "sub2 def",
                        "correctanswer": "B",
                        "_id": "63b049f8f2b2332e67676595"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63b049f8f2b2332e67676596"
                    }
                ],
                "_id": "63b049f8f2b2332e67676593"
            },
            {
                "subt": "sub 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "sub 2?",
                        "answerA": "sub 2 yes ",
                        "answerB": "sub 2 no",
                        "answerC": "sub 2 maybe yes",
                        "answerD": "sub 2 maybe no",
                        "correctanswer": "C",
                        "_id": "63b049f8f2b2332e67676598"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
                        "_id": "63b049f8f2b2332e67676599"
                    }
                ],
                "_id": "63b049f8f2b2332e67676597"
            }
        ],
        "subject": "Data science",
        "price": 31,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 3,
        "preview": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 2,
        "createdAt": "2022-12-31T14:40:56.577Z",
        "updatedAt": "2023-01-05T13:18:19.531Z",
        "__v": 0
    }
]
```

</details>


#### Create Course

```http
  POST /courses/new
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `title`       | `string` | **Required**. Title of the course       |
| `subtitles`     | `array` |  Sections/Subtitles of the course     |
| `subject` | `string` | **Required**. Subject of the course |
| `price`       | `number` | **Required**. Price of the course       |
| `summary`       | `string` |  Summary of the course       |
| `instructorName`     | `string` |  **Required**. Instructor of the course     |
| `courseRating` | `number` | Rating of the course default set to 0 |
| `totalHours`       | `number` | Default calculated by the total hours of each subtitle combined  |
| `preview`       | `url` | **Required**. Preview Video for the course       |
| `thumbnail`     | `base64File` |  Course Thumbnail     |
| `ratings` | `array` | Ratings array default empty |
| `totalratings`       | `number` | Default 0 ignore |
| `totalStars`       | `number` |  Default 0 ignore  |
| `amountOfDiscount`       | `number` |Discount for the course Default 0  |
| `ExpiryDate`     | `date` |  Expiry Date for the discount Default Empty/null     |
| `NumberOfUsers` | `number` | Number of students enrolled default 0 |



<details>
<summary>
Response
</summary>


```json
{
    "title": "API refrences",
    "subtitles": [],
    "subject": "Computer Science",
    "price": 1233,
    "summary": "adada",
    "instructorName": "instructor",
    "courseRating": 0,
    "totalHours": 0,
    "preview": "",
    "thumbnail": "",
    "ratings": [],
    "totalratings": 0,
    "totalStars": 0,
    "amountOfDiscount": 0,
    "ExpiryDate": "",
    "NumberOfUsers": 0
}
```




 </details>
 
 #### View Course Page

```http
  POST /courses/view/:title
```
| Headers         | Type     | Description                                   |
| :-------------- | :------- | :-------------------------------------------- |
| `title` | `string` | **Required**. Title of the course |


<details>
<summary>
Response
</summary>


```json
{
    "_id": "638f9b6a2b0e612cf53e819c",
    "title": "Python101",
    "subtitles": [
        {
            "subt": "Introduction",
            "description": "This is the introduction to the python course",
            "totalh": 1,
            "exercises": [
                {
                    "question": "Is Python an easy course?",
                    "answerA": "yes",
                    "answerB": "maybe",
                    "answerC": "no",
                    "answerD": "definitely yes ",
                    "correctanswer": "D",
                    "_id": "638f9b6a2b0e612cf53e819e"
                }
            ],
            "videos": [
                {
                    "videotitle": "Introduction",
                    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                    "videodescription": "Introduction Video",
                    "_id": "638f9b6a2b0e612cf53e819f"
                }
            ],
            "_id": "638f9b6a2b0e612cf53e819d"
        },
        {
            "subt": "Part 1 : Starting Out",
            "description": "Starting out your coding adventure",
            "totalh": 4,
            "exercises": [
                {
                    "question": "what type of programming language is python?",
                    "answerA": "embeded",
                    "answerB": "assembly",
                    "answerC": "machine",
                    "answerD": "high level",
                    "correctanswer": "D",
                    "_id": "638f9b6a2b0e612cf53e81a1"
                }
            ],
            "videos": [
                {
                    "videotitle": "Starting Out",
                    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                    "videodescription": "",
                    "_id": "638f9b6a2b0e612cf53e81a2"
                }
            ],
            "_id": "638f9b6a2b0e612cf53e81a0"
        }
    ],
    "subject": "Computer Science",
    "price": 45,
    "summary": "This is a python course",
    "instructorName": "instructor",
    "courseRating": 2.5,
    "totalHours": null,
    "preview": "https://www.youtube.com/embed/rfscVS0vtbw",
    "thumbnail": "data:image/png;base64,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",
    "ratings": [
        {
            "userwhorated": "trainee",
            "userRate": 0,
            "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
            "_id": "638f9c852b0e612cf53e82da"
        },
        {
            "userwhorated": "trainee2",
            "userRate": 0,
            "userMessage": "hai",
            "_id": "63906bebbae30876d9202c2c"
        }
    ],
    "totalratings": 2,
    "totalStars": 5,
    "amountOfDiscount": 90,
    "ExpiryDate": "2023-01-06T00:00:00.000Z",
    "createdAt": "2022-12-06T19:43:38.510Z",
    "updatedAt": "2023-01-05T13:13:17.511Z",
    "__v": 0,
    "NumberOfUsers": 41
}
```




 </details>
 
 #### View Courses Instructor (courses created by the instructor)

```http
  POST /courses/getinscourses
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username of the instructor       |




<details>
<summary>
Response
</summary>


```json
[
    {
        "_id": "638f9b6a2b0e612cf53e819c",
        "title": "Python101",
        "subtitles": [
            {
                "subt": "Introduction",
                "description": "This is the introduction to the python course",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "Is Python an easy course?",
                        "answerA": "yes",
                        "answerB": "maybe",
                        "answerC": "no",
                        "answerD": "definitely yes ",
                        "correctanswer": "D",
                        "_id": "638f9b6a2b0e612cf53e819e"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Introduction",
                        "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                        "videodescription": "Introduction Video",
                        "_id": "638f9b6a2b0e612cf53e819f"
                    }
                ],
                "_id": "638f9b6a2b0e612cf53e819d"
            },
            {
                "subt": "Part 1 : Starting Out",
                "description": "Starting out your coding adventure",
                "totalh": 4,
                "exercises": [
                    {
                        "question": "what type of programming language is python?",
                        "answerA": "embeded",
                        "answerB": "assembly",
                        "answerC": "machine",
                        "answerD": "high level",
                        "correctanswer": "D",
                        "_id": "638f9b6a2b0e612cf53e81a1"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Starting Out",
                        "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                        "videodescription": "",
                        "_id": "638f9b6a2b0e612cf53e81a2"
                    }
                ],
                "_id": "638f9b6a2b0e612cf53e81a0"
            }
        ],
        "subject": "Computer Science",
        "price": 45,
        "summary": "This is a python course",
        "instructorName": "instructor",
        "courseRating": 2.5,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/rfscVS0vtbw",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9c852b0e612cf53e82da"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 0,
                "userMessage": "hai",
                "_id": "63906bebbae30876d9202c2c"
            }
        ],
        "totalratings": 2,
        "totalStars": 5,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:43:38.510Z",
        "updatedAt": "2023-01-05T13:13:17.511Z",
        "__v": 0,
        "NumberOfUsers": 41
    },
    {
        "_id": "638f9c3c2b0e612cf53e81ce",
        "title": "Java 201",
        "subtitles": [
            {
                "subt": "Getting Started",
                "description": "Getting Started ",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "31",
                        "answerB": "32",
                        "answerC": "32",
                        "answerD": "33",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d0"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java",
                        "url": "https://www.youtube.com/embed/eIrMbAQSU34",
                        "videodescription": "java",
                        "_id": "638f9c3c2b0e612cf53e81d1"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81cf"
            },
            {
                "subt": "New Stuff",
                "description": "a",
                "totalh": 3,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "d",
                        "answerB": "v",
                        "answerC": "b",
                        "answerD": "m",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d3"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java 2",
                        "url": "https://www.youtube.com/embed/drQK8ciCAjY",
                        "videodescription": "",
                        "_id": "638f9c3c2b0e612cf53e81d4"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81d2"
            }
        ],
        "subject": "Computer Science",
        "price": 55,
        "summary": "java201",
        "instructorName": "instructor",
        "courseRating": 3,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/eIrMbAQSU34",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9d0a2b0e612cf53e84b7"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 1,
                "userMessage": "tester",
                "_id": "63906df59d8c1edd3a1bf953"
            }
        ],
        "totalratings": 2,
        "totalStars": 6,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:47:08.353Z",
        "updatedAt": "2023-01-05T13:15:58.308Z",
        "__v": 0,
        "NumberOfUsers": 33
    },
    {
        "_id": "639079d0a456f2787802f18a",
        "title": "eval",
        "subtitles": [
            {
                "subt": "test",
                "description": "test",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "test",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "D",
                        "_id": "639079d0a456f2787802f18c"
                    },
                    {
                        "question": "test2",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "",
                        "_id": "639079d0a456f2787802f18d"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "test",
                        "_id": "639079d0a456f2787802f18e"
                    }
                ],
                "_id": "639079d0a456f2787802f18b"
            }
        ],
        "subject": "Kids and gadgets",
        "price": 12,
        "summary": "test",
        "instructorName": "instructor",
        "courseRating": 4,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 4,
                "userMessage": "it was a good course",
                "_id": "63907a82a456f2787802f38f"
            }
        ],
        "totalratings": 1,
        "totalStars": 4,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-07T11:32:32.350Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 3
    },
    {
        "_id": "6398cb89d3a6cad42d2a3a89",
        "title": "subtitle No Test",
        "subtitles": [
            {
                "subt": "1",
                "description": "aa",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "a",
                        "answerB": "a",
                        "answerC": "a",
                        "answerD": "a",
                        "correctanswer": "B",
                        "_id": "6398cb89d3a6cad42d2a3a8b"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "a",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "a",
                        "_id": "6398cb89d3a6cad42d2a3a8c"
                    }
                ],
                "_id": "6398cb89d3a6cad42d2a3a8a"
            },
            {
                "subt": "2",
                "description": "2",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "a",
                        "answerB": "a",
                        "answerC": "a",
                        "answerD": "a",
                        "correctanswer": "C",
                        "_id": "6398cb89d3a6cad42d2a3a8e"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "a",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "a",
                        "_id": "6398cb89d3a6cad42d2a3a8f"
                    }
                ],
                "_id": "6398cb89d3a6cad42d2a3a8d"
            }
        ],
        "subject": "Kids and gadgets",
        "price": 12,
        "summary": "12",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACxCAMAAADOHZloAAAA0lBMVEX///82caP/00r/yzv/1lL/zkJZWVn/1U/R0dHi4+RGeqfa2tpbW1spa6D/1EOhtswZZJzz9fb/99+en5///fZnZ2hxc3X/6bKvr6//00iCgoLZ3+T/zDZfX1///fdSUlHm6/HK2OT/0FZVgqx3fID/5J3/8Mn/56f/yCf902dwlLj/0DdrbGzFyMu5ydmQp75hirKGobycts53k68AWpf/346/ztz/yBn/2XT/7sR6nb6Tq8L98tX/7Liltcb/2F7/4ISfpaqJjpG8vLyTlJVFRUREjEuEAAAGA0lEQVR4nO2cfVfaPBiHi4VIpTCyUoTaWBRfGBSnzx5fNuc2kH3/r7QkFIGSIuwcjEt/1x+jZSnn7nXu3Hlpj5YFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8NbQTgLVHck7o3P1ud89qFbrnGq10L2+uerojumdQD8cCCVLcFHXR7oDew8cFVJmZoLqP3SHpp9OVaaKylD9s+7gtNMXXh6vbpR67nRHp5s6zxxRYe7qCj1d3dFpxqkXqjfy6FqRPfWcV+YTbuc/eaTqW9UrzeFphtsp9OXRgWrc+qA5PM0IO9LBZ1VZhh0h4eCLetIDO1MNKjewc6IayGEn4eT/+hKwswRdIjVy5d5OCtjh3N10D5Ss9KzL0ym3H3XH/FbcFeoZg9RqVT4PbUl4f6k77LfhZu04lWHHtnu50LO5nGU79n0OOtf6Gc46O+En3bHvnu7mclJ27J7xybNN6qzYOdcd/a5RrsUz7VxZt3M5Oehaqm2cTOon1sOCHbt3rDv83UK3SZ1CgR7vlRbtfNcd/2452apjPVpfwyU7hk95rrawUz2wrFN70U74S3f8u+VxczvVLrUuw9KiHbuoO/7d8i3jsfAq9Ucq+tWyHVt3/Lulr3ouU+g/fkgjHoNe9kopO2FD9w3slL6iutypX9i5+CQyJ1920rkjn4R+fzpMcf5QCu1S3uyk6454DeXpZ60tqM0JZ2ryZSc1ZonM+VXbLwr29+aUFshRVU7Pd6h1XisWN7Zzqjv+3bI8V67+sC5mcjaxE97qjn+3LK+zqh3r0/4WdnpPuuPfMctrdMt6SZ1N7NybXZRT+zvX1sdt7Ji/v7O4N1jd0k7vUHf0O2ex7PS3zB3TO5Zl/aj+be6YPmJJDv7WTs/81LGsztzOl23s9L7qjvxN6HSTx+iK3GlPWbUT3ptfkhPuvnUlN2k77aw8ytE7GAuk7Awax40px4LGC7rj1MOKnWUMf371Gum6MxjUBjPC3Lyzk8X6MSuEHaUdG3asLDvt9sNpCDtqO+0HXo0vQthR2Wm35QB+HsKOys50G4cnT2j6XuBrqOwU5TTnMCyZ/kbKq9y2V+tOTXSoxn7JNn4v8DUaxf0VO3uDX4eXezZSh1ee4p5ivhOGJTv3VUfQSB6GpubKYTGPq3IFFw/t2t7+wnynHYZFJM4Ljafbn7XB9A2DwaD4cIi8SfHx4umSc3iR930LAAAA4N+HDh3dIbxfKlFU0R3D+6VCCOxkAjtKKqPpB+woOIvO5CfsqAgY7GQDO+vIuR2nFfh+PE5uvTw7sFqjIT8dNVk8Gj0nduhw5HkvkioT3/fH5Zdf4o19vzky6I8w03EU+cHYJ8QTp0fzOV8c8W9ahPmMkbGw45a9iOOSybSBJ66MoyiY6hjGv1kwjolrTo45rhvIm/HciCeIdTTvP01X+hI9i1Jhx2fR5Ig6Y0Za8grCeHJZQ+Y2xemYxOLUenaZ++a3sSPKhCSrp5gxmmVHUCEsSRJf3n45ItM+VYlcbov6bmt6ncfIvLP928ztPLtkuN7O7H9GzHXE982kYSC8zu3wnzDPjkPYZDM7Q5fb4c0TG/yce53bcUy0Q5nQsJEdwu2UiTtMGnJRI+Pt+Mzfwg5PoJkdSphnvJ14UzvlPNphLN7CDv/nOWkoS5DpdiIWLA0463sWl+klDXlVLptuh3eVlrDz0mHW2+Hf+0lDj/nUdDtNOYvhGZSsE+Z2Ynma6lniysQjWZ4NGmWHzVYSRO4BnjFXfjqTpOuMXFdOkdN2rLHrS7GBK5LIVDtx5I4nfO04ll/Q2HX5YtKP+LJK2uG3Hbcqi88khkm+jQmZtDwWNalsRmZ2IoPsEGd4xlfe8WwEskZ+FJGgRYNpz7Ko5//m9do5C5I+WAmSI3lhc3ohDYLkF3hDUxbpSd1RbckEs66yDoP2chTMq/IKzU3smE22HRrPxqT8km2n4jKzu80GZNpx/NkGaY5R2qFOeUKiQEM474xyFK3YoYxEkZ/7oiNwvNXc8SbPeFUHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4N/gD74FnECCdhMYAAAAAElFTkSuQmCC",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-13T18:59:21.274Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 3
    },
    {
        "_id": "6398cbe9d3a6cad42d2a3ac9",
        "title": "adasda",
        "subtitles": [
            {
                "subt": "1",
                "description": "a",
                "totalh": 32,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "ad",
                        "answerB": "as",
                        "answerC": "das",
                        "answerD": "das",
                        "correctanswer": "B",
                        "_id": "6398cbe9d3a6cad42d2a3acb"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "asd",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "asdsad",
                        "_id": "6398cbe9d3a6cad42d2a3acc"
                    }
                ],
                "_id": "6398cbe9d3a6cad42d2a3aca"
            },
            {
                "subt": "12",
                "description": "asdsa",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "dasd",
                        "answerA": "asd",
                        "answerB": "asd",
                        "answerC": "dsad",
                        "answerD": "asd",
                        "correctanswer": "B",
                        "_id": "6398cbe9d3a6cad42d2a3ace"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "asd",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "asdada",
                        "_id": "6398cbe9d3a6cad42d2a3acf"
                    }
                ],
                "_id": "6398cbe9d3a6cad42d2a3acd"
            }
        ],
        "subject": "Self-awareness (mindfulness, meditation, etc.)",
        "price": 12,
        "summary": "12",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-13T19:00:57.627Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 0
    },
    {
        "_id": "63aad7e4921a9f7d5ddf78d5",
        "title": "FeedBack Test",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "test",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "",
                        "_id": "63aad7e4921a9f7d5ddf78d7"
                    },
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78d8"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "1",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78d9"
                    },
                    {
                        "videotitle": "32",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78da"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78d6"
            },
            {
                "subt": "yahaya",
                "description": "11",
                "totalh": 12,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "3",
                        "answerB": "32",
                        "answerC": "1",
                        "answerD": "13",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78dc"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78dd"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78db"
            },
            {
                "subt": "Firing Range",
                "description": "321",
                "totalh": 123,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "123",
                        "answerA": "13",
                        "answerB": "1",
                        "answerC": "313",
                        "answerD": "123",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78df"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "12",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e0"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78de"
            },
            {
                "subt": "Firing Range1",
                "description": "132",
                "totalh": 32,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "3123",
                        "answerA": "1321",
                        "answerB": "313",
                        "answerC": "123",
                        "answerD": "1321",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78e2"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "aa",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e3"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78e1"
            }
        ],
        "subject": "Self-awareness (mindfulness, meditation, etc.)",
        "price": 60,
        "summary": "132312",
        "instructorName": "instructor",
        "courseRating": 5,
        "totalHours": 168,
        "preview": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 5,
                "userMessage": "Very Good Course",
                "_id": "63adea8cb85a9eb8d4e0a2a6"
            }
        ],
        "totalratings": 1,
        "totalStars": 5,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 7,
        "createdAt": "2022-12-27T11:32:52.833Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0
    },
    {
        "_id": "63adf32285948646cdbca12c",
        "title": "OneVideoTester",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "B",
                        "_id": "63adf32285948646cdbca12e"
                    },
                    {
                        "question": "a?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "C",
                        "_id": "63adf32285948646cdbca12f"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 1",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca130"
                    }
                ],
                "_id": "63adf32285948646cdbca12d"
            },
            {
                "subt": "Video Test 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "C",
                        "_id": "63adf32385948646cdbca132"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 2",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca133"
                    }
                ],
                "_id": "63adf32385948646cdbca131"
            },
            {
                "subt": "Video Test 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 3,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12?",
                        "answerA": "123",
                        "answerB": "312",
                        "answerC": "3213",
                        "answerD": "1231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca135"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "3123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca136"
                    }
                ],
                "_id": "63adf32385948646cdbca134"
            },
            {
                "subt": "Last Test1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 5,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "31?",
                        "answerA": "12312",
                        "answerB": "3123",
                        "answerC": "1231",
                        "answerD": "31231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca138"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca139"
                    }
                ],
                "_id": "63adf32385948646cdbca137"
            }
        ],
        "subject": "Leadership",
        "price": 41,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 11,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/jpeg;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 3,
        "createdAt": "2022-12-29T20:05:55.008Z",
        "updatedAt": "2023-01-05T13:18:59.798Z",
        "__v": 0
    },
    {
        "_id": "63b049f8f2b2332e67676592",
        "title": "Quiz Test",
        "subtitles": [
            {
                "subt": "sub 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "sub 1 ?",
                        "answerA": "sub 1 yes",
                        "answerB": "sub 1 no",
                        "answerC": "sub 1 maybe",
                        "answerD": "sub 1 definetly",
                        "correctanswer": "D",
                        "_id": "63b049f8f2b2332e67676594"
                    },
                    {
                        "question": "sub 2 ?",
                        "answerA": "sub 2 yes",
                        "answerB": "sub2 maybe",
                        "answerC": "sub2 no",
                        "answerD": "sub2 def",
                        "correctanswer": "B",
                        "_id": "63b049f8f2b2332e67676595"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63b049f8f2b2332e67676596"
                    }
                ],
                "_id": "63b049f8f2b2332e67676593"
            },
            {
                "subt": "sub 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "sub 2?",
                        "answerA": "sub 2 yes ",
                        "answerB": "sub 2 no",
                        "answerC": "sub 2 maybe yes",
                        "answerD": "sub 2 maybe no",
                        "correctanswer": "C",
                        "_id": "63b049f8f2b2332e67676598"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
                        "_id": "63b049f8f2b2332e67676599"
                    }
                ],
                "_id": "63b049f8f2b2332e67676597"
            }
        ],
        "subject": "Data science",
        "price": 31,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 3,
        "preview": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 2,
        "createdAt": "2022-12-31T14:40:56.577Z",
        "updatedAt": "2023-01-05T13:18:19.531Z",
        "__v": 0
    },
    {
        "_id": "63b80fa43d82f33ad64a5bbf",
        "title": "API refrences",
        "subtitles": [],
        "subject": "Computer Science",
        "price": 1233,
        "summary": "adada",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 0,
        "preview": "",
        "thumbnail": "",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 0,
        "ExpiryDate": null,
        "NumberOfUsers": 0,
        "createdAt": "2023-01-06T12:10:12.131Z",
        "updatedAt": "2023-01-06T12:10:12.131Z",
        "__v": 0
    }
]
```




 </details>
 
 
 #### View Courses Trainee (courses that the trainee is enrolled in)

```http
  POST /courses/gettraineecourses
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. Username of the trainee     |




<details>
<summary>
Response
</summary>


```json
[
    {
        "_id": "638f9c3c2b0e612cf53e81ce",
        "title": "Java 201",
        "subtitles": [
            {
                "subt": "Getting Started",
                "description": "Getting Started ",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "31",
                        "answerB": "32",
                        "answerC": "32",
                        "answerD": "33",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d0"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java",
                        "url": "https://www.youtube.com/embed/eIrMbAQSU34",
                        "videodescription": "java",
                        "_id": "638f9c3c2b0e612cf53e81d1"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81cf"
            },
            {
                "subt": "New Stuff",
                "description": "a",
                "totalh": 3,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "d",
                        "answerB": "v",
                        "answerC": "b",
                        "answerD": "m",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d3"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java 2",
                        "url": "https://www.youtube.com/embed/drQK8ciCAjY",
                        "videodescription": "",
                        "_id": "638f9c3c2b0e612cf53e81d4"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81d2"
            }
        ],
        "subject": "Computer Science",
        "price": 55,
        "summary": "java201",
        "instructorName": "instructor",
        "courseRating": 3,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/eIrMbAQSU34",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9d0a2b0e612cf53e84b7"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 1,
                "userMessage": "tester",
                "_id": "63906df59d8c1edd3a1bf953"
            }
        ],
        "totalratings": 2,
        "totalStars": 6,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:47:08.353Z",
        "updatedAt": "2023-01-05T13:15:58.308Z",
        "__v": 0,
        "NumberOfUsers": 33
    },
    {
        "_id": "63aad7e4921a9f7d5ddf78d5",
        "title": "FeedBack Test",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "test",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "",
                        "_id": "63aad7e4921a9f7d5ddf78d7"
                    },
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78d8"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "1",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78d9"
                    },
                    {
                        "videotitle": "32",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78da"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78d6"
            },
            {
                "subt": "yahaya",
                "description": "11",
                "totalh": 12,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "3",
                        "answerB": "32",
                        "answerC": "1",
                        "answerD": "13",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78dc"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78dd"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78db"
            },
            {
                "subt": "Firing Range",
                "description": "321",
                "totalh": 123,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "123",
                        "answerA": "13",
                        "answerB": "1",
                        "answerC": "313",
                        "answerD": "123",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78df"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "12",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e0"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78de"
            },
            {
                "subt": "Firing Range1",
                "description": "132",
                "totalh": 32,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "3123",
                        "answerA": "1321",
                        "answerB": "313",
                        "answerC": "123",
                        "answerD": "1321",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78e2"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "aa",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e3"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78e1"
            }
        ],
        "subject": "Self-awareness (mindfulness, meditation, etc.)",
        "price": 60,
        "summary": "132312",
        "instructorName": "instructor",
        "courseRating": 5,
        "totalHours": 168,
        "preview": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 5,
                "userMessage": "Very Good Course",
                "_id": "63adea8cb85a9eb8d4e0a2a6"
            }
        ],
        "totalratings": 1,
        "totalStars": 5,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 7,
        "createdAt": "2022-12-27T11:32:52.833Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0
    },
    {
        "_id": "63adf32285948646cdbca12c",
        "title": "OneVideoTester",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "B",
                        "_id": "63adf32285948646cdbca12e"
                    },
                    {
                        "question": "a?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "C",
                        "_id": "63adf32285948646cdbca12f"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 1",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca130"
                    }
                ],
                "_id": "63adf32285948646cdbca12d"
            },
            {
                "subt": "Video Test 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "C",
                        "_id": "63adf32385948646cdbca132"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 2",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca133"
                    }
                ],
                "_id": "63adf32385948646cdbca131"
            },
            {
                "subt": "Video Test 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 3,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12?",
                        "answerA": "123",
                        "answerB": "312",
                        "answerC": "3213",
                        "answerD": "1231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca135"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "3123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca136"
                    }
                ],
                "_id": "63adf32385948646cdbca134"
            },
            {
                "subt": "Last Test1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 5,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "31?",
                        "answerA": "12312",
                        "answerB": "3123",
                        "answerC": "1231",
                        "answerD": "31231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca138"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca139"
                    }
                ],
                "_id": "63adf32385948646cdbca137"
            }
        ],
        "subject": "Leadership",
        "price": 41,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 11,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/jpeg;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 3,
        "createdAt": "2022-12-29T20:05:55.008Z",
        "updatedAt": "2023-01-05T13:18:59.798Z",
        "__v": 0
    },
    {
        "_id": "63b049f8f2b2332e67676592",
        "title": "Quiz Test",
        "subtitles": [
            {
                "subt": "sub 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "sub 1 ?",
                        "answerA": "sub 1 yes",
                        "answerB": "sub 1 no",
                        "answerC": "sub 1 maybe",
                        "answerD": "sub 1 definetly",
                        "correctanswer": "D",
                        "_id": "63b049f8f2b2332e67676594"
                    },
                    {
                        "question": "sub 2 ?",
                        "answerA": "sub 2 yes",
                        "answerB": "sub2 maybe",
                        "answerC": "sub2 no",
                        "answerD": "sub2 def",
                        "correctanswer": "B",
                        "_id": "63b049f8f2b2332e67676595"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63b049f8f2b2332e67676596"
                    }
                ],
                "_id": "63b049f8f2b2332e67676593"
            },
            {
                "subt": "sub 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "sub 2?",
                        "answerA": "sub 2 yes ",
                        "answerB": "sub 2 no",
                        "answerC": "sub 2 maybe yes",
                        "answerD": "sub 2 maybe no",
                        "correctanswer": "C",
                        "_id": "63b049f8f2b2332e67676598"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
                        "_id": "63b049f8f2b2332e67676599"
                    }
                ],
                "_id": "63b049f8f2b2332e67676597"
            }
        ],
        "subject": "Data science",
        "price": 31,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 3,
        "preview": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 2,
        "createdAt": "2022-12-31T14:40:56.577Z",
        "updatedAt": "2023-01-05T13:18:19.531Z",
        "__v": 0
    }
]
```




 </details>
 
 
 #### Add Discount

```http
  POST /courses/adddiscount
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `title`       | `string` | **Required**. Title of the course       |
| `amountOfDiscount`       | `number` |Discount for the course |
| `ExpiryDate`     | `date` |  Expiry Date for the discount expiration    |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "638f9b6a2b0e612cf53e819c",
    "title": "Python101",
    "subtitles": [
        {
            "subt": "Introduction",
            "description": "This is the introduction to the python course",
            "totalh": 1,
            "exercises": [
                {
                    "question": "Is Python an easy course?",
                    "answerA": "yes",
                    "answerB": "maybe",
                    "answerC": "no",
                    "answerD": "definitely yes ",
                    "correctanswer": "D",
                    "_id": "638f9b6a2b0e612cf53e819e"
                }
            ],
            "videos": [
                {
                    "videotitle": "Introduction",
                    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                    "videodescription": "Introduction Video",
                    "_id": "638f9b6a2b0e612cf53e819f"
                }
            ],
            "_id": "638f9b6a2b0e612cf53e819d"
        },
        {
            "subt": "Part 1 : Starting Out",
            "description": "Starting out your coding adventure",
            "totalh": 4,
            "exercises": [
                {
                    "question": "what type of programming language is python?",
                    "answerA": "embeded",
                    "answerB": "assembly",
                    "answerC": "machine",
                    "answerD": "high level",
                    "correctanswer": "D",
                    "_id": "638f9b6a2b0e612cf53e81a1"
                }
            ],
            "videos": [
                {
                    "videotitle": "Starting Out",
                    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                    "videodescription": "",
                    "_id": "638f9b6a2b0e612cf53e81a2"
                }
            ],
            "_id": "638f9b6a2b0e612cf53e81a0"
        }
    ],
    "subject": "Computer Science",
    "price": 45,
    "summary": "This is a python course",
    "instructorName": "instructor",
    "courseRating": 2.5,
    "totalHours": null,
    "preview": "https://www.youtube.com/embed/rfscVS0vtbw",
    "thumbnail": "data:image/png;base64,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",
    "ratings": [
        {
            "userwhorated": "trainee",
            "userRate": 0,
            "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
            "_id": "638f9c852b0e612cf53e82da"
        },
        {
            "userwhorated": "trainee2",
            "userRate": 0,
            "userMessage": "hai",
            "_id": "63906bebbae30876d9202c2c"
        }
    ],
    "totalratings": 2,
    "totalStars": 5,
    "amountOfDiscount": 20,
    "ExpiryDate": "2023-01-06T00:00:00.000Z",
    "createdAt": "2022-12-06T19:43:38.510Z",
    "updatedAt": "2023-01-05T13:13:17.511Z",
    "__v": 0,
    "NumberOfUsers": 41
}
```




 </details>
 
 
 
 #### Add Multiple Discounts (Admin Use)

```http
  POST /courses/adddiscountMult
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `courses`       | `array` | **Required**. Array of courses to add the discount to      |
| `discount`       | `number` | **Required**. Discount for the courses |
| `date`     | `date` |  **Required**. Expiry Date for the discount |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "638f9b6a2b0e612cf53e819c",
    "title": "Python101",
    "subtitles": [
        {
            "subt": "Introduction",
            "description": "This is the introduction to the python course",
            "totalh": 1,
            "exercises": [
                {
                    "question": "Is Python an easy course?",
                    "answerA": "yes",
                    "answerB": "maybe",
                    "answerC": "no",
                    "answerD": "definitely yes ",
                    "correctanswer": "D",
                    "_id": "638f9b6a2b0e612cf53e819e"
                }
            ],
            "videos": [
                {
                    "videotitle": "Introduction",
                    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                    "videodescription": "Introduction Video",
                    "_id": "638f9b6a2b0e612cf53e819f"
                }
            ],
            "_id": "638f9b6a2b0e612cf53e819d"
        },
        {
            "subt": "Part 1 : Starting Out",
            "description": "Starting out your coding adventure",
            "totalh": 4,
            "exercises": [
                {
                    "question": "what type of programming language is python?",
                    "answerA": "embeded",
                    "answerB": "assembly",
                    "answerC": "machine",
                    "answerD": "high level",
                    "correctanswer": "D",
                    "_id": "638f9b6a2b0e612cf53e81a1"
                }
            ],
            "videos": [
                {
                    "videotitle": "Starting Out",
                    "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                    "videodescription": "",
                    "_id": "638f9b6a2b0e612cf53e81a2"
                }
            ],
            "_id": "638f9b6a2b0e612cf53e81a0"
        }
    ],
    "subject": "Computer Science",
    "price": 45,
    "summary": "This is a python course",
    "instructorName": "instructor",
    "courseRating": 2.5,
    "totalHours": null,
    "preview": "https://www.youtube.com/embed/rfscVS0vtbw",
    "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACxCAMAAADOHZloAAAA0lBMVEX///82caP/00r/yzv/1lL/zkJZWVn/1U/R0dHi4+RGeqfa2tpbW1spa6D/1EOhtswZZJzz9fb/99+en5///fZnZ2hxc3X/6bKvr6//00iCgoLZ3+T/zDZfX1///fdSUlHm6/HK2OT/0FZVgqx3fID/5J3/8Mn/56f/yCf902dwlLj/0DdrbGzFyMu5ydmQp75hirKGobycts53k68AWpf/346/ztz/yBn/2XT/7sR6nb6Tq8L98tX/7Liltcb/2F7/4ISfpaqJjpG8vLyTlJVFRUREjEuEAAAGA0lEQVR4nO2cfVfaPBiHi4VIpTCyUoTaWBRfGBSnzx5fNuc2kH3/r7QkFIGSIuwcjEt/1x+jZSnn7nXu3Hlpj5YFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8NbQTgLVHck7o3P1ud89qFbrnGq10L2+uerojumdQD8cCCVLcFHXR7oDew8cFVJmZoLqP3SHpp9OVaaKylD9s+7gtNMXXh6vbpR67nRHp5s6zxxRYe7qCj1d3dFpxqkXqjfy6FqRPfWcV+YTbuc/eaTqW9UrzeFphtsp9OXRgWrc+qA5PM0IO9LBZ1VZhh0h4eCLetIDO1MNKjewc6IayGEn4eT/+hKwswRdIjVy5d5OCtjh3N10D5Ss9KzL0ym3H3XH/FbcFeoZg9RqVT4PbUl4f6k77LfhZu04lWHHtnu50LO5nGU79n0OOtf6Gc46O+En3bHvnu7mclJ27J7xybNN6qzYOdcd/a5RrsUz7VxZt3M5Oehaqm2cTOon1sOCHbt3rDv83UK3SZ1CgR7vlRbtfNcd/2452apjPVpfwyU7hk95rrawUz2wrFN70U74S3f8u+VxczvVLrUuw9KiHbuoO/7d8i3jsfAq9Ucq+tWyHVt3/Lulr3ouU+g/fkgjHoNe9kopO2FD9w3slL6iutypX9i5+CQyJ1920rkjn4R+fzpMcf5QCu1S3uyk6454DeXpZ60tqM0JZ2ryZSc1ZonM+VXbLwr29+aUFshRVU7Pd6h1XisWN7Zzqjv+3bI8V67+sC5mcjaxE97qjn+3LK+zqh3r0/4WdnpPuuPfMctrdMt6SZ1N7NybXZRT+zvX1sdt7Ji/v7O4N1jd0k7vUHf0O2ex7PS3zB3TO5Zl/aj+be6YPmJJDv7WTs/81LGsztzOl23s9L7qjvxN6HSTx+iK3GlPWbUT3ptfkhPuvnUlN2k77aw8ytE7GAuk7Awax40px4LGC7rj1MOKnWUMf371Gum6MxjUBjPC3Lyzk8X6MSuEHaUdG3asLDvt9sNpCDtqO+0HXo0vQthR2Wm35QB+HsKOys50G4cnT2j6XuBrqOwU5TTnMCyZ/kbKq9y2V+tOTXSoxn7JNn4v8DUaxf0VO3uDX4eXezZSh1ee4p5ivhOGJTv3VUfQSB6GpubKYTGPq3IFFw/t2t7+wnynHYZFJM4Ljafbn7XB9A2DwaD4cIi8SfHx4umSc3iR930LAAAA4N+HDh3dIbxfKlFU0R3D+6VCCOxkAjtKKqPpB+woOIvO5CfsqAgY7GQDO+vIuR2nFfh+PE5uvTw7sFqjIT8dNVk8Gj0nduhw5HkvkioT3/fH5Zdf4o19vzky6I8w03EU+cHYJ8QTp0fzOV8c8W9ahPmMkbGw45a9iOOSybSBJ66MoyiY6hjGv1kwjolrTo45rhvIm/HciCeIdTTvP01X+hI9i1Jhx2fR5Ig6Y0Za8grCeHJZQ+Y2xemYxOLUenaZ++a3sSPKhCSrp5gxmmVHUCEsSRJf3n45ItM+VYlcbov6bmt6ncfIvLP928ztPLtkuN7O7H9GzHXE982kYSC8zu3wnzDPjkPYZDM7Q5fb4c0TG/yce53bcUy0Q5nQsJEdwu2UiTtMGnJRI+Pt+Mzfwg5PoJkdSphnvJ14UzvlPNphLN7CDv/nOWkoS5DpdiIWLA0463sWl+klDXlVLptuh3eVlrDz0mHW2+Hf+0lDj/nUdDtNOYvhGZSsE+Z2Ynma6lniysQjWZ4NGmWHzVYSRO4BnjFXfjqTpOuMXFdOkdN2rLHrS7GBK5LIVDtx5I4nfO04ll/Q2HX5YtKP+LJK2uG3Hbcqi88khkm+jQmZtDwWNalsRmZ2IoPsEGd4xlfe8WwEskZ+FJGgRYNpz7Ko5//m9do5C5I+WAmSI3lhc3ohDYLkF3hDUxbpSd1RbckEs66yDoP2chTMq/IKzU3smE22HRrPxqT8km2n4jKzu80GZNpx/NkGaY5R2qFOeUKiQEM474xyFK3YoYxEkZ/7oiNwvNXc8SbPeFUHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4N/gD74FnECCdhMYAAAAAElFTkSuQmCC",
    "ratings": [
        {
            "userwhorated": "trainee",
            "userRate": 0,
            "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
            "_id": "638f9c852b0e612cf53e82da"
        },
        {
            "userwhorated": "trainee2",
            "userRate": 0,
            "userMessage": "hai",
            "_id": "63906bebbae30876d9202c2c"
        }
    ],
    "totalratings": 2,
    "totalStars": 5,
    "amountOfDiscount": 20,
    "ExpiryDate": "2023-01-06T00:00:00.000Z",
    "createdAt": "2022-12-06T19:43:38.510Z",
    "updatedAt": "2023-01-05T13:13:17.511Z",
    "__v": 0,
    "NumberOfUsers": 41
}
```




 </details>
 
 
 #### Generate Certficate

```http
  GET /courses/certf/:title/:firstname/:lastname
```
| Headers         | Type     | Description                                   |
| :-------------- | :------- | :-------------------------------------------- |
| `title` | `string` | **Required**. title of the course |
| `firstname` | `string` | **Required**. firstname of the user |
| `lastname` | `string` | **Required**. lastname of the user |





<details>
<summary>
Response
</summary>

![image](https://user-images.githubusercontent.com/89773568/211013773-b2b06dbe-0b0f-4012-968e-5ded6467a9ae.png)




 </details>
   
   
   
   #### Generate Certficate Email

```http
  POST /courses/certfEmail
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `title`       | `string` | **Required**. Title of the course       |
| `firstName`     | `string` |  **Required**. User first Name    |
| `lastName` | `string` | **Required**. User Last Name |
| `email`       | `email` | **Required**. User Email |
| `username`       | `string` |   **Required**. Username of the user |




<details>
<summary>
Response
</summary>


```json
![image](https://user-images.githubusercontent.com/89773568/211014689-69d34bee-f6f8-4ebd-9baf-a0780ecb2479.png)
![image](https://user-images.githubusercontent.com/89773568/211014726-39273246-53af-4e6f-a186-3b1701c45a75.png)

```




 </details>
   
   
#### Get Most Popular Courses

```http
  GET /courses/mostPop
```

Gets Top 6 Most Popular Courses



<details>
<summary>
Response
</summary>


```json
[
    {
        "_id": "638f9b6a2b0e612cf53e819c",
        "title": "Python101",
        "subtitles": [
            {
                "subt": "Introduction",
                "description": "This is the introduction to the python course",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "Is Python an easy course?",
                        "answerA": "yes",
                        "answerB": "maybe",
                        "answerC": "no",
                        "answerD": "definitely yes ",
                        "correctanswer": "D",
                        "_id": "638f9b6a2b0e612cf53e819e"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Introduction",
                        "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                        "videodescription": "Introduction Video",
                        "_id": "638f9b6a2b0e612cf53e819f"
                    }
                ],
                "_id": "638f9b6a2b0e612cf53e819d"
            },
            {
                "subt": "Part 1 : Starting Out",
                "description": "Starting out your coding adventure",
                "totalh": 4,
                "exercises": [
                    {
                        "question": "what type of programming language is python?",
                        "answerA": "embeded",
                        "answerB": "assembly",
                        "answerC": "machine",
                        "answerD": "high level",
                        "correctanswer": "D",
                        "_id": "638f9b6a2b0e612cf53e81a1"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Starting Out",
                        "url": "https://www.youtube.com/embed/rfscVS0vtbw",
                        "videodescription": "",
                        "_id": "638f9b6a2b0e612cf53e81a2"
                    }
                ],
                "_id": "638f9b6a2b0e612cf53e81a0"
            }
        ],
        "subject": "Computer Science",
        "price": 45,
        "summary": "This is a python course",
        "instructorName": "instructor",
        "courseRating": 2.5,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/rfscVS0vtbw",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9c852b0e612cf53e82da"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 0,
                "userMessage": "hai",
                "_id": "63906bebbae30876d9202c2c"
            }
        ],
        "totalratings": 2,
        "totalStars": 5,
        "amountOfDiscount": 20,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:43:38.510Z",
        "updatedAt": "2023-01-06T12:29:07.639Z",
        "__v": 0,
        "NumberOfUsers": 41
    },
    {
        "_id": "638f9c3c2b0e612cf53e81ce",
        "title": "Java 201",
        "subtitles": [
            {
                "subt": "Getting Started",
                "description": "Getting Started ",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "31",
                        "answerB": "32",
                        "answerC": "32",
                        "answerD": "33",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d0"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java",
                        "url": "https://www.youtube.com/embed/eIrMbAQSU34",
                        "videodescription": "java",
                        "_id": "638f9c3c2b0e612cf53e81d1"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81cf"
            },
            {
                "subt": "New Stuff",
                "description": "a",
                "totalh": 3,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "d",
                        "answerB": "v",
                        "answerC": "b",
                        "answerD": "m",
                        "correctanswer": "",
                        "_id": "638f9c3c2b0e612cf53e81d3"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "java 2",
                        "url": "https://www.youtube.com/embed/drQK8ciCAjY",
                        "videodescription": "",
                        "_id": "638f9c3c2b0e612cf53e81d4"
                    }
                ],
                "_id": "638f9c3c2b0e612cf53e81d2"
            }
        ],
        "subject": "Computer Science",
        "price": 55,
        "summary": "java201",
        "instructorName": "instructor",
        "courseRating": 3,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/eIrMbAQSU34",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 0,
                "userMessage": "Instructor Was Good But the Course was a bit overwhelming",
                "_id": "638f9d0a2b0e612cf53e84b7"
            },
            {
                "userwhorated": "trainee2",
                "userRate": 1,
                "userMessage": "tester",
                "_id": "63906df59d8c1edd3a1bf953"
            }
        ],
        "totalratings": 2,
        "totalStars": 6,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-06T19:47:08.353Z",
        "updatedAt": "2023-01-05T13:15:58.308Z",
        "__v": 0,
        "NumberOfUsers": 33
    },
    {
        "_id": "63aad7e4921a9f7d5ddf78d5",
        "title": "FeedBack Test",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "test",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "",
                        "_id": "63aad7e4921a9f7d5ddf78d7"
                    },
                    {
                        "question": "1",
                        "answerA": "1",
                        "answerB": "1",
                        "answerC": "1",
                        "answerD": "1",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78d8"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "1",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78d9"
                    },
                    {
                        "videotitle": "32",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78da"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78d6"
            },
            {
                "subt": "yahaya",
                "description": "11",
                "totalh": 12,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12",
                        "answerA": "3",
                        "answerB": "32",
                        "answerC": "1",
                        "answerD": "13",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78dc"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78dd"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78db"
            },
            {
                "subt": "Firing Range",
                "description": "321",
                "totalh": 123,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "123",
                        "answerA": "13",
                        "answerB": "1",
                        "answerC": "313",
                        "answerD": "123",
                        "correctanswer": "C",
                        "_id": "63aad7e4921a9f7d5ddf78df"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "12",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e0"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78de"
            },
            {
                "subt": "Firing Range1",
                "description": "132",
                "totalh": 32,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "3123",
                        "answerA": "1321",
                        "answerB": "313",
                        "answerC": "123",
                        "answerD": "1321",
                        "correctanswer": "D",
                        "_id": "63aad7e4921a9f7d5ddf78e2"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "aa",
                        "url": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "_id": "63aad7e4921a9f7d5ddf78e3"
                    }
                ],
                "_id": "63aad7e4921a9f7d5ddf78e1"
            }
        ],
        "subject": "Self-awareness (mindfulness, meditation, etc.)",
        "price": 60,
        "summary": "132312",
        "instructorName": "instructor",
        "courseRating": 5,
        "totalHours": 168,
        "preview": "https://www.youtube.com/embed/XmVIRg0Xpxk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 5,
                "userMessage": "Very Good Course",
                "_id": "63adea8cb85a9eb8d4e0a2a6"
            }
        ],
        "totalratings": 1,
        "totalStars": 5,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 7,
        "createdAt": "2022-12-27T11:32:52.833Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0
    },
    {
        "_id": "639079d0a456f2787802f18a",
        "title": "eval",
        "subtitles": [
            {
                "subt": "test",
                "description": "test",
                "totalh": 1,
                "exercises": [
                    {
                        "question": "test",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "D",
                        "_id": "639079d0a456f2787802f18c"
                    },
                    {
                        "question": "test2",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "",
                        "_id": "639079d0a456f2787802f18d"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "test",
                        "url": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
                        "videodescription": "test",
                        "_id": "639079d0a456f2787802f18e"
                    }
                ],
                "_id": "639079d0a456f2787802f18b"
            }
        ],
        "subject": "Kids and gadgets",
        "price": 12,
        "summary": "test",
        "instructorName": "instructor",
        "courseRating": 4,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com",
        "thumbnail": "",
        "ratings": [
            {
                "userwhorated": "trainee",
                "userRate": 4,
                "userMessage": "it was a good course",
                "_id": "63907a82a456f2787802f38f"
            }
        ],
        "totalratings": 1,
        "totalStars": 4,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-07T11:32:32.350Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 3
    },
    {
        "_id": "6398cb89d3a6cad42d2a3a89",
        "title": "subtitle No Test",
        "subtitles": [
            {
                "subt": "1",
                "description": "aa",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "a",
                        "answerB": "a",
                        "answerC": "a",
                        "answerD": "a",
                        "correctanswer": "B",
                        "_id": "6398cb89d3a6cad42d2a3a8b"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "a",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "a",
                        "_id": "6398cb89d3a6cad42d2a3a8c"
                    }
                ],
                "_id": "6398cb89d3a6cad42d2a3a8a"
            },
            {
                "subt": "2",
                "description": "2",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "a",
                        "answerA": "a",
                        "answerB": "a",
                        "answerC": "a",
                        "answerD": "a",
                        "correctanswer": "C",
                        "_id": "6398cb89d3a6cad42d2a3a8e"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "a",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "a",
                        "_id": "6398cb89d3a6cad42d2a3a8f"
                    }
                ],
                "_id": "6398cb89d3a6cad42d2a3a8d"
            }
        ],
        "subject": "Kids and gadgets",
        "price": 12,
        "summary": "12",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": null,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/png;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "createdAt": "2022-12-13T18:59:21.274Z",
        "updatedAt": "2023-01-05T13:13:17.512Z",
        "__v": 0,
        "NumberOfUsers": 3
    },
    {
        "_id": "63adf32285948646cdbca12c",
        "title": "OneVideoTester",
        "subtitles": [
            {
                "subt": "Video Test",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 1,
                "subtNo": 1,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "B",
                        "_id": "63adf32285948646cdbca12e"
                    },
                    {
                        "question": "a?",
                        "answerA": "a",
                        "answerB": "b",
                        "answerC": "c",
                        "answerD": "d",
                        "correctanswer": "C",
                        "_id": "63adf32285948646cdbca12f"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 1",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca130"
                    }
                ],
                "_id": "63adf32285948646cdbca12d"
            },
            {
                "subt": "Video Test 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 2,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "Test Question 1?",
                        "answerA": "1",
                        "answerB": "2",
                        "answerC": "3",
                        "answerD": "4",
                        "correctanswer": "C",
                        "_id": "63adf32385948646cdbca132"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "Video 2",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca133"
                    }
                ],
                "_id": "63adf32385948646cdbca131"
            },
            {
                "subt": "Video Test 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 3,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "12?",
                        "answerA": "123",
                        "answerB": "312",
                        "answerC": "3213",
                        "answerD": "1231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca135"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "3123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca136"
                    }
                ],
                "_id": "63adf32385948646cdbca134"
            },
            {
                "subt": "Last Test1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "totalh": 5,
                "subtNo": 2,
                "exercises": [
                    {
                        "question": "31?",
                        "answerA": "12312",
                        "answerB": "3123",
                        "answerC": "1231",
                        "answerD": "31231",
                        "correctanswer": "D",
                        "_id": "63adf32385948646cdbca138"
                    }
                ],
                "videos": [
                    {
                        "videotitle": "123123",
                        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                        "videodescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "_id": "63adf32385948646cdbca139"
                    }
                ],
                "_id": "63adf32385948646cdbca137"
            }
        ],
        "subject": "Leadership",
        "price": 41,
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "instructorName": "instructor",
        "courseRating": 0,
        "totalHours": 11,
        "preview": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "thumbnail": "data:image/jpeg;base64,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",
        "ratings": [],
        "totalratings": 0,
        "totalStars": 0,
        "amountOfDiscount": 90,
        "ExpiryDate": "2023-01-06T00:00:00.000Z",
        "NumberOfUsers": 3,
        "createdAt": "2022-12-29T20:05:55.008Z",
        "updatedAt": "2023-01-05T13:18:59.798Z",
        "__v": 0
    }
]
```




 </details> 
 
 
 
 </details>
 
 
 <details>
   
   <summary>User API</summary>
   
   #### Register Individual Trainee

```http
  POST /users/new
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username of trainee       |
| `firstName`     | `string` |  **Required**. first name of trainee    |
| `lastName` | `string` | **Required**. last name of the trainee |
| `email`       | `email` | **Required**. Email of the trainee       |
| `password`       | `password` |  **Required**. Password of the trainee Encrypted by bcryptjs       |
| `gender`     | `string` |  **Required**. Male/Female |
| `country` | `string` | **Required**. Country of the trainee |
| `role`       | `string` | Default set to trainee |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "yahyaramz1223@gmail.com",
    "role": "trainee",
    "country": "Egypt",
    "toscheck": "false",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjgxOTY1M2Q4MmYzM2FkNjRhNWNjOCIsImlhdCI6MTY3MzAwOTUwOSwiZXhwIjoxNjczMDk1OTA5fQ.E6CfHffPCi6OLTzAdOEiDuGqQLrtEwW21UCMDPrZe6g",
    "courses": [],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": []
}
```




 </details>
   
   
    
   #### Login User

```http
  POST /users/login
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username        |
| `password`     | `string` |  **Required**. password    |



<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "yahyaramz1223@gmail.com",
    "role": "trainee",
    "country": "Egypt",
    "toscheck": "false",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjgxOTY1M2Q4MmYzM2FkNjRhNWNjOCIsImlhdCI6MTY3MzAwOTYwMCwiZXhwIjoxNjczMDk2MDAwfQ.IzcmluXq_JZOcuPgwDmSimv4lEChvkUcGtKtKsyEjlU",
    "courses": [],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": []
}
```




 </details>
   
  
    
   #### View User

```http
  GET /users/me
```

   | Headers         | Type     | Description                                   |
| :-------------- | :------- | :-------------------------------------------- |
| `token` | `string` | **Required**. Bearer token of the user. |





<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "yahyaramz1223@gmail.com",
    "gender": "Male",
    "country": "Egypt",
    "role": "trainee",
    "toscheck": "false",
    "courses": [],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": [],
    "createdAt": "2023-01-06T12:51:49.481Z",
    "updatedAt": "2023-01-06T12:51:49.481Z",
    "__v": 0
}
```




 </details>
   
    
   #### Update Tos

```http
  POST /users/updatetos
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username       |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "yahyaramz1223@gmail.com",
    "password": "$2a$10$XIy5t2QhOu72gipn7626MO36L0ISuwMDvNEBLZB65ZjkqbqJcPvDm",
    "gender": "Male",
    "country": "Egypt",
    "role": "trainee",
    "toscheck": "true",
    "courses": [],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": [],
    "createdAt": "2023-01-06T12:51:49.481Z",
    "updatedAt": "2023-01-06T12:59:48.106Z",
    "__v": 0
}
```




 </details>
   
   
    
   #### Register Course to User

```http
  POST /users/registercourse
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username       |
| `courseName`     | `string` |   **Required**. Title of the course    |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "yahyaramz1223@gmail.com",
    "password": "$2a$10$XIy5t2QhOu72gipn7626MO36L0ISuwMDvNEBLZB65ZjkqbqJcPvDm",
    "gender": "Male",
    "country": "Egypt",
    "role": "trainee",
    "toscheck": "true",
    "courses": [
        {
            "courseName": "Python101",
            "currentSubtitle": 1,
            "receivedCert": "false",
            "_id": "63b81bf2ed1a3ad5cf7d7dc3"
        }
    ],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": [],
    "createdAt": "2023-01-06T12:51:49.481Z",
    "updatedAt": "2023-01-06T13:02:42.255Z",
    "__v": 0
}
```




 </details>
   
   
    
   #### Refresh User

```http
  POST /users/refreshuser
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username      |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "yahyaramz1223@gmail.com",
    "role": "trainee",
    "country": "Egypt",
    "toscheck": "true",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjgxOTY1M2Q4MmYzM2FkNjRhNWNjOCIsImlhdCI6MTY3MzAxMDI1NywiZXhwIjoxNjczMDk2NjU3fQ.n69szr5aDg9od0gDL1h3PGUUaTBE88JzSo684ghJTUo",
    "courses": [
        {
            "courseName": "Python101",
            "currentSubtitle": 1,
            "receivedCert": "false",
            "_id": "63b81bf2ed1a3ad5cf7d7dc3"
        }
       
    ],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": []
}
```




 </details>
   
   
    
   #### Update Email

```http
  POST /users/updateemail
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. username  |
| `email`     | `email` |  **Required**. Email of the user          |


<details>
<summary>
Response
</summary>


```json
{
    "_id": "63b819653d82f33ad64a5cc8",
    "username": "TraineeYahyaTest",
    "firstName": "Yahya",
    "lastName": "Akel",
    "email": "apitest@gmail.com",
    "password": "$2a$10$XIy5t2QhOu72gipn7626MO36L0ISuwMDvNEBLZB65ZjkqbqJcPvDm",
    "gender": "Male",
    "country": "Egypt",
    "role": "trainee",
    "toscheck": "true",
    "courses": [
        {
            "courseName": "Python101",
            "currentSubtitle": 1,
            "receivedCert": "false",
            "_id": "63b81bf2ed1a3ad5cf7d7dc3"
        }
    ],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [],
    "coursesrated": [],
    "requestedCourse": [],
    "createdAt": "2023-01-06T12:51:49.481Z",
    "updatedAt": "2023-01-06T13:06:19.005Z",
    "__v": 0
}
```




 </details>
   
   
   
    
   #### Update Bio

```http
  POST /users/updatebio
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. Username       |
| `minibio`     | `string` |  **Required**. Mini Biography       |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "638f9a032b0e612cf53e8187",
    "username": "instructor",
    "firstName": "hazem",
    "lastName": "ahmad",
    "email": "instructor@gmail.com",
    "password": "$2a$10$8t0Iu6xawy/JmbPsspbANuqAhuk/CT4HSWQWSJcMNhWBposKx3B2e",
    "gender": "Male",
    "country": "India",
    "role": "instructor",
    "toscheck": "true",
    "courses": [],
    "minibio": "apitest",
    "ratings": [
        {
            "userwhorated": "trainee",
            "usersRating": 1,
            "usersreview": "test222",
            "_id": "63907b10a456f2787802f4ab"
        }
    ],
    "ratingssentins": [],
    "coursesrated": [],
    "createdAt": "2022-12-06T19:37:39.787Z",
    "updatedAt": "2023-01-06T13:09:46.886Z",
    "__v": 0,
    "requestedCourse": []
}
```




 </details>
  
    
   #### Update Password

```http
  POST /users/updatepass
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `username`       | `string` | **Required**. Username      |
| `password`     | `string` |  **Required**. Password     |




<details>
<summary>
Response
</summary>


```json
{
    "_id": "638f9a202b0e612cf53e818b",
    "username": "trainee",
    "firstName": "trainee",
    "lastName": "trainee",
    "email": "yahyaramzaadadadady@gmail.com",
    "password": "$2a$10$8PCf9m6ympwtvHG5uAiayeLkh3VKSItxI5QUAc90oF/lomCZoH2Jq",
    "gender": "Male",
    "country": "Philippines",
    "role": "trainee",
    "toscheck": "true",
    "courses": [
        {
            "courseName": "FeedBack Test",
            "currentSubtitle": 1,
            "receivedCert": "false",
            "_id": "63ac774db49d83ec8bab66ad"
        },
        {
            "courseName": "OneVideoTester",
            "currentSubtitle": 3,
            "receivedCert": "false",
            "_id": "63adf37785948646cdbca2e0"
        },
        {
            "courseName": "Quiz Test",
            "currentSubtitle": 2,
            "receivedCert": "true",
            "_id": "63b04a17f2b2332e6767672b"
        },
        {
            "courseName": "Java 201",
            "currentSubtitle": 1,
            "receivedCert": "false",
            "_id": "63b6cd8dd24d58788db705a3"
        }
    ],
    "minibio": "",
    "ratings": [],
    "ratingssentins": [
        {
            "instructorrated": "instructor",
            "_id": "63907b10a456f2787802f4c3"
        }
    ],
    "coursesrated": [
        {
            "coursenamerated": "Python101",
            "_id": "638f9c852b0e612cf53e82d2"
        },
        {
            "coursenamerated": "Java 201",
            "_id": "638f9d0a2b0e612cf53e84a4"
        },
        {
            "coursenamerated": "eval",
            "_id": "63907a82a456f2787802f380"
        },
        {
            "coursenamerated": "FeedBack Test",
            "_id": "63adea8cb85a9eb8d4e0a299"
        }
    ],
    "createdAt": "2022-12-06T19:38:08.429Z",
    "updatedAt": "2023-01-05T13:15:57.843Z",
    "__v": 0,
    "requestedCourse": []
}
```




 </details>
   
    
   #### Forgot Password User

```http
  POST /users/forgotpass
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `email`       | `email` | **Required**. Email  |




<details>
<summary>
Response
</summary>


Email sent: 250 2.0.0 OK  1673011665 s23-20020a1cf217000000b003d1e3b1624dsm6207461wmc.2 - gsmtp




 </details>
   
   
   
    
   #### Reset Password GET User

```http
  GET /users/reset-password/:id/:token
```


| Headers     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `id`       | `string` | **Required**. ID of the user       |
| `token`     | `array` |  **Required**. token of the user     |




<details>
<summary>
Response
</summary>






 </details>
   
    #### Reset Password POST User

```http
  POST /users/reset-password/:id/:token
```


| Headers     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `id`       | `string` | **Required**. ID of the user       |
| `token`     | `array` |  **Required**. token of the user     |




<details>
<summary>
Response
</summary>


Password Changed Successfuly



 </details>
   
   
    
   #### Update Rating User

```http
  POST /users/updaterating
```


| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `usernameins`       | `string` | **Required**. username of instructor       |
| `rating`     | `number` |  **Required**. rating    |
| `review` | `string` | **Required**. message |
| `username`       | `string` | **Required**. Username of the rater       |




<details>
<summary>
Response
</summary>



   Rating Updated Successfully




 </details>
   
   
   
   </details>
   
 



## Useful Links

These 2 channels on YouTube have playlists for : Node, Express, React, Mongo and MERN stack in beginner level.

https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA

https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg    

Also here are more resources: 

Stripe API:

https://youtu.be/1r-F3FIONl8

Node.js

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY

Express.js

https://www.youtube.com/watch?v=fgTGADljAeg

ES6:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm

React introduction:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK

React Hooks -- functional components

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h

https://youtu.be/hQAHSlTtcmY

JWT authentication:

https://www.youtube.com/watch?v=mbsmsi7l3r4

https://www.youtube.com/watch?v=-RCnNyD0L-s

https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57



To be a good developer:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_ma_XO-GLSpL9L06ii4mAp 

Tests:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_63f0HH-dUtkininO7GO6f


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## Authors

- [@yahyaramzy](https://github.com/YahyaRamzy)
- [@mohamedElEraky]()
- [@mohamedHazem]()
- [@heneidy]()



## Credits

This website was created by Team PlaceHolder.
Thanks to our product manager Noha!
