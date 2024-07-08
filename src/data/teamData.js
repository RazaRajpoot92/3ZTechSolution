import team1 from "../assets/team1.jpeg"
import team2 from "../assets/team2.jpeg"
import team3 from "../assets/team3.jpeg"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";


export const teamData = [
    {
        name:"Nalain Zahra",
        degnization:"CEO & Founder",
        img:team1,
        socialLinks:[
            {   name:"email",
                icon: MdEmail,
                url:"nalainzahraofficial@gmail.com"
            },
            {
                name:"linkedIn",
                icon:FaLinkedin,
                url:"https://www.linkedin.com/in/nalain-zahra-598763278/"
            }
        ]
    },
    {
        name:"Ghulam Mustafa",
        degnization:"Partner (Co-founder)",
        img:team3,
        socialLinks:[
            {   name:"email",
                icon: MdEmail,
                url:"ghulammustafa1212@gmail.com"
            },
            {
                name:"linkedIn",
                icon:FaLinkedin,
                url:"https://www.linkedin.com/in/ahmad-raza-5b0646234/"
            }
        ]
    },
    {
        name:"Fatima Zahra",
        degnization:"Partner (Co-founder)",
        img:team2,
        socialLinks:[
            {   name:"email",
                icon: MdEmail,
                url:"fatimazeeshum@gmail.com"
            },
            {
                name:"linkedIn",
                icon:FaLinkedin,
                url:"https://www.linkedin.com/in/fatima-zahra7/"
            }
        ]
    },
    
]