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
                    img: '/spot1.png', 
                    latitude: 0, 
                    longitude: 0
                }, 
                {
                    name: 's2', 
                    diff: 'Extra Hard', 
                    clue: "Old location that sells booze to minors!",
                    img: '/spot2.jpg',
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's3', 
                    diff: 'Extra Hard', 
                    clue: "Richmond Vampire lives here.",
                    img: '/spot3.jpg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's4', 
                    diff: 'Medium', 
                    clue: "Two dollar pizza with drunk people!",
                    img: '/spot4.jpg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's5', 
                    diff: 'Easy', 
                    clue: "A place to study with a lingering case of the bed bugs...",
                    img: '/spot5.jpg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's6', 
                    diff: 'Easy', 
                    clue: "Where one would see popular plays, stand up, performers, and homecoming concerts on campus...",
                    img: '/spot6.jpg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's7', 
                    diff: 'Easy', 
                    clue: "Where one will attend ceremonies and graduation...IF you pass your classes...",
                    img: '/spot7.jpeg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's8', 
                    diff: 'Easy', 
                    clue: "Relatively new museum on campus where you can see all mediums of art",
                    img: '/spot8.jpg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's9', 
                    diff: 'Medium', 
                    clue: "Home of VCU's executive overseers who patrol campus",
                    img: '/spot9.jpg', 
                    latitude: 0, 
                    longitude: 0
                },
                {
                    name: 's10', 
                    diff: 'Easy', 
                    clue: "Crowded exercising on campus",
                    img: '/spot10.jpg', 
                    latitude: 37.544457, 
                    longitude: -77.453989
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
          longitude = v.longitude; 
          latitude = v.latitude; 
          map.flyTo({center: [longitude, latitude], zoom: 14})
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
