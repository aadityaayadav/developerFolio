/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Yadav",
  title: "Hi, I'm Aditya",
  subTitle: emoji(
    "A passionate Machine Learning developer from Gwalior, India. Skilled in AI, Python, and building data-driven solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15WJBxr91w3XFE5WJAJFX2PfcueDW7paR/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aadityaayadav",
  linkedin: "https://www.linkedin.com/in/aditya-yadav-958407282/",
  gmail: "adityayadav9981@gmail.com",
  kaggle: "https://www.kaggle.com/adityaayadav",
  instagram: "https://www.instagram.com/_adityaayadav_/",
  youtube: "https://www.youtube.com/@Adii_yadav_vlogs",
  twitter: "https://x.com/adityayadav9981",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ML DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Developing intelligent ML models for real-world data problems",
    "⚡ Experienced in building data pipelines and doing EDA",
    "⚡ Hands-on with Computer Vision using OpenCV & YOLO",
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"  // Font Awesome class
      
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      style: { color: "#007396" }
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database",
      style: { color: "#4479A1" }
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar",
      style: { color: "#E97627" }
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel",
      style: { color: "#217346" }
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot",
      style: { color: "#FF6F61" }
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language",
      style: { color: "#3D9970" }
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye",
      style: { color: "#6A5ACD" }
    }
  ],
  display: true // Set false to hide this section, true to show
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ITM University Gwalior",
      logo: require("./assets/images/itmlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2025 - May 2026",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Sunrise International School",
      logo: require("./assets/images/sunrise.png"),
      subHeader: "High School Education",
      duration: "September 2013 - April 2022",
      desc: "Completed 10th and 12th grades with a strong foundation in mathematics and science, excelling in subjects like Physics, Chemistry, and Mathematics.",

      descBullets: [ "Achieved 2nd rank in 12th grade",
        "Ranked among the top students in the batch",
        "Participated in various extracurricular activities including science fairs and technical workshops"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Model Building", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

//Your Open Source Section to View Your Github Pinned Projects
export const projects = {
  data: [
    {
      id: "1",
      name: "Smart Expense Tracker App",
      url: "https://github.com/aadityaayadav/smart-expense-tracker",
      description: "A cross-platform React Native app that tracks expenses, integrates with ML for spending prediction, and uses blockchain for secure transactions.",
      languages: ["React Native", "Firebase", "Machine Learning", "Solidity"],
      image_path: "car price prediction.webp"
    },
    {
      id: "2",
      name: "Real-Time Hand Tracking",
      url: "https://github.com/aadityaayadav/hand-tracking",
      description: "Hand detection system using OpenCV and MediaPipe to track landmarks and gestures in real time.",
      languages: ["Python", "OpenCV", "MediaPipe"],
      image_path: "hand gestute.jpg"
    },
    {
      id: "3",
      name: "Laptop Price Predictor",
      url: "https://github.com/aadityaayadav/laptop-price-predictor",
      description: "Streamlit web app that predicts laptop prices using regression models trained on structured datasets.",
      languages: ["Python", "scikit-learn", "Streamlit"],
      image_path: "laptop price prediction.jpg"
    },
    
  ]
};




 

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //    image_path: "Personal_Finance_Tracker_Advanced_Excel_Dashboards.webp",
    //   projectName: "Smart Expense Tracker App",
    //   projectDesc: "A cross-platform React Native app that tracks expenses, integrates with ML for spending prediction, and uses blockchain for secure transactions.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://github.com/aadityaayadav/smart-expense-tracker"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    {
      image: require("./assets/images/Personal_Finance_Tracker_Advanced_Excel_Dashboards.webp"),
      projectName: "Smart Expense Tracker App",
      projectDesc: "A cross-platform React Native app that tracks expenses, integrates with ML for spending prediction, and uses blockchain for secure transactions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/aadityaayadav/smart-expense-tracker"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9981248943",
  email_address: "adityayadav9981@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
