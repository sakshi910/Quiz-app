const quizDB= [

{
    question:"Q1: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"Hyper Text Markup Language",
    d:"Hyper Text Makeup Language", 
    ans:"ans3"
},

{
    question:"Q2: What is the full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Cascading Sheep Sheets",
    c:"Cartoon Style Sheets",
    d:"Cascading Super Sheets", 
    ans:"ans1"
},


{
    question:"Q3: What is the full form of HTPP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext Test Protocol",
    c:"Hey Transfer Protocol",
    d:"Hypertext Transfer Protocol", 
    ans:"ans4"
},

{
    question:"Q4: What is the full form of JS?",
    a:"JavaSuper",
    b:"JavaScript",
    c:"JavaSet",
    d:"JavaSuperplus", 
    ans:"ans2"
}

];

const question= document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const ans1=document.querySelector("#ans1");
const ans2=document.querySelector("#ans2");
const ans3=document.querySelector("#ans3");
const ans4=document.querySelector("#ans4");
const submit= document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount=0;
console.log(answers);
let score=0;

const loadQuestion=()=>{

    question.innerHTML=quizDB[questionCount].question;
    option1.innerHTML=quizDB[questionCount].a;
    option2.innerHTML=quizDB[questionCount].b;
    option3.innerHTML=quizDB[questionCount].c;
    option4.innerHTML=quizDB[questionCount].d;

}

loadQuestion();
const deselectAll=()=>{
    submit.style.backgroundColor =" #74b9ff";
    answers.forEach((currAnsElem)=>
    currAnsElem.checked=false);
}
let find=false;

const getCheckAnswer=()=>{
    let currAnsElem=0;
    let answer;
    
    answers.forEach((currAnsElem)=>{
    if(currAnsElem.checked)
    {answer=currAnsElem.id;
    find=true;
    }
    });
return answer;
}

ans1.addEventListener('click', ()=>{
    console.log("hii");
    submit.style.backgroundColor =" #0984e3";
});
ans2.addEventListener('click', ()=>{
    console.log("hii");
    submit.style.backgroundColor =" #0984e3";
});
ans3.addEventListener('click', ()=>{
    console.log("hii");
    submit.style.backgroundColor =" #0984e3";
});
ans4.addEventListener('click', ()=>{
    console.log("hii");
    submit.style.backgroundColor =" #0984e3";
});

submit.addEventListener('click',()=>{
    const n=quizDB.length;
    find=false;
    const checkedAnswer= getCheckAnswer();
    console.log(find);
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans)
 {   score++;
} 
 
  if(find==true){
   

    questionCount++;

    deselectAll();
    if(questionCount<n)
    {
       
     loadQuestion();
    }

    else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }
}
});
