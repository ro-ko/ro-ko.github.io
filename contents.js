let people = {
  'sunghwan': "Sunghwan Lee",
  'keonwoo': "<strong class='thicker'>Keonwoo Roh</strong>",
  'kyoobin': "Kyoobin Lee",
  'jinhong': "Jinhong Jung",
};

let people_website = {
  'sunghwan': "http://ibi.korea.ac.kr/sub2_1.php?code=LSW",
  'Kyoobin Lee': "https://sites.google.com/view/gistailab/members/professor?authuser=0",
  'Jinhong Jung': "https://jinhongjung.github.io/",
};

let pub_dictionary = {

}

let website_directory = {

}

function add_link (title, link) {
  return `<a href="` + link + `" target="_blank">` + title + `</a>`;
}

function add_info (paper, infos) {
  var text = "";
  infos.forEach(info => {
    text += "[" + add_link(info, pub_dictionary[paper][info]) + "]";
  })
  return text;
}

let intros = [
  `  Hello! <br />
  I am a MS. student in the Pattern Recognition and Machine Learning lab (PRML lab) at the Korea University.
  I am fortunate to be advised by [sunghwan].
  Prior to KU, I received B.S. in CSE and Mathematics from Jeonbuk National University.
  <br /><br />

  My primary research lies in the area of natural language processing and machine learning.
  Specifically:
  <ul style="padding-left: 30px; margin-top: 20px">
    

  <br /><br />
  `
]

let news = [

];

let publications = [
];

let educations = [
  [
    "Korea University",
    "09/2023&#8211;06/2025 (Expected)",
    [
      "MS. student in Artificial Intelligence",
      "Advisers: <a href='" + people_website['sunghwan'] + "' target='_blank'>" + people['sunghwan'] + "</a><br />" +
      "Master's degree obtained in March 2020"
    ],
  ],
  [
    "Jeonbuk National University",
    "03/2017&#8211;08/2023",
    [
      `B.S. in Computer Science & Engineering and Mathematics
      <br />
      GPA: 4.01/4.50 (total) 4.35/4.50 (major)`
    ],
  ],
  [
    "Honam Jeil High School",
    "02/2014&#8211;02/2017",
    [],
  ]
];

let experiences = [
  [
    "Gwangju Institute of Science and Technology",
    "12/2022&#8211;06/2023",
    "Undergraduate research intern",
    ["kyoobin"]
  ],
  [
    "Jeonbuk National University",
    "05/2021&#8211;03/2022",
    "Undergraduate research intern at Data Science Lab",
    ["jinhong"]
  ],
];

let demoIntro = `
I often enjoy making simple demos for some of my work.
I happen to make one demo every year. <br /><em>Feedback welcomed!</em>
<p style="color: red;">Update in Dec 2022: Due to some issues with our server,
the demo websites are often down. <br />
Drop me an email if you found them down, and we will fix the issue ASAP.</p> 
`;
let demos = [

  ];

let honors = [

];


let services = [

];

let talks = [

];


let teaching = [
 
];









