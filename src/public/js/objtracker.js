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

const allObj = [{ 
                    name: 's1', 
                    diff: 'Hard', 
                    clue: "VCUart's theatre where you can catch their latest mainstage production (Be sure to check out their next production coming this April: Spring Awakening).",
                    img: '/spot1.png'
                }, 
                {
                    name: 's2', 
                    diff: 'Hard', 
                    clue: "VCU's brand new engineering building!",
                    img: '/spot2.jpg'
                },
                {
                    name: 's3', 
                    diff: 'Extra Hard', 
                    clue: "Richmond Vampire lives here.",
                    img: '/spot3.jpg'
                },
                {
                    name: 's4', 
                    diff: 'Medium', 
                    clue: "Two dollar pizza with intoxicated people!",
                    img: '/spot4.jpg'
                },
                {
                    name: 's5', 
                    diff: 'Easy', 
                    clue: "A place to study with a lingering case of the bed bugs...",
                    img: '/spot5.jpg'
                },
                {
                    name: 's6', 
                    diff: 'Easy', 
                    clue: "Where one would see popular plays, stand up, performers, and homecoming concerts on campus...",
                    img: '/spot6.jpg'
                },
                {
                    name: 's7', 
                    diff: 'Easy', 
                    clue: "Where one will attend ceremonies and graduation...IF you pass your classes...",
                    img: '/spot7.jpeg'
                },
                {
                    name: 's8', 
                    diff: 'Easy', 
                    clue: "Relatively new museum on campus where you can see all mediums of art",
                    img: '/spot8.jpg'
                },
                {
                    name: 's9', 
                    diff: 'Medium', 
                    clue: "Home of VCU's executive overseers who patrol campus",
                    img: '/spot9.jpg'
                },
                {
                    name: 's10', 
                    diff: 'Easy', 
                    clue: "Crowded exercising on campus",
                    img: '/spot10.jpg'
                },
                {
                    name: 's11',
                    diff: 'Easy',
                    clue: "The center of campus where you can find club events and protesters",
                    img: '/spot11.jpg'
                },
                {
                    name: 's12',
                    diff: 'Easy',
                    clue: "The dorm which has the 'art colony' on the first four floors",
                    img: '/spot12.jpg'
                },
                {
                    name: 's13',
                    diff: 'Hard',
                    clue: "The art building where art majors can find the infinity wall/room",
                    img: '/spot13.jpg'
                },
                {
                    name: 's14',
                    diff: 'Medium',
                    clue: "The oldest art building at VCU, home to photography majors!",
                    img: '/spot14.jpg'
                },
                {
                    name: 's15',
                    diff: 'Easy',
                    clue: "VCU's main dining hall. You either love it or hate it...",
                    img: '/spot15.jpg'
                },
                {
                    name: 's16',
                    diff: 'Easy',
                    clue: "Where many classes are held and the building even has a basement",
                    img: '/spot16.jpg'
                },
                {
                    name: 's17',
                    diff: 'Medium',
                    clue: "The dorm that used to be a hospital 😱",
                    img: '/spot17.jpg'
                },
                {
                    name: 's18',
                    diff: 'Easy',
                    clue: "A campus building where you can find food, ballrooms, video games, and an auditorium",
                    img: '/spot18.jpg'
                },
                {
                    name: 's19',
                    diff: 'Medium',
                    clue: "An art building that's a home to sculpting and craft",
                    img: '/spot19.jpg'
                },
                {
                    name: 's20',
                    diff: 'Medium',
                    clue: "Engineering building where you can find Computer Science on the 4th floor",
                    img: '/spot20.png'
                },
                {
                    name: 's21',
                    diff: 'Hard',
                    clue: "A place near the compass where you can catch the 'No Shame' Talent Show",
                    img: '/spot21.jpg'
                },
                {
                    name: 's22',
                    diff: "Easy",
                    clue: "VCU's newest dorm",
                    img: '/spot22.jpg'
                }
];

$.each(allObj, function(i, v) {
    (function (v) {
        $("#" + v.name).click(() => {
            if(check < 1){
                let currentProgress = $('#progress-bar').text();
                checkProgress(currentProgress);
                check = check + 1;
            }
            chosenObj = v.name;
            if(chosenObj !== undefined){
                $('#top-right-text').text('Image Clue:'); 
                $('#top-right-text').css('font-weight', 'Bold')
            }
	        $('#difficulty').text("Difficulty: " + v.diff); 
	        $('#clue').text(v.clue); 
	        $('#mapclue').attr("src", v.img).width("100%"); 
        }); 
    })(v);  
});

