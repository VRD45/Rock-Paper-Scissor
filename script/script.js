
// Function for Seat registration and collection of data 
function registerSeat(){
    var form = document.querySelectorAll('input');
    let check = 0;
    for(let i=0;i<form.length;i++){
        if(form[i].value == ''){
            check = 1;
            break;
        }
    }
    if(check == 0){
        alert("You will received a call from us for confirmation...");
    }else{
        alert("Please fill the form..");
    }
    for(let i=0;i<form.length;i++){
        form[i].value='';
    }
    document.querySelectorAll('textarea').value = '';

}



// Function for navigating through nav menu 
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navbar');
    
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// Function for active menu selection 
function menuSelect(element){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navbar');
    var activeNav = document.querySelector('a.active');
    activeNav.classList.remove('active');
    element.classList.add('active');
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
}

// Function switching between night and day mode 
function modeToggle(element){
    var root = document.querySelector(':root');
    var mode = document.querySelector('.mode');
    let status = mode.classList;
    mode.classList.toggle('active');
    if('mode active'==status){
        root.style.setProperty('--toggleColor', 'black');
        root.style.setProperty('--toggleTextColor', 'white');
        root.style.setProperty('--toggleBgColor', 'rgb(53, 48, 48)');
    }else{
        root.style.setProperty('--toggleColor', 'white');
        root.style.setProperty('--toggleTextColor', 'black');
        root.style.setProperty('--toggleBgColor', 'rgb(224, 224, 224)');
    }
}