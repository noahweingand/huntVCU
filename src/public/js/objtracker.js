var chosenObj = undefined; // for the chosen objective on the page.
var check = 0; // Check to set progress bar

// Checks used to make sure each correct answer is only counted once
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var check5 = 0;
var check6 = 0;
var check7 = 0;
var check8 = 0;
var check9 = 0;
var check10 = 0;

const allObj = [
  {
    name: "s1",
    diff: "Extra Hard",
    clue: "VCU's brand new engineering building!",
    img: "/spot2.jpg",
    latitude: 37.544570,
    longitude: -77.448697,
    answers: ["engineering research building", "research building", "erb"]
  },
  {
    name: "s2",
    diff: "Extra Hard",
    clue: "Richmond Vampire lives here.",
    img: "/spot3.jpg",
    latitude: 37.539598,
    longitude: -77.45429,
    answers: ["hollywood cemetary"]
  },
  {
    name: "s3",
    diff: "Medium",
    clue: "Two dollar pizza with drunk people!",
    img: "/spot4.jpg",
    latitude: 37.550554,
    longitude: -77.453552,
    answers: ["christian's pizza", "christians pizza"]
  },
  {
    name: "s4",
    diff: "Easy",
    clue: "A place to study with a lingering case of the bed bugs...",
    img: "/spot5.jpg",
    latitude: 37.547816,
    longitude: -77.453203,
    answers: ["cabell library", "cabell"]
  },
  {
    name: "s5",
    diff: "Easy",
    clue:
      "Where one would see popular plays, stand up, performers, and homecoming concerts on campus...",
    img: "/spot6.jpg",
    latitude: 37.546522,
    longitude: -77.451561,
    answers: ["altria theater"]
  },
  {
    name: "s6",
    diff: "Easy",
    clue:
      "Where one will attend ceremonies and graduation...IF you pass your classes...",
    img: "/spot7.jpeg",
    latitude: 37.5525497,
    longitude: -77.4553268,
    answers: ["siegel center"]
  },
  {
    name: "s7",
    diff: "Easy",
    clue:
      "Relatively new museum on campus where you can see all mediums of art",
    img: "/spot8.jpg",
    latitude: 37.548903,
    longitude: -77.44858,
    answers: ["institute of contemporary art"]
  },
  {
    name: "s8",
    diff: "Medium",
    clue: "Home of VCU's executive overseers who patrol campus",
    img: "/spot9.jpg",
    latitude: 37.544281,
    longitude: -77.4414988,
    answers: ["police station"]
  },
  {
    name: "s9",
    diff: "Easy",
    clue: "Crowded exercising on campus",
    img: "/spot10.jpg",
    latitude: 37.544457,
    longitude: -77.453989,
    answers: ["cary st gym", "cary st. gym", "cary street gym"]
  },
  {
    name: 's10',
    diff: 'Easy',
    clue: "The center of campus where you can find club events and protesters",
    img: '/spot11.jpg',
    latitude: 37.548160,
    longitude: -77.453216,
    answers: ["compass", "the compass"]
  },
  {
    name: 's11',
    diff: 'Easy',
    clue: "The dorm which has the 'art colony' on the first four floors",
    img: '/spot12.jpg',
    latitude: 37.547946,
    longitude: -77.451097,
    answers: ["johnson", "johnson hall"]
  },
  {
    name: 's12',
    diff: 'Hard',
    clue: "The art building where art majors can find the infinity wall/room",
    img: '/spot13.jpg',
    latitude: 37.550310,
    longitude: -77.448855,
    answers: ["depot", "the depot"]
  },
  {
      name: 's13',
      diff: 'Medium',
      clue: "The oldest art building at VCU, home to photography majors!",
      img: '/spot14.jpg',
      latitude: 37.549640,
      longitude: -77.454407,
      answers: ["pollak", "pollak building"]
  },
  {
      name: 's14',
      diff: 'Easy',
      clue: "VCU's main dining hall. You either love it or hate it...",
      img: '/spot15.jpg',
      latitude: 37.548361,
      longitude: -77.452407,
      answers: ["shafer", "shafer dining", "shafer dining hall", "shafer court", "shafer court dining", "shafer court dining center"]
  },
  {
      name: 's15',
      diff: 'Easy',
      clue: "Where many classes are held and the building even has a basement",
      img: '/spot16.jpg',
      latitude: 37.548661,
      longitude: -77.453340,
      answers: ["hibbs", "hibbs hall", "hibbs building"]
  },
  {
      name: 's16',
      diff: 'Medium',
      clue: "The dorm that used to be a hospital 😱",
      img: '/spot17.jpg',
      latitude: 37.548588,
      longitude: -77.450277,
      answers: ["brandt", "brandt hall"]
  },
  {
      name: 's17',
      diff: 'Easy',
      clue: "A campus building where you can find food, ballrooms, video games, and an auditorium",
      img: '/spot18.jpg',
      latitude: 37.547710,
      longitude: -77.454359,
      answers: ["commons", "the commons", "academic learning commons"]
  },
  {
      name: 's18',
      diff: 'Medium',
      clue: "An art building that's a home to sculpting and craft",
      img: '/spot19.jpg',
      latitude: 37.551149,
      longitude: -77.450036,
      answers: ["the fab", "fab", "the fine arts building", "fine arts building", "the fine art building", "fine art building"]
  },
  {
      name: 's19',
      diff: 'Medium',
      clue: "Engineering building where you can find Computer Science on the 4th floor",
      img: '/spot20.png',
      latitude: 37.545637,
      longitude: -77.448687,
      answers: ["engineering east", "engineering building east", "snead", "snead hall", "east engineering", "east engineering hall", "east hall"]
  },
  {
      name: 's20',
      diff: 'Hard',
      clue: "A place near the compass where you can catch the 'No Shame' Talent Show",
      img: '/spot21.jpg',
      latitude: 37.548683,
      longitude: -77.452483,
      answers: ["shafer playhouse", "the shafer playhouse"]
  },
  {
      name: 's21',
      diff: "Easy",
      clue: "VCU's newest dorm",
      img: '/spot22.jpg',
      latitude: 37.545805,
      longitude: -77.450962,
      answers: ["grc", "the gladding residence center", "gladding residence center"]
  }
];

