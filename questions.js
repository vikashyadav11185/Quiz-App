// Questions Data
const questionsData = {
  // Mathematics Category
  mathematics: {
    // Easy level questions
    easy: [
      {
        question: "What is 8 × 7?",
        options: ["54", "56", "48", "64"],
        correctIndex: 1,
      },
      {
        question: "Which of the following is a prime number?",
        options: ["15", "21", "29", "33"],
        correctIndex: 2,
      },
      {
        question: "What is the area of a square with side length 6 cm?",
        options: ["24 cm²", "30 cm²", "36 cm²", "42 cm²"],
        correctIndex: 2,
      },
      {
        question: "If x + 5 = 12, what is the value of x?",
        options: ["5", "7", "8", "17"],
        correctIndex: 1,
      },
      {
        question: "What is 1/4 + 1/2?",
        options: ["3/4", "1/6", "2/6", "1/8"],
        correctIndex: 0,
      },
      {
        question:
          "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
        options: ["13 cm", "26 cm", "40 cm", "30 cm"],
        correctIndex: 1,
      },
      {
        question: "What is 20% of 80?",
        options: ["8", "16", "20", "24"],
        correctIndex: 1,
      },
      {
        question: "If a = 3 and b = 4, what is a² + b²?",
        options: ["7", "12", "25", "49"],
        correctIndex: 2,
      },
      {
        question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
        options: ["9", "10", "12", "14"],
        correctIndex: 1,
      },
      {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correctIndex: 1,
      },
    ],
    // Medium level questions
    medium: [
      {
        question: "Solve for x: 3x - 7 = 14",
        options: ["5", "7", "9", "21"],
        correctIndex: 1,
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.13", "3.14", "3.15", "3.16"],
        correctIndex: 1,
      },
      {
        question: "If f(x) = 2x² + 3x - 1, what is f(2)?",
        options: ["9", "11", "13", "15"],
        correctIndex: 2,
      },
      {
        question: "The sum of the interior angles of a triangle is?",
        options: ["90°", "180°", "270°", "360°"],
        correctIndex: 1,
      },
      {
        question: "What is the square root of 169?",
        options: ["11", "12", "13", "14"],
        correctIndex: 2,
      },
      {
        question: "Solve: log₁₀(100)",
        options: ["1", "2", "10", "100"],
        correctIndex: 1,
      },
      {
        question: "If a circle has a radius of 5 cm, what is its area?",
        options: ["25π cm²", "10π cm²", "15π cm²", "20π cm²"],
        correctIndex: 0,
      },
      {
        question: "Which of the following is equivalent to 3⁴?",
        options: ["9", "27", "64", "81"],
        correctIndex: 3,
      },
      {
        question:
          "What is the midpoint of the line segment from (2, 3) to (8, 11)?",
        options: ["(4, 6)", "(5, 7)", "(6, 8)", "(5, 6)"],
        correctIndex: 1,
      },
      {
        question: "If sin(θ) = 0.5, what is θ in degrees?",
        options: ["25°", "30°", "45°", "60°"],
        correctIndex: 1,
      },
    ],
    // Hard level questions
    hard: [
      {
        question: "What is the derivative of f(x) = x³ - 4x² + 7x - 2?",
        options: [
          "f'(x) = 3x² - 8x + 7",
          "f'(x) = 3x² - 4x + 7",
          "f'(x) = 3x² - 8x - 2",
          "f'(x) = x² - 8x + 7",
        ],
        correctIndex: 0,
      },
      {
        question: "If x² + y² = 25 and x + y = 7, what is the value of xy?",
        options: ["10", "12", "14", "16"],
        correctIndex: 1,
      },
      {
        question:
          "What is the solution to the equation 2cos²x - cosx - 1 = 0 in the interval [0, 2π)?",
        options: [
          "x = π/3, x = π",
          "x = π/4, x = 3π/4",
          "x = π/6, x = 5π/6",
          "x = 0, x = π/2",
        ],
        correctIndex: 2,
      },
      {
        question: "What is the determinant of the matrix [[4, 3], [2, 1]]?",
        options: ["-2", "0", "2", "10"],
        correctIndex: 0,
      },
      {
        question: "Solve the differential equation dy/dx = x²y where y(1) = 2.",
        options: [
          "y = 2e^(x³/3-1/3)",
          "y = 2e^(x³-1)",
          "y = 2e^(x²/2-1/2)",
          "y = 2e^(x/3-1/3)",
        ],
        correctIndex: 0,
      },
      {
        question:
          "What is the sum of the infinite geometric series 1/3 + 1/9 + 1/27 + ...?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correctIndex: 2,
      },
      {
        question: "If z = 3 + 4i, what is |z|² + |z̄|²?",
        options: ["25", "50", "10", "34"],
        correctIndex: 1,
      },
      {
        question: "What is the limit of (sin(x))/x as x approaches 0?",
        options: ["0", "1", "∞", "undefined"],
        correctIndex: 1,
      },
      {
        question:
          "For which value of k does the system of equations x + 2y = 5 and kx + 4y = 10 have infinitely many solutions?",
        options: ["k = 1", "k = 2", "k = 3", "k = 4"],
        correctIndex: 1,
      },
      {
        question: "What is the integral of sec²(x) with respect to x?",
        options: [
          "tan(x) + C",
          "sec(x) + C",
          "ln|sec(x)| + C",
          "ln|sec(x) + tan(x)| + C",
        ],
        correctIndex: 0,
      },
    ],
  },

  // Science Category
  science: {
    // Easy level questions
    easy: [
      {
        question: "Which of the following is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        correctIndex: 3,
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H₂O", "CO₂", "O₂", "NaCl"],
        correctIndex: 0,
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Saturn", "Mars", "Venus"],
        correctIndex: 2,
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Brain", "Skin"],
        correctIndex: 3,
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctIndex: 1,
      },
      {
        question: "What is the basic unit of life?",
        options: ["Atom", "Cell", "Tissue", "Organ"],
        correctIndex: 1,
      },
      {
        question: "How many bones are there in the adult human body?",
        options: ["106", "206", "306", "406"],
        correctIndex: 1,
      },
      {
        question: "Which of these is a non-renewable energy source?",
        options: ["Solar energy", "Wind energy", "Coal", "Hydroelectric power"],
        correctIndex: 2,
      },
      {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Polaris", "Sirius", "The Sun"],
        correctIndex: 3,
      },
      {
        question: "What is the pH value of pure water?",
        options: ["4", "7", "9", "14"],
        correctIndex: 1,
      },
    ],
    // Medium level questions
    medium: [
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctIndex: 2,
      },
      {
        question: "Which of the following is NOT a part of the cell theory?",
        options: [
          "All living things are made of cells",
          "Cells are the basic unit of structure and function",
          "All cells come from pre-existing cells",
          "Cells contain genetic material",
        ],
        correctIndex: 3,
      },
      {
        question: "Which element has the highest electronegativity?",
        options: ["Oxygen", "Nitrogen", "Chlorine", "Fluorine"],
        correctIndex: 3,
      },
      {
        question: "What is the main function of mitochondria in a cell?",
        options: [
          "Protein synthesis",
          "Energy production",
          "Cell division",
          "Waste removal",
        ],
        correctIndex: 1,
      },
      {
        question:
          "What law states that energy cannot be created or destroyed, only transformed?",
        options: [
          "Newton's First Law",
          "Law of Conservation of Energy",
          "Ohm's Law",
          "Boyle's Law",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the IUPAC name for CH₃COOH?",
        options: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of these is NOT a type of electromagnetic radiation?",
        options: ["X-rays", "Gamma rays", "Sound waves", "Ultraviolet rays"],
        correctIndex: 2,
      },
      {
        question: "What type of bond is formed by sharing electrons?",
        options: [
          "Ionic bond",
          "Covalent bond",
          "Hydrogen bond",
          "Metallic bond",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the process by which plants make their own food?",
        options: [
          "Respiration",
          "Photosynthesis",
          "Fermentation",
          "Transpiration",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of these is a vector quantity?",
        options: ["Temperature", "Mass", "Time", "Velocity"],
        correctIndex: 3,
      },
    ],
    // Hard level questions
    hard: [
      {
        question:
          "Which of the following is NOT part of quantum mechanics's Copenhagen interpretation?",
        options: [
          "Wave function collapse",
          "Complementarity",
          "Hidden variables",
          "Uncertainty principle",
        ],
        correctIndex: 2,
      },
      {
        question: "What is the half-life of Carbon-14?",
        options: ["1,460 years", "5,730 years", "8,400 years", "10,000 years"],
        correctIndex: 1,
      },
      {
        question:
          "Which enzyme unwinds the DNA double helix during replication?",
        options: ["DNA polymerase", "DNA helicase", "DNA ligase", "Primase"],
        correctIndex: 1,
      },
      {
        question: "What is the strongest known force in physics?",
        options: [
          "Electromagnetic force",
          "Gravitational force",
          "Weak nuclear force",
          "Strong nuclear force",
        ],
        correctIndex: 3,
      },
      {
        question:
          "What is the Henderson-Hasselbalch equation used to calculate?",
        options: [
          "Molarity",
          "Redox potential",
          "pH of buffer solutions",
          "Activation energy",
        ],
        correctIndex: 2,
      },
    ],
  },
  // General Knowledge Category
  gk: {
    // Easy level questions
    easy: [
      {
        question: "What is the capital of France?",
        options: ["Madrid", "Paris", "Rome", "Berlin"],
        correctIndex: 1,
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Mars", "Venus", "Mercury"],
        correctIndex: 3,
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Mark Twain",
          "J.K. Rowling",
        ],
        correctIndex: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        correctIndex: 1,
      },
      {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2,
      },
      {
        question: "What is the national currency of the United Kingdom?",
        options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
        correctIndex: 1,
      },
      {
        question: "Which ocean is the largest by surface area?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctIndex: 2,
      },
      {
        question: "Who was the first President of the United States?",
        options: [
          "Abraham Lincoln",
          "George Washington",
          "John Adams",
          "Thomas Jefferson",
        ],
        correctIndex: 1,
      },
      {
        question: "Which year did World War II end?",
        options: ["1942", "1945", "1950", "1939"],
        correctIndex: 1,
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctIndex: 2,
      },
    ],
    // Medium level questions
    medium: [
      {
        question: "Which scientist developed the theory of general relativity?",
        options: [
          "Isaac Newton",
          "Galileo Galilei",
          "Albert Einstein",
          "Nikola Tesla",
        ],
        correctIndex: 2,
      },
      {
        question: "Who discovered penicillin?",
        options: [
          "Louis Pasteur",
          "Alexander Fleming",
          "Marie Curie",
          "Gregor Mendel",
        ],
        correctIndex: 1,
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctIndex: 1,
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arctic", "Antarctic", "Gobi"],
        correctIndex: 2,
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Michelangelo",
        ],
        correctIndex: 2,
      },
      {
        question: "Which two elements make up water?",
        options: [
          "Oxygen & Nitrogen",
          "Hydrogen & Oxygen",
          "Helium & Oxygen",
          "Carbon & Hydrogen",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the national sport of Canada?",
        options: ["Basketball", "Hockey", "Soccer", "Cricket"],
        correctIndex: 1,
      },
      {
        question: "Which continent has the highest population?",
        options: ["Europe", "North America", "Asia", "Africa"],
        correctIndex: 2,
      },
      {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        correctIndex: 1,
      },
      {
        question: "Which year did the first man land on the moon?",
        options: ["1959", "1965", "1969", "1972"],
        correctIndex: 2,
      },
    ],
    // Hard level questions
    hard: [
      {
        question: "What is the deepest ocean trench in the world?",
        options: [
          "Tonga Trench",
          "Mariana Trench",
          "Java Trench",
          "Puerto Rico Trench",
        ],
        correctIndex: 1,
      },
      {
        question: "Who was the first person to climb Mount Everest?",
        options: [
          "Edmund Hillary & Tenzing Norgay",
          "George Mallory",
          "Reinhold Messner",
          "Anatoli Boukreev",
        ],
        correctIndex: 0,
      },
      {
        question: "Which civilization built Machu Picchu?",
        options: ["Maya", "Aztec", "Inca", "Olmec"],
        correctIndex: 2,
      },
      {
        question: "Which scientist is known for his work on radioactivity?",
        options: [
          "Marie Curie",
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
        ],
        correctIndex: 0,
      },
      {
        question: "Which country has the most UNESCO World Heritage Sites?",
        options: ["China", "Italy", "India", "Spain"],
        correctIndex: 1,
      },
      {
        question:
          "What was the first element to be discovered using spectroscopy?",
        options: ["Helium", "Oxygen", "Hydrogen", "Gold"],
        correctIndex: 0,
      },
      {
        question:
          "What is the name of the first artificial satellite launched into space?",
        options: ["Voyager 1", "Sputnik 1", "Apollo 11", "Hubble"],
        correctIndex: 1,
      },
      {
        question:
          "Who was the first female Prime Minister of the United Kingdom?",
        options: [
          "Margaret Thatcher",
          "Angela Merkel",
          "Indira Gandhi",
          "Jacinda Ardern",
        ],
        correctIndex: 0,
      },
      {
        question: "Which city has the highest population in the world?",
        options: ["New York", "Tokyo", "Shanghai", "Delhi"],
        correctIndex: 1,
      },
      {
        question: "Which is the largest moon in our Solar System?",
        options: ["Titan", "Ganymede", "Io", "Europa"],
        correctIndex: 1,
      },
    ],
  },
  mncs: {
    easy: [
      {
        question: "Which company is known for its iPhones?",
        options: ["Google", "Samsung", "Apple", "Microsoft"],
        correctIndex: 2,
      },
      {
        question: "Which fast-food chain is famous for its Big Mac?",
        options: ["KFC", "McDonald's", "Burger King", "Subway"],
        correctIndex: 1,
      },
      {
        question: "Which company owns the e-commerce platform 'Amazon'?",
        options: ["Microsoft", "Amazon", "Alibaba", "eBay"],
        correctIndex: 1,
      },
      {
        question:
          "Which of these companies is a major automobile manufacturer?",
        options: ["Tesla", "Sony", "Google", "Facebook"],
        correctIndex: 0,
      },
      {
        question: "What does 'MNC' stand for?",
        options: [
          "Massive National Corporation",
          "Multinational Corporation",
          "Mega Network Company",
          "Mainstream National Council",
        ],
        correctIndex: 1,
      },
      {
        question: "Which company is known for its Windows operating system?",
        options: ["Google", "IBM", "Microsoft", "Apple"],
        correctIndex: 2,
      },
      {
        question: "Which beverage company produces Coca-Cola?",
        options: ["PepsiCo", "Nestlé", "The Coca-Cola Company", "Dr Pepper"],
        correctIndex: 2,
      },
      {
        question: "Which MNC owns Instagram and WhatsApp?",
        options: ["Apple", "Amazon", "Meta (Facebook)", "Google"],
        correctIndex: 2,
      },
      {
        question: "Which airline is based in the United Arab Emirates?",
        options: ["Emirates", "Delta", "British Airways", "Lufthansa"],
        correctIndex: 0,
      },
      {
        question: "Which MNC is known for its search engine and Android OS?",
        options: ["Google", "Yahoo", "Microsoft", "Apple"],
        correctIndex: 0,
      },
    ],
    medium: [
      {
        question:
          "Which company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne?",
        options: ["Microsoft", "Apple", "Google", "Intel"],
        correctIndex: 1,
      },
      {
        question: "Which Indian MNC is known for its IT services worldwide?",
        options: [
          "Reliance",
          "Tata Consultancy Services (TCS)",
          "Infosys",
          "Wipro",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which of these companies is NOT primarily known for making smartphones?",
        options: ["Sony", "Nokia", "Dell", "Huawei"],
        correctIndex: 2,
      },
      {
        question: "Which car brand is owned by Volkswagen Group?",
        options: ["Ford", "Audi", "Honda", "Toyota"],
        correctIndex: 1,
      },
      {
        question: "What does IBM stand for?",
        options: [
          "International Business Machines",
          "Innovative Brand Management",
          "Internet Based Market",
          "Intelligent Business Machines",
        ],
        correctIndex: 0,
      },
      {
        question: "Which retail company owns Whole Foods?",
        options: ["Walmart", "Amazon", "Target", "Costco"],
        correctIndex: 1,
      },
      {
        question: "Which MNC is based in South Korea?",
        options: ["Sony", "Samsung", "Tesla", "Nokia"],
        correctIndex: 1,
      },
      {
        question: "Which fast-food brand is famous for its 'Whopper' burger?",
        options: ["McDonald's", "Subway", "Burger King", "KFC"],
        correctIndex: 2,
      },
      {
        question:
          "Which pharmaceutical company developed the COVID-19 vaccine with BioNTech?",
        options: ["Pfizer", "Moderna", "Johnson & Johnson", "AstraZeneca"],
        correctIndex: 0,
      },
      {
        question: "Which Chinese company is a leading player in e-commerce?",
        options: ["Amazon", "Alibaba", "Tencent", "Xiaomi"],
        correctIndex: 1,
      },
    ],
    hard: [
      {
        question: "Which luxury brand is owned by LVMH?",
        options: ["Gucci", "Louis Vuitton", "Versace", "Prada"],
        correctIndex: 1,
      },
      {
        question: "Which MNC was originally named 'Blue Ribbon Sports'?",
        options: ["Nike", "Adidas", "Puma", "Reebok"],
        correctIndex: 0,
      },
      {
        question:
          "Which MNC is the world's largest semiconductor manufacturer?",
        options: ["Intel", "TSMC", "Samsung", "Qualcomm"],
        correctIndex: 1,
      },
      {
        question: "Which automobile company owns Jaguar and Land Rover?",
        options: ["Ford", "Tata Motors", "Volkswagen", "BMW"],
        correctIndex: 1,
      },
      {
        question: "Which company was founded by Larry Page and Sergey Brin?",
        options: ["Apple", "Microsoft", "Google", "Amazon"],
        correctIndex: 2,
      },
    ],
  },
  technology: {
    easy: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Power Unit",
          "Core Processing Unit",
        ],
        correctIndex: 0,
      },
      {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        correctIndex: 2,
      },
      {
        question: "Which device is used to store data permanently?",
        options: ["RAM", "SSD", "Processor", "Cache"],
        correctIndex: 1,
      },
    ],
    medium: [
      {
        question: "Which programming language is used to build Android apps?",
        options: ["Swift", "Java", "Python", "C++"],
        correctIndex: 1,
      },
      {
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Tech Transfer Program",
          "Hyper Transfer Text Program",
          "Hyperlink Transfer Process",
        ],
        correctIndex: 0,
      },
      {
        question: "Which company designed the first microprocessor?",
        options: ["Intel", "AMD", "IBM", "Motorola"],
        correctIndex: 0,
      },
    ],
    hard: [
      {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Alan Turing", "Steve Jobs"],
        correctIndex: 1,
      },
      {
        question:
          "Which encryption method is commonly used for securing websites?",
        options: ["AES", "SHA-256", "RSA", "MD5"],
        correctIndex: 2,
      },
      {
        question:
          "Which is the world's first electronic general-purpose computer?",
        options: ["ENIAC", "IBM 360", "UNIVAC", "Altair 8800"],
        correctIndex: 0,
      },
    ],
  },
  technology: {
    easy: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Power Unit",
          "Core Processing Unit",
        ],
        correctIndex: 0,
      },
      {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        correctIndex: 2,
      },
      {
        question: "Which device is used to store data permanently?",
        options: ["RAM", "SSD", "Processor", "Cache"],
        correctIndex: 1,
      },
      {
        question: "Which of these is an open-source operating system?",
        options: ["Windows", "Linux", "MacOS", "iOS"],
        correctIndex: 1,
      },
      {
        question: "What does USB stand for?",
        options: [
          "Universal Serial Bus",
          "Universal System Backup",
          "User Secure Buffer",
          "Ultra Speed Booster",
        ],
        correctIndex: 0,
      },
      {
        question: "Which company created the iPhone?",
        options: ["Samsung", "Google", "Apple", "Microsoft"],
        correctIndex: 2,
      },
      {
        question: "What does Wi-Fi stand for?",
        options: [
          "Wireless Fidelity",
          "Wired Fire",
          "Wide Frequency",
          "Wireless Frequency",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the full form of AI?",
        options: [
          "Artificial Intelligence",
          "Automated Interface",
          "Advanced Integration",
          "Artificial Interaction",
        ],
        correctIndex: 0,
      },
      {
        question: "Which key is used to refresh a webpage?",
        options: ["F5", "Ctrl + R", "Alt + R", "Shift + R"],
        correctIndex: 0,
      },
      {
        question: "Which social media platform was founded by Mark Zuckerberg?",
        options: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
        correctIndex: 2,
      },
    ],
    medium: [
      {
        question: "Which programming language is used to build Android apps?",
        options: ["Swift", "Java", "Python", "C++"],
        correctIndex: 1,
      },
      {
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Tech Transfer Program",
          "Hyper Transfer Text Program",
          "Hyperlink Transfer Process",
        ],
        correctIndex: 0,
      },
      {
        question: "Which company designed the first microprocessor?",
        options: ["Intel", "AMD", "IBM", "Motorola"],
        correctIndex: 0,
      },
      {
        question: "Which of these is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correctIndex: 2,
      },
      {
        question: "What is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        correctIndex: 1,
      },
      {
        question: "Which company created the first graphical web browser?",
        options: ["Microsoft", "Netscape", "Apple", "Google"],
        correctIndex: 1,
      },
      {
        question: "What does GPU stand for?",
        options: [
          "General Processing Unit",
          "Graphics Processing Unit",
          "Global Power Unit",
          "Graphical Performance Utility",
        ],
        correctIndex: 1,
      },
      {
        question: "Which type of storage device is fastest?",
        options: ["HDD", "SSD", "CD-ROM", "Floppy Disk"],
        correctIndex: 1,
      },
      {
        question: "What does VPN stand for?",
        options: [
          "Virtual Personal Network",
          "Very Private Network",
          "Virtual Private Network",
          "Verified Protected Network",
        ],
        correctIndex: 2,
      },
      {
        question:
          "Which programming language is commonly used for AI development?",
        options: ["C", "Java", "Python", "PHP"],
        correctIndex: 2,
      },
    ],
    hard: [
      {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Alan Turing", "Steve Jobs"],
        correctIndex: 1,
      },
      {
        question:
          "Which encryption method is commonly used for securing websites?",
        options: ["AES", "SHA-256", "RSA", "MD5"],
        correctIndex: 2,
      },
      {
        question:
          "Which is the world's first electronic general-purpose computer?",
        options: ["ENIAC", "IBM 360", "UNIVAC", "Altair 8800"],
        correctIndex: 0,
      },
      {
        question:
          "Which company developed the first commercial microprocessor?",
        options: ["IBM", "Intel", "AMD", "Apple"],
        correctIndex: 1,
      },
      {
        question: "Which of the following is NOT a type of machine learning?",
        options: ["Supervised", "Unsupervised", "Reinforcement", "Recursive"],
        correctIndex: 3,
      },
      {
        question:
          "Which programming language is used in blockchain development?",
        options: ["Python", "Solidity", "Java", "C++"],
        correctIndex: 1,
      },
      {
        question: "What does DNS stand for?",
        options: [
          "Data Network Service",
          "Domain Name System",
          "Digital Naming Structure",
          "Dynamic Network Security",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the main purpose of a quantum computer?",
        options: [
          "Perform classical calculations faster",
          "Simulate molecular interactions efficiently",
          "Improve gaming graphics",
          "Increase internet speed",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which company developed the first successful GUI-based operating system?",
        options: ["Microsoft", "Apple", "Xerox", "IBM"],
        correctIndex: 2,
      },
      {
        question: "What is the primary function of a compiler?",
        options: [
          "Execute programs",
          "Convert high-level code into machine code",
          "Debug software",
          "Manage memory allocation",
        ],
        correctIndex: 1,
      },
    ],
  },
};
