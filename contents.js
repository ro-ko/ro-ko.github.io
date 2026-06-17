let people = {
  'sunghwan': "Seong-Whan Lee",
  'keonwoo': "<strong class='thicker'>Keonwoo Roh</strong>",
  'kyoobin': "Kyoobin Lee",
  'jinhong': "Jinhong Jung",
  'youngju': "Yeong-Joon Ju",
  'woochan': "Woo-Chan Kim",
  'hyunwoo': "Hyun-Woo Nam",
};

let people_website = {
  'sunghwan': "http://ibi.korea.ac.kr/sub2_1.php?code=LSW",
  'kyoobin': "https://sites.google.com/view/gistailab/members/professor?authuser=0",
  'jinhong': "https://jinhongjung.github.io/",
};

let pub_dictionary = {
  'xlqa': {
    'paper': 'https://aclanthology.org/2025.emnlp-main.1466/',
    'code': 'https://github.com/ro-ko/XLQA',
    'slides': 'xlqa_slides.pdf',
    'poster': 'xlqa_poster.pdf',
    'BibTeX': 'assets/bibtex/xlqa.txt',
  },
  'hierarchical-cascading': {
    'paper': 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318396',
    'BibTeX': 'assets/bibtex/hierarchical-cascading.txt',
  },
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
  I am an M.S. student in the Pattern Recognition and Machine Learning lab (PRML lab) at Korea University.
  I am fortunate to be advised by [sunghwan].
  Prior to KU, I received B.S. in Computer Science & Mathematics from Jeonbuk National University.
  <br /><br />

  My primary research lies in the area of natural language processing and machine learning.
  Specifically, I am interested in:
  <ul style="padding-left: 30px; margin-top: 20px">
    <li>Efficient LLM inference and text generation</li>
    <li>Multilingual and cross-lingual NLP</li>
    <li>Vision-Language Models and multimodal agents</li>
  </ul>
  <br /><br />
  `
]

let news = [
  `[Feb 2026] Started as AI Research Intern at <a href="https://company.netmarble.com" target="_blank">Netmarble Corporation</a>.`,
  `[Nov 2025] Paper "<a href="https://aclanthology.org/2025.emnlp-main.1466/" target="_blank">XLQA: A Benchmark for Locale-Aware Multilingual Open-Domain Question Answering</a>" accepted at EMNLP 2025.`,
  `[Sep 2025] Started as Machine Learning Engineer Intern at <a href="https://www.navercorp.com" target="_blank">Naver Corporation</a>.`,
  `[Jul 2025] Paper "<a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318396" target="_blank">Hierarchical Cascading for Cost-Efficient Text Generation with Large Language Models</a>" accepted at KCC 2025.`,
  `[Aug 2023] Started M.S. in Artificial Intelligence at Korea University, advised by Prof. <a href="http://ibi.korea.ac.kr/sub2_1.php?code=LSW" target="_blank">Seong-Whan Lee</a>.`,
];

let publications = [
  [
    "XLQA: A Benchmark for Locale-Aware Multilingual Open-Domain Question Answering",
    ['keonwoo', 'youngju', 'sunghwan'],
    "EMNLP 2025",
    "",
    "2025",
    "xlqa"
  ],
  [
    "Hierarchical Cascading for Cost-Efficient Text Generation with Large Language Models",
    ['woochan', 'keonwoo', 'youngju', 'hyunwoo', 'sunghwan'],
    "KCC 2025",
    "",
    "2025",
    "hierarchical-cascading"
  ],
];

let educations = [
  [
    "Korea University",
    "08/2023&#8211;08/2026 (Expected)",
    [
      "M.S. in Artificial Intelligence, Department of Artificial Intelligence, College of Informatics",
      "Adviser: <a href='" + people_website['sunghwan'] + "' target='_blank'>" + people['sunghwan'] + "</a>"
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
    "03/2014&#8211;02/2017",
    [],
  ]
];

let experiences = [
  [
    "Netmarble Corporation",
    "02/2026&#8211;Present",
    "AI Research Intern",
    []
  ],
  [
    "Naver Corporation",
    "09/2025&#8211;11/2025",
    "Machine Learning Engineer Intern",
    []
  ],
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









