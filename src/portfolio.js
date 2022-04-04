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
  username: "Ren Jie",
  title: "Hi all, I'm Ren Jie",
  subTitle: emoji(
    "I am Computer Vision Engineer working in Singapore🇸🇬. In my free time, I play tennis🎾, swim🏊‍♂️ and sing🎤!"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/notha99y",
  linkedin: "https://www.linkedin.com/in/renjietan/",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@renjietan",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I specialise in rapid prototyping of Computer Vision Applications",
  skills: [
    // emoji(
    //   "⚡ "
    // ),
    // emoji("⚡ "),
    // emoji(
    //   "⚡ "
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    }  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Singapore",
      logo: require("./assets/images/nusLogo.jpeg"),
      subHeader: "Master of Technology in Knowledge Engineering",
      duration: "Jan 2018 - Jun 2020",
      desc: ""
    },
    {
      schoolName: "National University of Singapore",
      logo: require("./assets/images/nusLogo.jpeg"),
      subHeader: "Bachelor of Science in Physics (Honours)",
      duration: "Jun 2012 - Jun 2016",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Googling",
      progressPercentage: "100%"
    },
    {
      Stack: "Leetcode",
      progressPercentage: "5%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Algorithm Engineer",
      company: "Shopee",
      companylogo: require("./assets/images/shopeeLogo.jpeg"),
      date: "June 2020 – Present",
      desc: "Face Anti-Spoofing and Quality Check for eKYC"
    },
    {
      role: "AI Engineer (Computer Vision)",
      company: "DSTA",
      companylogo: require("./assets/images/dstaLogo.jpeg"),
      date: "Mar 2019 – Jul 2020",
      desc: "Video analytics and computer vision applications for the defence and security domain."
    },
    {
      role: "AI Apprentice",
      company: "AI Singapore",
      companylogo: require("./assets/images/aiSgLogo.jpeg"),
      date: "May 2018 – Jan 2019",
      desc: "The 1st TechSkills Accelerator (TeSA) company-led training programme in Artificial Intelligence (AI) . TeSA is an initiative of SkillsFuture."
    },
    {
      role: "Capability Development Engineer",
      company: "ST Electronics",
      companylogo: require("./assets/images/stEngLogo.jpeg"),
      date: "Jun 2016 – May 2018",
      desc: "Develop Application for Remote Sensing and Satellite Mission Planning"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Chartered AI Engineer Level 1",
      subtitle:
        "Completed the requirements outlined in the Chartered AI Engineer Handbook",
      image: require("./assets/images/aipLogo.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credential.net/65c5305c-7648-49cf-8c83-30b98b2f5b4b#gs.vnmnc1"
        }
      ]
    },
    {
      title: "Certificate of Completion - Data Science and Data Engineering Bootcamp",
      subtitle: "The 5 Day Data Science and Data Engineering bootcamp is an intensive introduction designed for working professionals",
      image: require("./assets/images/dataScienceDojoLogo.jpeg"),
      footerLink: [
        {name: "Certification", url: "https://certification.datasciencedojo.com/verify/4a66919d"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "renjie.tan91@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
