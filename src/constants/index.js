export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Single Queue - Queue Management System',
    desc: 'Comprehensive QMS website serving multiple hospital departments including Poli, Pharmacy, and Registration. Streamlined patient flow management across hospital departments, improving operational efficiency.',
    subdesc:
      'Built using Vue.js, Bootstrap, and Xstate for state management to handle real-time queue updates across Mandaya Hospital Group.',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/care-dokter.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Xstate',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Patient Examination Results Platform',
    desc: 'Digital e-signature and e-report system eliminating paper-based processes for lab and radiology results. Enables nurses and patients to sign and share results digitally with instant sharing to family members.',
    subdesc:
      'Implemented using Vue.js, Tailwind CSS, and Xstate, enhancing patient communication and satisfaction at Mandaya Hospital Group.',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/care-dokter.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Xstate',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Inpatient Chat Platform',
    desc: 'Integrated Rocket Chat communication platform with external parties and internal hospital systems. Enables real-time collaboration between patients, nurses, and doctors for enhanced patient care coordination.',
    subdesc:
      'Developed using Vue.js, Tailwind CSS, and Xstate for seamless communication about diagnoses and treatment plans at Mandaya Hospital Group.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/care-dokter.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Xstate',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Web Care Dokter - Doctor Booking Platform',
    desc: 'Comprehensive doctor booking and appointment system for Mandaya Group hospitals. Streamlined appointment scheduling process for patients across multiple Mandaya Group facilities.',
    subdesc: 'Developed using Nuxt.js, Tailwind CSS, and Xstate for optimized performance and user experience.',
    href: 'https://bit.ly/4pzpbZG',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/care-dokter.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Nuxt.js',
        path: '/assets/nuxt-logo.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Xstate',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'AirBnb Clone',
    desc: 'Full-featured accommodation booking platform clone with property listings, search functionality, and booking management. Personal project showcasing modern web development practices.',
    subdesc: 'Built with Next.js, Tailwind CSS, and TypeScript for a responsive and type-safe application.',
    href: 'https://bit.ly/3RtQAOi',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/airbnb-logo.svg',
    logoStyle: {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Anime Search',
    desc: 'Anime discovery and search application with comprehensive filtering and detailed information display. Personal project featuring modern UI components and smooth user experience.',
    subdesc: 'Built with React.js, Tailwind CSS, TypeScript, and Shadcn UI for a polished and accessible interface.',
    href: 'https://bit.ly/4rHPONz',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/myanimelist.svg',
    logoStyle: {
      backgroundColor: '#2E51A2',
      border: '0.2px solid #2E51A2',
      boxShadow: '0px 0px 60px 0px #2E51A24D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Mandaya Royal Hospital Puri',
    pos: 'Front-End Web Developer',
    duration: 'Jan 2024 - Present',
    points: [
      'Develop and maintain responsive web applications using Vue.js and Nuxt.js framework for hospital management systems',
      'Collaborate with back-end developers and UI/UX to create seamless user experiences',
      'Implement modern front-end technologies to improve website performance and user engagement',
      'Participate in code reviews and contribute to best practices for front-end development standards',
    ],
    icon: '/assets/logo-mrhp.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'PT. ATI Business Group',
    pos: 'IT Operations Specialist',
    duration: 'Jul 2017 - Jan 2024',
    points: [
      'Installed and configured computer hardware, software, systems, networks, printers, and scanners',
      'Monitored and maintained computer systems and networks to ensure optimal performance and uptime',
      'Responded promptly to service issues and requests, achieving high customer satisfaction rates',
      'Troubleshot and resolved complex software and hardware issues, minimizing downtime',
      'Provided comprehensive technical support company-wide, including procedural documentation',
      'Managed user account setup and permissions for new employees',
    ],
    icon: '/assets/ati-business-group.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Badan Pemeriksa Keuangan RI',
    pos: 'System Analyst',
    duration: 'Jul - Aug 2015',
    points: [
      'Provided database consultation and assistance for integrating the RI financial reporting system',
      'Analyzed system requirements and proposed technical solutions for database integration',
    ],
    icon: '/assets/bpk-ri-logo.jpg',
    animation: 'salute',
  },
];