$('#enter-answer').on('click', () => {
    let answer = $('#answer-box').val().toLowerCase();    

    if(chosenObj === 's1' && answer === 'raymond hodges theatre'){
        $('#isCorrect').text('Correct!');
        if(check1 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check1 = check1 + 1;
        }
    }

    else if(chosenObj === 's2' && (answer === 'clay express market' || answer === 'clay market' || answer === 'clay street market')){
        $('#isCorrect').text('Correct!');
        if(check2 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check2 = check2 + 1;
        }
    }

    else if(chosenObj === 's3' && answer === 'hollywood cemetery'){
        $('#isCorrect').text('Correct!');
        if(check3 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check3 = check3 + 1;
        }
    }

    else if(chosenObj === 's4' && (answer === 'christian\'s pizza' || answer === 'christians pizza')){
        $('#isCorrect').text('Correct!');
        if(check4 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check4 = check4 + 1;
        }
    }

    else if(chosenObj === 's5' && answer === 'cabell library'){
        $('#isCorrect').text('Correct!');
        if(check5 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check5 = check5 + 1;
        }
    }

    else if(chosenObj === 's6' && answer === 'altria theater'){
        $('#isCorrect').text('Correct!');
        if(check6 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check6 = check6 + 1;
        }
    }

    else if(chosenObj === 's7' && answer === 'siegel center'){
        $('#isCorrect').text('Correct!');
        if(check7 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check7 = check7 + 1;
        }
    }

    else if(chosenObj === 's8' && (answer === 'ica' || answer === 'institute of contemporary art')){
        $('#isCorrect').text('Correct!');
        if(check8 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check8 = check8 + 1;
        }
    }

    else if(chosenObj === 's9' && answer === 'police station'){
        $('#isCorrect').text('Correct!');
        if(check9 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check9 = check9 + 1;
        }
    }

    else if(chosenObj === 's10' && (answer === 'cary st gym' || answer === 'cary st. gym' || answer === 'cary street gym')){
        $('#isCorrect').text('Correct!');
        if(check10 < 1){
            let currentProgress = $('#progress-bar').text();
            checkProgress(currentProgress);
            check10 = check10 + 1;
        }
    }
    
    else{
        $('#isCorrect').text('Nope, not quite!');
    }
});

function checkProgress(percentage) {

    if(percentage === '0%'){
        $('.progress-bar').css('width', '1%');
        $('.progress-bar').css('background-color', '#FF0000');
        $('#progress-bar-text').text('1%');
    }
    else if(percentage === '1%'){
        $('.progress-bar').css('width', '10%');
        $('.progress-bar').css('background-color', '#FF3300');
        $('#progress-bar-text').text('10%');       
    }
    else if(percentage === '10%'){
        $('#twenty').click();
        $('.progress-bar').css('width', '20%');
        $('.progress-bar').css('background-color', '#FF6600');
        $('#progress-bar-text').text('20%');     
    }
    else if(percentage === '20%'){
        $('.progress-bar').css('width', '30%');
        $('.progress-bar').css('background-color', '#FF9900');
        $('#progress-bar-text').text('30%');     
    }
    else if(percentage === '30%'){
        $('.progress-bar').css('width', '40%');
        $('.progress-bar').css('background-color', '#FFCC00');
        $('#progress-bar-text').text('40%');  
    }
    else if(percentage === '40%'){
        $('.progress-bar').css('width', '50%');
        $('.progress-bar').css('background-color', '#FFFF00');
        $('#progress-bar-text').text('50%');     
    }
    else if(percentage === '50%'){
        $('.progress-bar').css('width', '60%');
        $('.progress-bar').css('background-color', '#CCFF00');
        $('#progress-bar-text').text('60%');     
    }
    else if(percentage === '60%'){
        $('.progress-bar').css('width', '70%');
        $('.progress-bar').css('background-color', '#99FF00');
        $('#progress-bar-text').text('70%');     
    }
    else if(percentage === '70%'){
        $('.progress-bar').css('width', '80%');
        $('.progress-bar').css('background-color', '#66FF00');
        $('#progress-bar-text').text('80%');     
    }
    else if(percentage === '80%'){
        $('.progress-bar').css('width', '90%');
        $('.progress-bar').css('background-color', '#33FF00');
        $('#progress-bar-text').text('90%');     
    }
    else if(percentage === '90%'){
        $('.progress-bar').css('width', '100%');
        $('.progress-bar').css('background-color', '#00FF00');
        $('#progress-bar-text').text('100%');     
    }
    else if(percentage === '100%'){
        ;    
    }
    else{
        $('.progress-bar').css('width', '0%');
        $('#progress-bar-text').text('ERROR!');
    }
}