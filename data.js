const calendarData = [
  {
    "month": "May 2026",
    "events": [
      {
        "header_date": "20 - Wednesday - May",
        "event_name": "National Tech. Day",
        "actual_date": "May 11",
        "scheduled_date": "May 20, Wednesday",
        "reason": "Shifted to avoid a conflict with ESE exams on the actual date.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "IoT Smart Campus Workshop",
            "description": "A hardware/software integration lab where students program Arduino or Raspberry Pi microcontrollers to create smart sensors (temperature, light, motion) aimed at improving campus infrastructure or energy efficiency.",
            "duration": "3 Hours",
            "format": "Hardware lab.",
            "prerequisites": "Basic C/C++ or Python knowledge."
          },
          {
            "type": "Others",
            "name": "Tech for Daily Life",
            "description": "A showcase on automating everyday tasks to boost personal productivity. Covers tools like IFTTT, setting up smart home routines, and using advanced features of daily apps (Excel, Notion).",
            "duration": "1.5 Hours",
            "format": "Seminar/Demonstration.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "26 - Tuesday - May",
        "event_name": "Global Accessibility Awareness Day",
        "actual_date": "May 21 (for 2026)",
        "scheduled_date": "May 26, Tuesday",
        "reason": "Shifted to avoid a conflict with ESE exams and to fall on a weekday.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "a11y Web Auditing Challenge",
            "description": "A focused workshop where students learn to audit web projects against WCAG accessibility standards and practice implementing screen-reader friendly code, proper ARIA labels, and keyboard navigation.",
            "duration": "3 Hours",
            "format": "Guided coding and auditing lab.",
            "prerequisites": "HTML/CSS and basic web development knowledge."
          },
          {
            "type": "Others",
            "name": "Experiencing Tech through Assistive Devices",
            "description": "A perspective-shifting workshop where attendees navigate popular websites and apps using only screen readers, high contrast modes, and keyboard navigation to understand the importance of inclusive design.",
            "duration": "2 Hours",
            "format": "Interactive empathy workshop.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "28 - Thursday - May",
        "event_name": "Geek Pride Day",
        "actual_date": "May 25",
        "scheduled_date": "May 28, Thursday",
        "reason": "Shifted to avoid ESE exams and to fall on a weekday.",
        "activities": [
          {
            "type": "Combined",
            "name": "Cosplay & Code/Trivia Relay",
            "description": "A fun, fast-paced relay race. Teams of 4 dress up in pop-culture or tech themes. Programmers write code to build a simple web app for 10 minutes, then tag in non-programmers who must answer geek culture trivia or solve logic puzzles to unlock the next coding round.",
            "duration": "2 Hours",
            "format": "Fun team competition.",
            "prerequisites": "Enthusiastic attitude; teams must mix technical and non-technical members."
          }
        ]
      }
    ]
  },
  {
    "month": "June 2026",
    "events": [
      {
        "header_date": "04 - Thursday - June",
        "event_name": "World Environ. Day",
        "actual_date": "June 05",
        "scheduled_date": "June 04, Thursday",
        "reason": "Shifted to avoid a conflict with S2 ESE exams on the actual date.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Green Tech Sprint",
            "description": "A focused hackathon where students build software solutions for sustainability. Projects could include a carbon footprint tracking dashboard, power-saving scripts for lab computers, or waste management logistics apps.",
            "duration": "5 Hours",
            "format": "Hackathon.",
            "prerequisites": "Intermediate programming skills."
          },
          {
            "type": "Others",
            "name": "E-Waste Drive & Upcycling Workshop",
            "description": "A campus-wide campaign to safely collect electronic waste, accompanied by a creative workshop on turning old tech parts (keyboards, motherboards) into art, jewelry, or basic gadgets.",
            "duration": "Ongoing collection; 2-hour workshop.",
            "format": "Community event.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "12 - Friday - June",
        "event_name": "AI Day",
        "actual_date": "June 13",
        "scheduled_date": "June 12, Friday",
        "reason": "Shifted to a weekday (Friday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Train Your First AI Model",
            "description": "A practical, hands-on lab using Google Colab and TensorFlow/PyTorch. Students will build and train a basic image classifier from scratch (e.g., distinguishing between different types of vehicles or animals).",
            "duration": "3 Hours",
            "format": "Guided coding lab.",
            "prerequisites": "Python programming and basic math concepts."
          },
          {
            "type": "Others",
            "name": "AI Tools for Productivity",
            "description": "A practical guide on effectively using Generative AI (like ChatGPT, Claude, and Midjourney). Attendees will learn prompt engineering for writing, research, presentation design, and daily administrative tasks.",
            "duration": "2 Hours",
            "format": "Interactive seminar.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "24 - Wednesday - June",
        "event_name": "Enigma Day",
        "actual_date": "June 23",
        "scheduled_date": "June 24, Wednesday",
        "reason": "Shifted to avoid a conflict with a Valuation Camp on the actual date.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Alan Turing Machine Simulator",
            "description": "A deep-dive software design workshop where students write a program that visually simulates the tape and logic of a Turing machine solving basic computational problems.",
            "duration": "3 Hours",
            "format": "Pair programming workshop.",
            "prerequisites": "Data structures and algorithms knowledge."
          },
          {
            "type": "Others",
            "name": "Codebreaking & Board Games",
            "description": "An analog gaming event focusing on hidden roles, deduction, and basic cryptography using popular board games like Codenames, Decrypto, and Avalon.",
            "duration": "3 Hours (Drop-in)",
            "format": "Social gaming event.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "July 2026",
    "events": [
      {
        "header_date": "15 - Wednesday - July",
        "event_name": "World Youth Skills Day",
        "actual_date": "July 15",
        "scheduled_date": "July 15, Wednesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Resume to Repo",
            "description": "A practical session where students learn Git fundamentals, version control, and how to build and host an interactive portfolio website using GitHub Pages and Markdown.",
            "duration": "3 Hours",
            "format": "Guided workshop.",
            "prerequisites": "Basic HTML/CSS."
          },
          {
            "type": "Others",
            "name": "Digital Literacy & LinkedIn Branding",
            "description": "A career-focused workshop on building a strong professional digital profile, mastering professional email communication, and leveraging LinkedIn for networking and job hunting.",
            "duration": "2 Hours",
            "format": "Seminar and live profile review.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "31 - Friday - July",
        "event_name": "SysAdmin Appreciation Day",
        "actual_date": "July 31",
        "scheduled_date": "July 31, Friday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Linux CLI Olympics",
            "description": "A fast-paced competition based around rapid server administration. Students will race to solve challenges involving bash scripting, fixing file permissions, analyzing logs, and finding hidden files.",
            "duration": "3 Hours",
            "format": "Competitive technical challenge.",
            "prerequisites": "Basic Linux command line knowledge."
          },
          {
            "type": "Others",
            "name": "Tech Support Appreciation & Cable Management Contest",
            "description": "A lighthearted event thanking the college's IT helpdesk, paired with a practical workshop on how to cleanly manage under-desk cables and optimize workspace ergonomics.",
            "duration": "1.5 Hours",
            "format": "Social event and demonstration.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "August 2026",
    "events": [
      {
        "header_date": "03 - Monday - August",
        "event_name": "World Wide Web Day",
        "actual_date": "August 01",
        "scheduled_date": "August 03, Monday",
        "reason": "Shifted to a weekday (Monday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Retro Web Design Challenge",
            "description": "A creative hackathon where students must recreate modern websites using only raw 90s-era HTML/CSS. No modern frameworks, Flexbox, or JavaScript allowed\u2014just tables, marquees, and inline styles!",
            "duration": "4 Hours",
            "format": "Design hackathon.",
            "prerequisites": "HTML and CSS proficiency."
          },
          {
            "type": "Others",
            "name": "Meme Creation & Internet Culture Trivia",
            "description": "Exploring the history of internet culture, viral trends, and the evolution of social media, capped off with a meme-creation contest.",
            "duration": "2 Hours",
            "format": "Social and creative event.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "September 2026",
    "events": [
      {
        "header_date": "08 - Tuesday - September",
        "event_name": "Data Stick Day",
        "actual_date": "September 06",
        "scheduled_date": "September 08, Tuesday",
        "reason": "Shifted to a weekday (Tuesday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Data Wrangling Bootcamp",
            "description": "A rigorous hands-on Pandas and Python workshop. Students are given a messy, unstructured, real-world dataset and must clean, analyze, and visualize it to extract meaningful insights.",
            "duration": "4 Hours",
            "format": "Coding workshop.",
            "prerequisites": "Python and basic statistics."
          },
          {
            "type": "Others",
            "name": "Data Storytelling & Visualization",
            "description": "Learning how to read charts, spot misleading statistics, and create beautiful, impactful infographics using user-friendly tools like Canva or Tableau Public.",
            "duration": "2 Hours",
            "format": "Workshop.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "10 - Thursday - September",
        "event_name": "Software Tester's Day",
        "actual_date": "September 09",
        "scheduled_date": "September 10, Thursday",
        "reason": "Shifted to avoid a conflict with a Staff Meeting on the actual date.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "QA Bug Hunt",
            "description": "Students are given a functional but heavily buggy software application. The team that writes the best automated tests (using Selenium or PyTest) to find the most edge-case bugs wins.",
            "duration": "3 Hours",
            "format": "Competitive testing event.",
            "prerequisites": "Basic programming and understanding of software testing."
          },
          {
            "type": "Others",
            "name": "UX Usability Testing",
            "description": "Attendees play the role of the end-user and learn how to report confusing interfaces, broken links, or poor navigation on popular college or local business websites.",
            "duration": "2 Hours",
            "format": "Hands-on UX review.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "14 - Monday - September",
        "event_name": "Programmers' Day",
        "actual_date": "September 13",
        "scheduled_date": "September 14, Monday",
        "reason": "Shifted to a weekday (Monday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "256-Byte Coding Challenge",
            "description": "An extreme code-golfing event. Students must write the most creative program, text game, or graphical output in exactly 256 bytes of code or less.",
            "duration": "2 Hours",
            "format": "Code-golf competition.",
            "prerequisites": "Advanced programming skills (usually in C, Python, or Assembly)."
          },
          {
            "type": "Others",
            "name": "Intro to Logic with Scratch/Blockly",
            "description": "A visually-driven, completely beginner-friendly introduction to programming logic using drag-and-drop block interfaces.",
            "duration": "2 Hours",
            "format": "Beginner coding lab.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "18 - Friday - September",
        "event_name": "Software Freedom Day",
        "actual_date": "September 19",
        "scheduled_date": "September 18, Friday",
        "reason": "Shifted to a weekday (Friday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Open Source Contribution Sprint",
            "description": "A guided workshop teaching students how to navigate large codebases, understand issue trackers, and make their very first pull request to a real open-source GitHub repository.",
            "duration": "5 Hours",
            "format": "Collaborative coding sprint.",
            "prerequisites": "Git fundamentals and basic programming."
          },
          {
            "type": "Others",
            "name": "Discovering Free Software Alternatives",
            "description": "A showcase of powerful, free alternatives to expensive proprietary software (e.g., GIMP/Krita vs Photoshop, LibreOffice vs Word, OBS vs Camtasia).",
            "duration": "2 Hours",
            "format": "Seminar and demonstration.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "October 2026",
    "events": [
      {
        "header_date": "07 - Wednesday - October",
        "event_name": "Women Programmers' Day",
        "actual_date": "October 06",
        "scheduled_date": "October 07, Wednesday",
        "reason": "Shifted to avoid a conflict with a Staff Meeting on the actual date.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Ada Lovelace Pair-Programming Challenge",
            "description": "A competitive programming event focusing strictly on algorithmic efficiency and teamwork. Participants must pair-program (two people sharing one screen and keyboard) to solve complex logical problems.",
            "duration": "3 Hours",
            "format": "Pair programming contest.",
            "prerequisites": "Strong algorithmic skills."
          },
          {
            "type": "Others",
            "name": "Women in Tech Panel",
            "description": "Inspiring talks and networking sessions featuring female leaders from various industries (tech, business, arts) discussing their career journeys, overcoming biases, and the future of work.",
            "duration": "1.5 Hours",
            "format": "Panel discussion and networking.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "09 - Friday - October",
        "event_name": "Supercomp Day",
        "actual_date": "October 11",
        "scheduled_date": "October 09, Friday",
        "reason": "Shifted to a weekday (Friday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Parallel Processing Lab",
            "description": "An advanced workshop teaching students how to use multiprocessing, threading, and distributed computing to dramatically speed up heavy data processing tasks.",
            "duration": "3 Hours",
            "format": "Advanced coding lab.",
            "prerequisites": "Advanced Python or C++."
          },
          {
            "type": "Others",
            "name": "History of Computing Showcase",
            "description": "A visual and interactive exhibition tracing the evolution of computers from the abacus and punch cards to quantum computing, featuring interactive retro emulators.",
            "duration": "3 Hours (Drop-in)",
            "format": "Exhibition.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "19 - Monday - October",
        "event_name": "Space Tech Day",
        "actual_date": "October 15",
        "scheduled_date": "October 19, Monday",
        "reason": "Shifted to avoid a conflict with CIE internal exams and to fall on a weekday.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "NASA API Hack",
            "description": "A web-development workshop where students learn to parse JSON APIs by building a live dashboard pulling data from NASA's open endpoints (such as tracking the live location of the International Space Station or fetching recent Mars Rover photos).",
            "duration": "3 Hours",
            "format": "Web development workshop.",
            "prerequisites": "HTML, CSS, JavaScript, and basic API knowledge."
          },
          {
            "type": "Others",
            "name": "Stargazing & Astronomy Tech",
            "description": "An evening outdoor event using mobile apps (like Stellarium) and physical telescopes to explore the night sky, understanding how software aids modern astronomy.",
            "duration": "2 Hours (Evening)",
            "format": "Outdoor experiential event.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "29 - Thursday - October",
        "event_name": "Internet Day",
        "actual_date": "October 29",
        "scheduled_date": "October 29, Thursday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Build Your Own Web Server",
            "description": "A bare-bones networking and backend workshop where students set up a local web server using Node.js/Express from absolute scratch, understanding HTTP protocols and routing.",
            "duration": "3 Hours",
            "format": "Backend coding workshop.",
            "prerequisites": "JavaScript fundamentals."
          },
          {
            "type": "Others",
            "name": "How the Internet Actually Works",
            "description": "A highly visual, non-technical workshop mapping out the physical infrastructure of the internet\u2014from submarine cables to IP addresses\u2014and showing exactly how a message travels across the globe.",
            "duration": "1.5 Hours",
            "format": "Interactive seminar.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "November 2026",
    "events": [
      {
        "header_date": "09 - Monday - November",
        "event_name": "STEM Day",
        "actual_date": "November 08",
        "scheduled_date": "November 09, Monday",
        "reason": "Shifted to a weekday (Monday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "Combined",
            "name": "Tech for the Community",
            "description": "IT students partner up with non-IT students to host a tech workshop for local school children. They will teach basic robotics, Scratch programming, or run simple science experiments.",
            "duration": "Half Day (4-5 Hours)",
            "format": "Community outreach and mentoring.",
            "prerequisites": "Willingness to teach and mentor young students."
          }
        ]
      },
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
          },
          {
            "type": "Others",
            "name": "Citizen Science Project",
            "description": "Teaching attendees how to use their smartphones and personal computers to contribute to global science projects, such as participating in bird tracking networks or donating idle CPU time to protein folding computations.",
            "duration": "1.5 Hours",
            "format": "Workshop.",
            "prerequisites": "None."
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
          },
          {
            "type": "Others",
            "name": "Password Party",
            "description": "A fun, practical session where students audit their password strength, learn to use password managers effectively, and are guided through setting up Two-Factor Authentication (2FA) for all their important accounts.",
            "duration": "1.5 Hours",
            "format": "Hands-on seminar.",
            "prerequisites": "None. Bring a laptop/smartphone."
          }
        ]
      }
    ]
  },
  {
    "month": "December 2026",
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
          },
          {
            "type": "Others",
            "name": "3D Printing & Modeling Demo",
            "description": "A beginner session using simple tools like Tinkercad to design a basic object and watching it come to life on a 3D printer.",
            "duration": "2 Hours",
            "format": "Interactive demonstration.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "09 - Wednesday - December",
        "event_name": "Language Processing Day",
        "actual_date": "December 09",
        "scheduled_date": "December 09, Wednesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Build a Custom Discord Chatbot",
            "description": "A fun workshop using Python and the Discord API (integrated with NLTK or HuggingFace) to build a conversational agent that can respond to student queries or moderate a channel.",
            "duration": "3 Hours",
            "format": "Project-based workshop.",
            "prerequisites": "Python programming."
          },
          {
            "type": "Others",
            "name": "Prompt Engineering Workshop",
            "description": "Teaching the art of communicating with Large Language Models. Attendees will learn frameworks to construct prompts that yield high-quality outputs for non-technical workflows like drafting emails, brainstorming, and summarizing documents.",
            "duration": "2 Hours",
            "format": "Interactive seminar.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "22 - Tuesday - December",
        "event_name": "National Maths Day",
        "actual_date": "December 22",
        "scheduled_date": "December 22, Tuesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Project Euler Speedrun",
            "description": "A competitive coding event where students race to solve mathematically intensive programming puzzles that require deep algorithmic efficiency rather than just brute-force processing.",
            "duration": "3 Hours",
            "format": "Competitive coding.",
            "prerequisites": "Strong math and algorithm skills."
          },
          {
            "type": "Others",
            "name": "Fun Math & Game Theory",
            "description": "Interactive games (like the Prisoner's Dilemma) and visual puzzles that demonstrate how underlying mathematical principles govern everyday decisions, economics, and human behavior.",
            "duration": "2 Hours",
            "format": "Interactive gaming session.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "January 2027",
    "events": [
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
          },
          {
            "type": "Others",
            "name": "Securing Your Digital Life",
            "description": "A practical seminar reviewing app permissions, smartphone privacy settings, and data broker opt-outs to help students protect their personal information online.",
            "duration": "1.5 Hours",
            "format": "Interactive seminar.",
            "prerequisites": "None. Bring a smartphone."
          }
        ]
      }
    ]
  },
  {
    "month": "February 2027",
    "events": [
      {
        "header_date": "12 - Friday - February",
        "event_name": "Safer Internet Day",
        "actual_date": "February 13",
        "scheduled_date": "February 12, Friday",
        "reason": "Shifted to a weekday (Friday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Hack & Defend\" Mini-CTF (Capture The Flag)",
            "description": "A hands-on, competitive workshop where students are given an intentionally vulnerable sandboxed web application. They will learn to identify common vulnerabilities (like SQL injection, Cross-Site Scripting, and broken authentication) and then write patches to secure the code.",
            "duration": "3 Hours",
            "format": "Team-based competition (2-3 members).",
            "prerequisites": "Basic knowledge of HTML, JavaScript, and introductory backend concepts."
          },
          {
            "type": "Others",
            "name": "Digital Footprint & Scams Awareness Workshop",
            "description": "An interactive, non-technical seminar focused on personal cyber hygiene. Attendees will learn how to audit their social media privacy settings, recognize sophisticated phishing attempts, and understand the permanence of their digital footprint.",
            "duration": "1.5 Hours",
            "format": "Presentation followed by a live Q&A and a hands-on privacy checkup.",
            "prerequisites": "None. Open to all students and faculty."
          }
        ]
      },
      {
        "header_date": "26 - Friday - February",
        "event_name": "National Sci. Day",
        "actual_date": "February 28",
        "scheduled_date": "February 26, Friday",
        "reason": "Shifted to a weekday (Friday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Code to Cosmos\" Hackathon",
            "description": "An intensive coding sprint where students use Python and libraries like Matplotlib or SciPy to build interactive physics simulations (e.g., gravity models) or visualize open-source astronomy datasets provided by NASA/ESA.",
            "duration": "6 Hours",
            "format": "Project building and presentation.",
            "prerequisites": "Intermediate Python programming."
          },
          {
            "type": "Others",
            "name": "Science & Tech Demo Fair",
            "description": "An open-house exhibition featuring interactive stalls hosted by B.Tech students. Non-technical attendees can experience working robotics, try out AR/VR headsets, and participate in fun, accessible science experiments.",
            "duration": "4 Hours (Drop-in)",
            "format": "Exhibition / Fair.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "March 2027",
    "events": [
      {
        "header_date": "15 - Monday - March",
        "event_name": "Pi Day",
        "actual_date": "March 14",
        "scheduled_date": "March 15, Monday",
        "reason": "Shifted to a weekday (Monday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Pi-thon Code Golf",
            "description": "A creative programming competition where students must write algorithms to calculate Pi to the highest precision using the *fewest* possible lines of Python code, or alternatively, generate a graphical visualization of Pi using code.",
            "duration": "2 Hours",
            "format": "Individual competition.",
            "prerequisites": "Python fundamentals."
          },
          {
            "type": "Others",
            "name": "Math & Logic Puzzle Room",
            "description": "A casual, fun event featuring low-barrier visual logic puzzles, Sudoku challenges, and physical puzzle boxes. It concludes with a pie-eating contest to celebrate the theme!",
            "duration": "2 Hours",
            "format": "Casual drop-in activities.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "26 - Friday - March",
        "event_name": "Cryptography Day",
        "actual_date": "March 26",
        "scheduled_date": "March 26, Friday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
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
          },
          {
            "type": "Others",
            "name": "Personal Data Backup Workshop",
            "description": "Explaining the 3-2-1 backup rule, comparing cloud vs. local storage, and automating phone backups so attendees never lose a photo or document again.",
            "duration": "1.5 Hours",
            "format": "Demonstration and setup session.",
            "prerequisites": "None."
          }
        ]
      }
    ]
  },
  {
    "month": "April 2027",
    "events": [
      {
        "header_date": "02 - Friday - April",
        "event_name": "National VR Day",
        "actual_date": "April 02",
        "scheduled_date": "April 02, Friday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Build Your First VR World",
            "description": "An introductory lab teaching the basics of spatial computing. Students will use Unity and WebXR to build and deploy a simple, interactive 3D virtual environment that can be viewed in a browser or headset.",
            "duration": "4 Hours",
            "format": "Guided hands-on lab.",
            "prerequisites": "Basic programming logic; prior C# knowledge is a plus but not required."
          },
          {
            "type": "Others",
            "name": "VR Experience Zone",
            "description": "An open setup of Oculus/Vive headsets allowing students across all departments to try out immersive educational VR apps, virtual tourism, and spatial art tools like Tilt Brush.",
            "duration": "4 Hours (Drop-in)",
            "format": "Experiential showcase.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "05 - Monday - April",
        "event_name": "Hug a Comp. Day",
        "actual_date": "April 04",
        "scheduled_date": "April 05, Monday",
        "reason": "Shifted to a weekday (Monday) to adhere to the weekday-only policy.",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Hardware Disassembly Relay",
            "description": "A high-energy hardware workshop where teams race to safely disassemble an old CPU tower, correctly identify all internal components (motherboard, RAM, GPU, PSU), and put it back together in working order.",
            "duration": "2 Hours",
            "format": "Team relay race.",
            "prerequisites": "Basic understanding of computer architecture."
          },
          {
            "type": "Others",
            "name": "Tech Petting Zoo & Basic Troubleshooting",
            "description": "A beginner-friendly workshop demystifying computer hardware. Attendees will learn how to fix common laptop issues, understand what RAM and SSDs actually do, and how to physically clean their devices.",
            "duration": "1.5 Hours",
            "format": "Demonstration and guided practice.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "09 - Friday - April",
        "event_name": "IoT Day",
        "actual_date": "April 09",
        "scheduled_date": "April 09, Friday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "B.Tech",
            "name": "Connected Devices Hackathon",
            "description": "Building smart home integrations using microcontrollers (NodeMCU, ESP32) and open-source platforms like Home Assistant to automate environmental sensors.",
            "duration": "Full Day (8 Hours)",
            "format": "Hardware Hackathon.",
            "prerequisites": "Python or C++ and basic electronics understanding."
          },
          {
            "type": "Others",
            "name": "Smart Home Demo",
            "description": "Experiencing smart lights, plugs, and routines. A non-technical showcase explaining how devices communicate via Wi-Fi and Zigbee to make everyday life easier.",
            "duration": "2 Hours (Drop-in)",
            "format": "Interactive exhibition.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "26 - Monday - April",
        "event_name": "Int. Girls in ICT Day",
        "actual_date": "April 26",
        "scheduled_date": "April 26, Monday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
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
          },
          {
            "type": "Others",
            "name": "Tech for Daily Life",
            "description": "A showcase on automating everyday tasks to boost personal productivity. Covers tools like IFTTT, setting up smart home routines, and using advanced features of daily apps (Excel, Notion).",
            "duration": "1.5 Hours",
            "format": "Seminar/Demonstration.",
            "prerequisites": "None."
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
          },
          {
            "type": "Others",
            "name": "Experiencing Tech through Assistive Devices",
            "description": "A perspective-shifting workshop where attendees navigate popular websites and apps using only screen readers, high contrast modes, and keyboard navigation to understand the importance of inclusive design.",
            "duration": "2 Hours",
            "format": "Interactive empathy workshop.",
            "prerequisites": "None."
          }
        ]
      },
      {
        "header_date": "25 - Tuesday - May",
        "event_name": "Geek Pride Day",
        "actual_date": "May 25",
        "scheduled_date": "May 25, Tuesday",
        "reason": "Scheduled on the actual commemorative date (falls on a free weekday).",
        "activities": [
          {
            "type": "Combined",
            "name": "Cosplay & Code/Trivia Relay",
            "description": "A fun, fast-paced relay race. Teams of 4 dress up in pop-culture or tech themes. Programmers write code to build a simple web app for 10 minutes, then tag in non-programmers who must answer geek culture trivia or solve logic puzzles to unlock the next coding round.",
            "duration": "2 Hours",
            "format": "Fun team competition.",
            "prerequisites": "Enthusiastic attitude; teams must mix technical and non-technical members."
          }
        ]
      }
    ]
  }
];