// onclick method for each spot objective anchor thing
$.each(allObj, function (i, v) {
  (function (v) {
    $("#" + v.name).click(() => {
      if (check < 1) {
        let currentProgress = $("#progress-bar").text();
        checkProgress(currentProgress);
        check = check + 1;
      }
      chosenObj = v.name;
      if (chosenObj !== undefined) {
        $("#top-right-text").text("Image Clue:");
        $("#top-right-text").css("font-weight", "Bold");
      }
      $("#difficulty").text("Difficulty: " + v.diff);
      $("#clue").text(v.clue);
      $("#mapclue").attr("src", v.img).width("100%");
      longitude = v.longitude;
      latitude = v.latitude;
      map.flyTo({ center: [longitude, latitude], zoom: 14.5 });
    });
  })(v);
});

// method for comparing answers
$("#enter-answer").on("click", () => {
  let input_answer = $("#answer-box").val().toLowerCase();
  let element = document.querySelector('#'+chosenObj); 

  let index = parseInt(chosenObj.substring(1)) - 1; // parse for multi digit numbers correctly
  let obj = allObj[index]; 
  console.log(obj); 

  for(answer of obj.answers){
    console.log(answer); 
    if(answer === input_answer){
        $("#isCorrect").text("Correct!");
        element.parentElement.removeChild(element);
        let currentProgress = $("#progress-bar").text();
        checkProgress(currentProgress);
        return; 
      }
  }
  $("#isCorrect").text("Nope, not quite!");
});

