import { lngLogo } from './utils/imagesDic';
let resumeData = {
    "name": "Khaoula Benchari",
    "role": "Software engineer",
    "linkedinId": "khaoula1305",
    "MyPhoto":"img/Benchari.png",
    "roleDescription": "I like to learn and create applications in various parts of software development and like to learn about new technologies, write technical articles.",
    "socialLinks": [{
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/khaoula1305",
            "className": "fa fa-linkedin"
        },
        {
            "name": "github",
            "url": "http://github.com/khaoula1305",
            "className": "fa fa-github"
        }
    ],
    "aboutme": "I'm interested about JavaScript frameworks and Java frameworks, and i'm passionate about working on source codes.",
    "website": "https://khaoula1305.github.io",
    "education": [{
            "UniversityName": "Ecole Hassania des travaux publics (EHTP)",
            "specialization": "Software engineering",
            "Year1": "2018",
            "Year2": "2021",
            "Achievements": "Some Achievements"
        },
        {
            "UniversityName": "Faculté des sciences et techniques (FST)",
            "specialization": "Deust",
            "Year1": "2016",
            "Year2": "2018",
            "Achievements": "Some Achievements"
        }
    ],
    "work": [{
            "CompanyName": "Some Company",
            "specialization": "Some specialization",
            "MonthOfLeaving": "Jan",
            "YearOfLeaving": "2018",
            "Achievements": "Some Achievements"
        },
        {
            "CompanyName": "Some Company",
            "specialization": "Some specialization",
            "MonthOfLeaving": "Jan",
            "YearOfLeaving": "2018",
            "Achievements": "Some Achievements"
        }
    ],
    "skillsDescription": "Your skills here",
    "skills": {
    languages: [
        {
            name: 'Java',
            image: lngLogo['java'],
            percentage: 95,
            imageWidth: 24
        },
        {
            name: 'JavaScript',
            image: lngLogo['javascript'],
            percentage: 95,
            imageWidth: 25
        },
        {
            name: 'Git/Github',
            image: lngLogo['git'],
            percentage: 90,
            imageWidth: 25
        },
        {
            name: 'Node.js',
            image: lngLogo['node'],
            percentage: 85,
            imageWidth: 25
        },
        {
            name: 'Python 3',
            image: lngLogo['python'],
            percentage: 70,
            imageWidth: 25
        },
        {
            name: 'PHP',
            image: lngLogo['php'],
            percentage: 50,
            imageWidth: 36
        },
        {
            name: 'MySQL',
            image: lngLogo['mysql'],
            percentage: 50,
            imageWidth: 27
        },
    ],

    frameworksAndLibraries: [
        {
            name: 'React',
            image: lngLogo['react'],
            percentage: 90,
            imageWidth: 25
        },
        {
            name: 'Redux',
            image: lngLogo['redux'],
            percentage: 80,
            imageWidth: 28
        },
        {
            name: 'Express',
            image: lngLogo['express'],
            percentage: 80,
            imageWidth: 52
        },
        {
            name: 'React Native',
            image: lngLogo['react_native'],
            percentage: 80,
            imageWidth: 25
        },
        {
            name: 'Firebase',
            image: lngLogo['firebase'],
            percentage: 70,
            imageWidth: 26
        },
        {
            name: 'Socket.io',
            image: lngLogo['socketioWhite'],
            percentage: 70,
            imageWidth: 26
        },
    ],
    },
    "portfolio": [
        {
            "name": "Shara",
            "description": "Android application to help each other between people.",
            "url":"https://www.khaoula1305.github.io",
            "github":"https://github.com/khaoula1305/Shara",
            "imgurl": "https://www.digital.sncf.com/sites/default/files/styles/large/public/application.png?itok=hpSZ4dD3",
            "date":"12/06/20",
                "languages":[
                {"skillname": "Java"
        },
        {
            "skillname": "Android"
        },
        {
            "skillname": "Firebase"
        }
            ]
        },
        {
            "name": "Resume Website",
            "description": "My Portfolio containing a description about myself and my projects.",
            "url":"https://www.khaoula1305.github.io",
            "github":"https://github.com/khaoula1305/khaoula1305.github.io",
            "imgurl": "https://media.bitdegree.org/storage/media/images/2018/11/How-to-Create-A-Website-From-Scratch-The-Beginner%E2%80%99s-Guide.jpg",
            "date":"09/12/20",
            "languages":[
                
        {
            "skillname": "Reactjs"
        },
        {
            "skillname": "Firebase"
        },
        {"skillname": "HTML5"
        },
        {
            "skillname": "CSS"
        }
            ]
        },
        {
            "name": "IT incident management",
            "description": "",
            "url":"https://khaoula1305.github.io/clientIncidInfo/",
            "github":"https://github.com/khaoula1305/clientIncidInfo",
            "imgurl": "https://cdn.lynda.com/course/518163/518163-637286201708124939-16x9.jpg",
            "date":"In Progress",
            "languages":[
             
        {
            "skillname": "Angular"
        },
        {
            "skillname":"Spring Boot"
        },
           {"skillname": "HTML5"
        },
        {
            "skillname": "CSS"
        },
            ]
        },
        {
            "name": "SmartMind",
            "description": " E-Learning Web Apps",
            "url":"https://www.khaoula1305.github.io",
            "imgurl": "https://i.ibb.co/vzb5bLx/Smart-Mind.png",
            "github":"https://github.com/khaoula1305",
            "date":"13/02/20",
            "languages":[
                {"skillname": "PHP"
        },
        {
            "skillname": "Laravel"
        },
        {
            "skillname": "PostgreSQL"
        }
            ]
        },


    ]
}
export default resumeData;
