const courses = [
  {
    courseCode: "CSCE",
    courseShortNumber: "102",
    courseLongNumber: "1000",
    courseTitle: "Introduction to Computers and their Applications (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "106",
    courseLongNumber: "1001",
    courseTitle: "Fundamentals of Computing I (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "110",
    courseLongNumber: "1101",
    courseTitle: "Fundamentals of Computing II (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "000",
    courseLongNumber: "1102",
    courseTitle: "Fundamentals of Computing II Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "321",
    courseLongNumber: "2202",
    courseTitle: "Analysis and Design of Algorithms (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "000",
    courseLongNumber: "2203",
    courseTitle: "Analysis and Design of Algorithms Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "230",
    courseLongNumber: "2301",
    courseTitle: "Digital Design I (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "239L",
    courseLongNumber: "2302",
    courseTitle: "Digital Design I Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "231",
    courseLongNumber: "2303",
    courseTitle:
      "Computer Organization and Assembly Language Programming (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "253",
    courseLongNumber: "2501",
    courseTitle: "Fundamentals of Database Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "201",
    courseLongNumber: "2502",
    courseTitle: "Information Technology (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "315",
    courseLongNumber: "3101",
    courseTitle: "Programming Language (1-3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "316",
    courseLongNumber: "3102",
    courseTitle: "Programming in Java (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "317",
    courseLongNumber: "3103",
    courseTitle: "Object Oriented Programming (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "325",
    courseLongNumber: "3104",
    courseTitle: "Concepts of Programming Languages (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "330",
    courseLongNumber: "3301",
    courseTitle: "Computer Architecture (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "339L",
    courseLongNumber: "3302",
    courseTitle: "Computer Architecture Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "332",
    courseLongNumber: "3303",
    courseTitle: "Fundamental Microelectronics (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "337",
    courseLongNumber: "3304",
    courseTitle: "Digital Design II (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "333",
    courseLongNumber: "3311",
    courseTitle: "Data and Computer Communications (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "435",
    courseLongNumber: "3312",
    courseTitle: "Computer Networks (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "439L",
    courseLongNumber: "3313",
    courseTitle: "Computer Networks Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "345",
    courseLongNumber: "3401",
    courseTitle: "Operating Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "000",
    courseLongNumber: "3402",
    courseTitle: "Operating Systems Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "342",
    courseLongNumber: "3421",
    courseTitle: "Fundamentals of Computing and Communication Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "346",
    courseLongNumber: "3422",
    courseTitle: "Introduction to Information Security (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "465",
    courseLongNumber: "3601",
    courseTitle: "Artificial Intelligence (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "363",
    courseLongNumber: "3611",
    courseTitle: "Digital Signal Processing (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "341",
    courseLongNumber: "3701",
    courseTitle: "Software Engineering (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "447",
    courseLongNumber: "4101",
    courseTitle: "Compiler Design (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "422",
    courseLongNumber: "4201",
    courseTitle: "Theory of Computing (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "432",
    courseLongNumber: "4301",
    courseTitle: "Embedded Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "438L",
    courseLongNumber: "4302",
    courseTitle: "Embedded Systems Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "437",
    courseLongNumber: "4313",
    courseTitle: "Local and Metropolitan Area Networks (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "436L",
    courseLongNumber: "4314",
    courseTitle: "Local Area Networks Lab (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "445",
    courseLongNumber: "4411",
    courseTitle: "Fundamentals of Distributed Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "446",
    courseLongNumber: "4421",
    courseTitle: "Computer Security (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "453",
    courseLongNumber: "4501",
    courseTitle: "Database Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "456",
    courseLongNumber: "4502",
    courseTitle: "Design of Web-based Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "401",
    courseLongNumber: "4503",
    courseTitle: "Internet-based Information Systems (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "427",
    courseLongNumber: "4602",
    courseTitle: "Introduction to Artificial Neural Networks (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "000",
    courseLongNumber: "4603",
    courseTitle: "Fundamentals of Computer Vision (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "000",
    courseLongNumber: "4604",
    courseTitle: "Practical Machine Deep Learning (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "455",
    courseLongNumber: "4621",
    courseTitle: "Computer Graphics (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "441",
    courseLongNumber: "4701",
    courseTitle: "Object-Oriented Analysis and Design (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "448",
    courseLongNumber: "4702",
    courseTitle: "Secure Systems Engineering (3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "495",
    courseLongNumber: "4910",
    courseTitle: "Guided Studies in Computer Science and Engineering (1-3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "485",
    courseLongNumber: "4930",
    courseTitle:
      "Selected Topics in Computer Science and Engineering (1-3 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "490",
    courseLongNumber: "4950",
    courseTitle: "Industrial Training (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "491",
    courseLongNumber: "4980",
    courseTitle: "Senior Project I (1 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "492",
    courseLongNumber: "4981",
    courseTitle: "Senior Project II (2 cr.)",
  },
  {
    courseCode: "CSCE",
    courseShortNumber: "525",
    courseLongNumber: "5221",
    courseTitle: "Algorithms and Complexity Theory (3 cr.)",
  },

  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "529",
  //     courseLongNumber: "5222",
  //     courseTitle: "Design and Analysis of Parallel Algorithms (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "530",
  //     courseLongNumber: "5231",
  //     courseTitle: "Advanced Processor Architecture (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "535",
  //     courseLongNumber: "5232",
  //     courseTitle: "High Speed Networks (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "545",
  //     courseLongNumber: "5241",
  //     courseTitle: "Distributed Systems (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "532",
  //     courseLongNumber: "5242",
  //     courseTitle: "Parallel Computer Architecture (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "000",
  //     courseLongNumber: "5243",
  //     courseTitle: "Information and System Security (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "000",
  //     courseLongNumber: "5245",
  //     courseTitle: "Embedded Real-Time Systems (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "565",
  //     courseLongNumber: "5261",
  //     courseTitle: "Advanced Artificial Intelligence (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "527",
  //     courseLongNumber: "5262",
  //     courseTitle: "Neural Networks and Genetic Algorithms (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "561",
  //     courseLongNumber: "5263",
  //     courseTitle: "Knowledge Engineering (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "569",
  //     courseLongNumber: "5264",
  //     courseTitle: "Natural Language Processing and Machine Translation (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "564",
  //     courseLongNumber: "5265",
  //     courseTitle: "Web Mining (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "567",
  //     courseLongNumber: "5266",
  //     courseTitle: "Computer Vision (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "563",
  //     courseLongNumber: "5267",
  //     courseTitle: "Digital Image Processing (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "555",
  //     courseLongNumber: "5268",
  //     courseTitle: "Computer Graphics and Animation (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "000",
  //     courseLongNumber: "5269",
  //     courseTitle: "Pattern Analysis (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "541",
  //     courseLongNumber: "5271",
  //     courseTitle: "Advanced Software Engineering (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "543",
  //     courseLongNumber: "5272",
  //     courseTitle: "Advanced Software Quality (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "000",
  //     courseLongNumber: "5910",
  //     courseTitle:
  //       "Independent Studies in Computer Science and Engineering (1-3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "585",
  //     courseLongNumber: "5930",
  //     courseTitle: "Selected Topics in Computer Science and Engineering (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "590",
  //     courseLongNumber: "5940",
  //     courseTitle: "Seminar (1 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "591",
  //     courseLongNumber: "5980",
  //     courseTitle: "Capstone Project in Computing (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "599",
  //     courseLongNumber: "5981",
  //     courseTitle: "Graduate Thesis (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "642",
  //     courseLongNumber: "6231",
  //     courseTitle: "Mobile and Pervasive Computing (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "664",
  //     courseLongNumber: "6261",
  //     courseTitle: "Advanced Data Mining (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "692",
  //     courseLongNumber: "6930",
  //     courseTitle: "Advanced Selected Topics in Computer Science (3 cr.)",
  //   },
  //   {
  //     courseCode: "CSCE",
  //     courseShortNumber: "699",
  //     courseLongNumber: "6980",
  //     courseTitle: "Research Guidance Dissertation (3 cr.)",
  //   },
];

const getCourses = () => courses;

export { getCourses };
