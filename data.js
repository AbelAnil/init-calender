const calendarData = [
  {
    "month": "July 2026",
    "academic_busy_dates": {
      "10": "#Staff Meeting"
    },
    "events": [
      {
        "header_date": "08 - Wednesday - July",
        "event_name": "Enigma Day",
        "actual_date": "June 23",
        "scheduled_date": "July 08, Wednesday",
        "reason": "Shifted to July 08.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Alan Turing Machine Simulator",
            "description": "A deep-dive software design workshop where students write a program that visually simulates the tape and logic of a Turing machine solving basic computational problems.",
            "duration": "3 Hours",
            "format": "Pair programming workshop.",
            "prerequisites": "Data structures and algorithms knowledge."
          }
        ]
      },
      {
        "header_date": "20 - Monday - July",
        "event_name": "World Youth Skills Day",
        "actual_date": "July 15",
        "scheduled_date": "July 20, Monday",
        "reason": "Shifted to July 20.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Resume to Repo",
            "description": "A practical session where students learn Git fundamentals, version control, and how to build and host an interactive portfolio website using GitHub Pages and Markdown.",
            "duration": "3 Hours",
            "format": "Guided workshop.",
            "prerequisites": "Basic HTML/CSS."
          }
        ]
      },
      {
        "header_date": "30 - Thursday - July",
        "event_name": "SysAdmin Appreciation Day",
        "actual_date": "July 31",
        "scheduled_date": "July 30, Thursday",
        "reason": "Shifted to July 30.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Linux CLI Olympics",
            "description": "A fast-paced competition based around rapid server administration. Students will race to solve challenges involving bash scripting, fixing file permissions, analyzing logs, and finding hidden files.",
            "duration": "3 Hours",
            "format": "Competitive technical challenge.",
            "prerequisites": "Basic Linux command line knowledge."
          }
        ]
      }
    ]
  },
  {
    "month": "August 2026",
    "academic_busy_dates": {
      "13": "#Staff Meeting",
      "22": "Onam Holidays",
      "28": "SNG Jayanthi"
    },
    "events": [
      {
        "header_date": "10 - Monday - August",
        "event_name": "World Wide Web Day",
        "actual_date": "August 01",
        "scheduled_date": "August 10, Monday",
        "reason": "Shifted to August 10.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Retro Web Design Challenge",
            "description": "A creative hackathon where students must recreate modern websites using only raw 90s-era HTML/CSS. No modern frameworks, Flexbox, or JavaScript allowed\u2014just tables, marquees, and inline styles!",
            "duration": "4 Hours",
            "format": "Design hackathon.",
            "prerequisites": "HTML and CSS proficiency."
          }
        ]
      },
      {
        "header_date": "26 - Wednesday - August",
        "event_name": "Onam Celebration",
        "actual_date": "August 26",
        "scheduled_date": "August 26, Wednesday",
        "reason": "Scheduled on the actual commemorative date.",
        "activities": [
          {
            "type": "Combined",
            "name": "Onam Festival Celebration",
            "description": "Campus-wide cultural celebration featuring Pookkalam (floral carpet) competitions, traditional performances, and the grand Onasadya (traditional feast).",
            "duration": "Full Day (8 Hours)",
            "format": "Cultural Event.",
            "prerequisites": "Traditional attire is encouraged!"
          }
        ]
      }
    ]
  },
  {
    "month": "September 2026",
    "academic_busy_dates": {
      "1": "#CIE 1",
      "2": "#CIE 1",
      "3": "#CIE 1",
      "4": "Sreekrishna Jayanthi",
      "7": "#CIE 1 (FN/AN)",
      "9": "#Staff Meeting"
    },
    "events": [
      {
        "header_date": "24 - Thursday - September",
        "event_name": "Software Tester's Day",
        "actual_date": "September 09",
        "scheduled_date": "September 24, Thursday",
        "reason": "Shifted to September 24.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "QA Bug Hunt",
            "description": "Students are given a functional but heavily buggy software application. The team that writes the best automated tests (using Selenium or PyTest) to find the most edge-case bugs wins.",
            "duration": "3 Hours",
            "format": "Competitive testing event.",
            "prerequisites": "Basic programming and understanding of software testing."
          }
        ]
      },
      {
        "header_date": "15 - Tuesday - September",
        "event_name": "Software Freedom Day",
        "actual_date": "September 19",
        "scheduled_date": "September 15, Tuesday",
        "reason": "Shifted to September 15.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Open Source Contribution Sprint",
            "description": "A guided workshop teaching students how to navigate large codebases, understand issue trackers, and make their very first pull request to a real open-source GitHub repository.",
            "duration": "5 Hours",
            "format": "Collaborative coding sprint.",
            "prerequisites": "Git fundamentals and basic programming."
          }
        ]
      }
    ]
  },
  {
    "month": "October 2026",
    "academic_busy_dates": {
      "2": "Gandhi Jayanthi",
      "6": "#Staff Meeting",
      "12": "#CIE 2 | #CIE 1 (S1)",
      "13": "#CIE 2 | #CIE 1 (S1)",
      "14": "#CIE 2 | #CIE 1 (S1)",
      "15": "#CIE 2 | #CIE 1 (S1)",
      "16": "#CIE 2 | #CIE 1 (S1)",
      "18": "NPTEL Exams",
      "24": "NPTEL Exams",
      "25": "NPTEL Exams"
    },
    "events": [
      {
        "header_date": "07 - Wednesday - October",
        "event_name": "Supercomp Day",
        "actual_date": "October 11",
        "scheduled_date": "October 07, Wednesday",
        "reason": "Shifted to October 07.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Parallel Processing Lab",
            "description": "An advanced workshop teaching students how to use multiprocessing, threading, and distributed computing to dramatically speed up heavy data processing tasks.",
            "duration": "3 Hours",
            "format": "Advanced coding lab.",
            "prerequisites": "Advanced Python or C++."
          }
        ]
      },
      {
        "header_date": "20 - Tuesday - October",
        "event_name": "Internet Day",
        "actual_date": "October 29",
        "scheduled_date": "October 20, Tuesday",
        "reason": "Shifted to October 20.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Build Your Own Web Server",
            "description": "A bare-bones networking and backend workshop where students set up a local web server using Node.js/Express from absolute scratch, understanding HTTP protocols and routing.",
            "duration": "3 Hours",
            "format": "Backend coding workshop.",
            "prerequisites": "JavaScript fundamentals."
          }
        ]
      }
    ]
  },
  {
    "month": "November 2026",
    "academic_busy_dates": {
      "4": "Completion of all lab exams",
      "9": "#Staff Meeting\n(Condonation last date without fine)",
      "13": "S3/S5/S7 ESE 1",
      "16": "S3/S5/S7 ESE 2",
      "19": "S3/S5/S7 ESE 3",
      "23": "S3/S5/S7 ESE 4",
      "26": "S3 ESE 5 | S5 M/H | S7 M",
      "27": "#CIE 2 (S1)",
      "30": "S7 H | #CIE 2 (S1)"
    },
    "events": [
      {
        "header_date": "10 - Tuesday - November",
        "event_name": "World Sci. Day",
        "actual_date": "November 10",
        "scheduled_date": "November 10, Tuesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Sci-Py for Beginners",
            "description": "An applied computer science workshop demonstrating how to use Python libraries (SciPy, NumPy) to solve real-world physics, chemistry, and complex mathematical equations programmatically.",
            "duration": "3 Hours",
            "format": "Coding lab.",
            "prerequisites": "Python and college-level math."
          }
        ]
      },
      {
        "header_date": "25 - Wednesday - November",
        "event_name": "Computer Security Day",
        "actual_date": "November 30",
        "scheduled_date": "November 25, Wednesday",
        "reason": "Shifted to avoid a conflict with CIE exams and to fall on a weekday.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Ethical Hacking: Find the Vulnerability",
            "description": "Setting up a local, isolated network where students learn the basics of penetration testing using tools like Wireshark and Nmap to analyze traffic and find vulnerabilities on dummy targets.",
            "duration": "4 Hours",
            "format": "Security lab.",
            "prerequisites": "Networking fundamentals."
          }
        ]
      }
    ]
  },
  {
    "month": "December 2026",
    "academic_busy_dates": {
      "1": "Commencement of S4, S6, S8Classes\n#CIE 2 (S1)",
      "2": "#CIE 2 (S1)",
      "3": "#CIE 2 (S1)",
      "4": "#Staff Meeting",
      "17": "Completion of all lab exams (s1)",
      "23": "Christmas Cellebration & Vacation Starts",
      "25": "Christmas"
    },
    "events": [
      {
        "header_date": "07 - Monday - December",
        "event_name": "3D Computer Graphics Day",
        "actual_date": "December 03",
        "scheduled_date": "December 07, Monday",
        "reason": "Shifted to avoid a conflict with CIE exams and to fall on a weekday.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Blender & Three.js Web Lab",
            "description": "An introduction to 3D modeling and rendering those 3D objects interactively within a web browser using JavaScript and Three.js.",
            "duration": "3 Hours",
            "format": "Web graphics lab.",
            "prerequisites": "JavaScript basics."
          }
        ]
      },
      {
        "header_date": "23 - Wednesday - December",
        "event_name": "Christmas Celebration",
        "actual_date": "December 25",
        "scheduled_date": "December 23, Wednesday",
        "reason": "Scheduled before vacation starts.",
        "activities": [
          {
            "type": "Combined",
            "name": "Festive Tech Gathering & Secret Santa",
            "description": "A holiday celebration for the department featuring team-building activities, tech-themed mini-games, and a Secret Santa gift exchange.",
            "duration": "3 Hours",
            "format": "Social event.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "January 2027",
    "academic_busy_dates": {
      "4": "Reopening after Christmas\nVacation"
    },
    "events": [
      {
        "header_date": "12 - Tuesday - January",
        "event_name": "Language Processing Day",
        "actual_date": "December 09",
        "scheduled_date": "January 12, Tuesday",
        "reason": "Shifted to January 12.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Build a Custom Discord Chatbot",
            "description": "A fun workshop using Python and the Discord API (integrated with NLTK or HuggingFace) to build a conversational agent that can respond to student queries or moderate a channel.",
            "duration": "3 Hours",
            "format": "Project-based workshop.",
            "prerequisites": "Python programming."
          }
        ]
      },
      {
        "header_date": "28 - Thursday - January",
        "event_name": "Data Privacy Day",
        "actual_date": "January 28",
        "scheduled_date": "January 28, Thursday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Data Privacy Audit",
            "description": "A workshop on checking application security, hashing passwords, and understanding GDPR data protection in app development. Students will audit a sample application for PII leaks.",
            "duration": "3 Hours",
            "format": "Hands-on auditing lab.",
            "prerequisites": "Basic backend web development concepts."
          }
        ]
      }
    ]
  },
  {
    "month": "February 2027",
    "academic_busy_dates": {},
    "events": [
      {
        "header_date": "11 - Thursday - February",
        "event_name": "Safer Internet Day",
        "actual_date": "February 13",
        "scheduled_date": "February 11, Thursday",
        "reason": "Shifted to February 11.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Hack & Defend\" Mini-CTF (Capture The Flag)",
            "description": "A hands-on, competitive workshop where students are given an intentionally vulnerable sandboxed web application. They will learn to identify common vulnerabilities (like SQL injection, Cross-Site Scripting, and broken authentication) and then write patches to secure the code.",
            "duration": "3 Hours",
            "format": "Team-based competition (2-3 members).",
            "prerequisites": "Basic knowledge of HTML, JavaScript, and introductory backend concepts."
          }
        ]
      },
      {
        "header_date": "24 - Wednesday - February",
        "event_name": "National Sci. Day",
        "actual_date": "February 28",
        "scheduled_date": "February 24, Wednesday",
        "reason": "Shifted to February 24.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Code to Cosmos\" Hackathon",
            "description": "An intensive coding sprint where students use Python and libraries like Matplotlib or SciPy to build interactive physics simulations (e.g., gravity models) or visualize open-source astronomy datasets provided by NASA/ESA.",
            "duration": "6 Hours",
            "format": "Project building and presentation.",
            "prerequisites": "Intermediate Python programming."
          }
        ]
      }
    ]
  },
  {
    "month": "March 2027",
    "academic_busy_dates": {},
    "events": [
      {
        "header_date": "11 - Thursday - March",
        "event_name": "Pi Day",
        "actual_date": "March 14",
        "scheduled_date": "March 11, Thursday",
        "reason": "Shifted to March 11.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Pi-thon Code Golf",
            "description": "A creative programming competition where students must write algorithms to calculate Pi to the highest precision using the *fewest* possible lines of Python code, or alternatively, generate a graphical visualization of Pi using code.",
            "duration": "2 Hours",
            "format": "Individual competition.",
            "prerequisites": "Python fundamentals."
          }
        ]
      },
      {
        "header_date": "22 - Monday - March",
        "event_name": "Cryptography Day",
        "actual_date": "March 26",
        "scheduled_date": "March 22, Monday",
        "reason": "Shifted to March 22.",
        "activities": [
          {
            "type": "Combined",
            "name": "Escape Room: Crypto Edition",
            "description": "Cross-disciplinary teams are \"locked\" in a room and must decrypt a series of puzzles to escape. B.Tech coders will write quick scripts to crack RSA or AES encryption challenges, while non-technical students decipher visual ciphers, hidden messages, and logical clues.",
            "duration": "1 Hour slots per team.",
            "format": "Interdisciplinary team challenge (4-5 members).",
            "prerequisites": "At least one programmer per team; others need no prior experience."
          }
        ]
      },
      {
        "header_date": "31 - Wednesday - March",
        "event_name": "World Backup Day",
        "actual_date": "March 31",
        "scheduled_date": "March 31, Wednesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Server Disaster Recovery Drill",
            "description": "Simulating a catastrophic server failure where students must restore a web service from backups, fix corrupted databases, and redeploy containers under a time limit.",
            "duration": "4 Hours",
            "format": "High-pressure simulation lab.",
            "prerequisites": "Linux command line and basic database knowledge."
          }
        ]
      }
    ]
  },
  {
    "month": "April 2027",
    "academic_busy_dates": {},
    "events": [
      {
        "header_date": "08 - Thursday - April",
        "event_name": "National VR Day",
        "actual_date": "April 02",
        "scheduled_date": "April 08, Thursday",
        "reason": "Shifted to April 08.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Build Your First VR World",
            "description": "An introductory lab teaching the basics of spatial computing. Students will use Unity and WebXR to build and deploy a simple, interactive 3D virtual environment that can be viewed in a browser or headset.",
            "duration": "4 Hours",
            "format": "Guided hands-on lab.",
            "prerequisites": "Basic programming logic; prior C# knowledge is a plus but not required."
          }
        ]
      },

      {
        "header_date": "19 - Monday - April",
        "event_name": "IoT Day",
        "actual_date": "April 09",
        "scheduled_date": "April 19, Monday",
        "reason": "Shifted to April 19.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Connected Devices Hackathon",
            "description": "Building smart home integrations using microcontrollers (NodeMCU, ESP32) and open-source platforms like Home Assistant to automate environmental sensors.",
            "duration": "Full Day (8 Hours)",
            "format": "Hardware Hackathon.",
            "prerequisites": "Python or C++ and basic electronics understanding."
          }
        ]
      },
      {
        "header_date": "29 - Thursday - April",
        "event_name": "Int. Girls in ICT Day",
        "actual_date": "April 26",
        "scheduled_date": "April 29, Thursday",
        "reason": "Shifted to April 29.",
        "activities": [
          {
            "type": "Combined",
            "name": "Women in Tech Design Sprint",
            "description": "Cross-disciplinary teams build app prototypes addressing a specific social issue. B.Tech students handle the technical logic and backend architecture, while students from other departments handle UI/UX research, product design, marketing strategy, and the final pitch.",
            "duration": "Full Day (8 Hours)",
            "format": "Hackathon/Design Sprint.",
            "prerequisites": "None. Teams will be balanced by skill sets. Mentored by female faculty/alumni."
          }
        ]
      }
    ]
  },
  {
    "month": "May 2027",
    "academic_busy_dates": {},
    "events": [
      {
        "header_date": "11 - Tuesday - May",
        "event_name": "National Tech. Day",
        "actual_date": "May 11",
        "scheduled_date": "May 11, Tuesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "IoT Smart Campus Workshop",
            "description": "A hardware/software integration lab where students program Arduino or Raspberry Pi microcontrollers to create smart sensors (temperature, light, motion) aimed at improving campus infrastructure or energy efficiency.",
            "duration": "3 Hours",
            "format": "Hardware lab.",
            "prerequisites": "Basic C/C++ or Python knowledge."
          }
        ]
      },
      {
        "header_date": "20 - Thursday - May",
        "event_name": "Global Accessibility Awareness Day",
        "actual_date": "May 21 (for 2026)",
        "scheduled_date": "May 20, Thursday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "a11y Web Auditing Challenge",
            "description": "A focused workshop where students learn to audit web projects against WCAG accessibility standards and practice implementing screen-reader friendly code, proper ARIA labels, and keyboard navigation.",
            "duration": "3 Hours",
            "format": "Guided coding and auditing lab.",
            "prerequisites": "HTML/CSS and basic web development knowledge."
          }
        ]
      }
    ]
  },
  {
    "month": "June 2027",
    "academic_busy_dates": {},
    "events": [
      {
        "header_date": "07 - Monday - June",
        "event_name": "World Environ. Day",
        "actual_date": "June 05",
        "scheduled_date": "June 07, Monday",
        "reason": "Shifted to June 07.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Green Tech Sprint",
            "description": "A focused hackathon where students build software solutions for sustainability. Projects could include a carbon footprint tracking dashboard, power-saving scripts for lab computers, or waste management logistics apps.",
            "duration": "5 Hours",
            "format": "Hackathon.",
            "prerequisites": "Intermediate programming skills."
          }
        ]
      },
      {
        "header_date": "14 - Monday - June",
        "event_name": "AI Day",
        "actual_date": "June 13",
        "scheduled_date": "June 14, Monday",
        "reason": "Shifted to June 14.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Train Your First AI Model",
            "description": "A practical, hands-on lab using Google Colab and TensorFlow/PyTorch. Students will build and train a basic image classifier from scratch (e.g., distinguishing between different types of vehicles or animals).",
            "duration": "3 Hours",
            "format": "Guided coding lab.",
            "prerequisites": "Python programming and basic math concepts."
          }
        ]
      },
      {
        "header_date": "23 - Wednesday - June",
        "event_name": "Alan Turing Day",
        "actual_date": "June 23",
        "scheduled_date": "June 23, Wednesday",
        "reason": "Scheduled on a free weekday.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Alan Turing Machine Simulator",
            "description": "A deep-dive software design workshop simulating Turing machines.",
            "duration": "3 Hours",
            "format": "Hands-on Workshop.",
            "prerequisites": "Basic Programming."
          }
        ]
      }
    ]
  }
];