function checkProgress(percentage) {
  if (percentage === "0%") {
    $(".progress-bar").css("width", "1.3%");
    $(".progress-bar").css("background-color", "#FF0000");
    $("#progress-bar-text").text("1.3%");
  } else if (percentage === "1.3%") {
    $(".progress-bar").css("width", "6%");
    $(".progress-bar").css("background-color", "#FF3300");
    $("#progress-bar-text").text("6%");
  } else if (percentage === "6%") {
    $(".progress-bar").css("width", "10.7%");
    $(".progress-bar").css("background-color", "#FF6600");
    $("#progress-bar-text").text("10.7%");
  } else if (percentage === "10.7%") {
    $(".progress-bar").css("width", "15.4%");
    $(".progress-bar").css("background-color", "#FF9900");
    $("#progress-bar-text").text("15.4%");
  } else if (percentage === "15.4%") {
    $(".progress-bar").css("width", "20.1%");
    $(".progress-bar").css("background-color", "#FFCC00");
    $("#progress-bar-text").text("20.1%");
  } else if (percentage === "20.1%") {
    $(".progress-bar").css("width", "24.8%");
    $(".progress-bar").css("background-color", "#FFEE00");
    $("#progress-bar-text").text("24.8%");
  } else if (percentage === "24.8%") {
    $(".progress-bar").css("width", "29.5%");
    $(".progress-bar").css("background-color", "#FFFF00");
    $("#progress-bar-text").text("29.5%");
  } else if (percentage === "29.5%") {
    $(".progress-bar").css("width", "34.2%");
    $(".progress-bar").css("background-color", "#EEFF00");
    $("#progress-bar-text").text("34.2%");
  } else if (percentage === "34.2%") {
    $(".progress-bar").css("width", "38.9%");
    $(".progress-bar").css("background-color", "#DDFF00");
    $("#progress-bar-text").text("38.9%");
  } else if (percentage === "38.9%") {
    $(".progress-bar").css("width", "43.6%");
    $(".progress-bar").css("background-color", "#CCFF00");
    $("#progress-bar-text").text("43.6%");
  } else if (percentage === "43.6%") {
    $(".progress-bar").css("width", "48.3%");
    $(".progress-bar").css("background-color", "#BBFF00");
    $("#progress-bar-text").text("48.3%");
  } else if (percentage === "48.3%") {
    $(".progress-bar").css("width", "53%");
    $(".progress-bar").css("background-color", "#AAFF00");
    $("#progress-bar-text").text("53%");
  } else if (percentage === "53%") {
    $(".progress-bar").css("width", "57.7%");
    $(".progress-bar").css("background-color", "#99FF00");
    $("#progress-bar-text").text("57.7%");
  } else if (percentage === "57.7%") {
    $(".progress-bar").css("width", "62.4%");
    $(".progress-bar").css("background-color", "#88FF00");
    $("#progress-bar-text").text("62.4%");
  } else if (percentage === "62.4%") {
    $(".progress-bar").css("width", "67.1%");
    $(".progress-bar").css("background-color", "#77FF00");
    $("#progress-bar-text").text("67.1%");
  } else if (percentage === "67.1%") {
    $(".progress-bar").css("width", "71.8%");
    $(".progress-bar").css("background-color", "#66FF00");
    $("#progress-bar-text").text("71.8%");
  } else if (percentage === "71.8%") {
    $(".progress-bar").css("width", "76.5%");
    $(".progress-bar").css("background-color", "#55FF00");
    $("#progress-bar-text").text("76.5%");
  } else if (percentage === "76.5%") {
    $(".progress-bar").css("width", "81.2%");
    $(".progress-bar").css("background-color", "#44FF00");
    $("#progress-bar-text").text("81.2%");
  } else if (percentage === "81.2%") {
    $(".progress-bar").css("width", "85.9%");
    $(".progress-bar").css("background-color", "#33FF00");
    $("#progress-bar-text").text("85.9%");
  } else if (percentage === "85.9%") {
    $(".progress-bar").css("width", "90.6%");
    $(".progress-bar").css("background-color", "#22FF00");
    $("#progress-bar-text").text("90.6%");
  } else if (percentage === "90.6%") {
    $(".progress-bar").css("width", "95.3%");
    $(".progress-bar").css("background-color", "#11FF00");
    $("#progress-bar-text").text("95.3%");
  } else if (percentage === "95.3%") {
    $(".progress-bar").css("width", "100%");
    $(".progress-bar").css("background-color", "#00FF00");
    $("#progress-bar-text").text("100%");
    $("#final1").text("CONGRATUlATIONS!");
    $("#final2").text("YOU WON!");
  } else if (percentage === "100%") {
  } else {
    $(".progress-bar").css("width", "0%");
    $("#progress-bar-text").text("ERROR!");
  }
}
