import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Lalit",
  lastName: "Badgujar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Developer",
  avatar: "/images/my-avatar.jpg", // Replace with your avatar image path
  location: "Pune, Maharashtra",
  timeZone: "Asia/Kolkata",
  languages: ["English"], // Add more languages if needed
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/beinglalitb",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lalit-badgujar-235b95184/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "lalitbadgujarofficial@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product Developer</>,
  subline: (
    <>
        Hi, I'm Lalit Badgujar, a dynamic Product Developer at Belaben Technologies. I specialize in
        scalable database design, performance optimization, and building feature-rich applications.
      </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Lalit Badgujar, a dynamic Product Developer at Belaben Technologies. I specialize in
        scalable database design, performance optimization, and building feature-rich applications.
      </>
    ),
  }, 
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Git for DevOps and Version Control",
        date: "Mar 2023",
      },
      {
        name: "AWS Academy Graduate (Cloud Foundations)",
        date: "Jun 2022",
      },
    ],
  },
  work: {
    display: true,
    label: "Work",
    title: "Work Experience",
    description: `Professional journey of ${person.name}`,
    experiences: [
      {
        company: "Belaben Technologies",
        timeframe: "Jul 2023 - Present",
        role: "Product Developer",
        achievements: [
          <>Designed scalable MySQL database structures for complex business needs.</>,
          <>Optimized performance, security, and reliability through efficient tuning.</>,
          <>Developed feature-rich applications with cross-functional collaboration.</>,
          <>Implemented task management and project handling in the real estate domain.</>,
          <>Managed Git repositories and ensured smooth version control.</>,
          <>Debugged and enhanced user functionalities based on feedback.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
    
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description: <>PHP, Laravel</>,
      },
      {
        title: "Database Management",
        description: <>MySQL, MariaDB, Database Optimization, Query Performance Tuning</>,
      },
      {
        title: "Front-end Development",
        description: <>AngularJS, Blade Templates</>,
      },
      {
        title: "Version Control",
        description: <>Git, GitHub, GitLab</>,
      },
      {
        title: "Web Technologies",
        description: <>HTML, CSS, JavaScript</>,
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "M.Sc. Computer Science",
        description: <>Modern College of Arts, Science & Commerce, 2023 (GPA: 74%)</>,
      },
      {
        name: "B.Sc. Computer Science",
        description: <>Modern College of Arts, Science & Commerce, 2021 (GPA: 74%)</>,
      },
      {
        name: "HSC",
        description: <>Maharashtra State Board, 2016 (GPA: 58%)</>,
      },
      {
        name: "SSC",
        description: <>Maharashtra State Board, 2016 (GPA: 78%)</>,
      },
    ],
  },
 
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Design and development projects by ${person.name}`,
  items: [
    {
      name: "WhatsApp Clone",
      description: (
        <>
          Developed a fully functional WhatsApp clone using Java for Android. Implemented real-time
          messaging, user authentication, and media sharing. Focused on UI/UX for a smooth and
          intuitive user experience.
        </>
      ),
    },
  ],
};
 

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg", // Replace with your project or personal images
      alt: "WhatsApp Clone Screenshot",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
