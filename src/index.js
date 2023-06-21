import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {getCurrentTime} from './business.js';
import {displayCategories} from './business.js';
// `http://localhost:8080/images/Purple Diamond.svg`;
// `http://localhost:8080/images/Orange Circle.svg`;



$(document).ready(function () {
  let categoryId = 9;
  getQuestion(categoryId);
  displayCategories();


  $("#next").click(function () {
    $("#second-form").show();
    $("#first-form").hide();
  });

  $('#next-button').click(function () {
    getQuestion(categoryId);
    $('#answer').hide();
    $('#info_div').show();

  });

  $('#answer-button').click(function () {
    $('#info_div').hide();
    $('#answer_div').show();
    $('#answer').show();
  });

  // $("#submit").click(function () {
  //     $("#board").show();
  //     $(".triviaQuestions").hide();
  // });

  $('#trivia-questions').change(function () {
    //console.log($('#trivia-questions option:selected').val());
    categoryId = $('#trivia-questions option:selected').val();
    getQuestion(categoryId);
  });


});


function getElements(response) {
  // $('#question').html(response.results[0].question);

  $('#answer').html(`<h6>Answer</h6> ${response.results[0].correct_answer}`);

  // my Trivia game Database

  //  i'm using template literals to construct a question and its possible answers in JavaScript.
  const triviaData = [{
    // for question 1
    question: `${response.results[0].question}`,
    a: `${response.results[0].incorrect_answers[0]}`,
    b: `${response.results[0].incorrect_answers[2]}`,
    c: `${response.results[0].correct_answer}`,
    d: `${response.results[0].incorrect_answers[1]}`,
    correct: "c"
  },
  {
    // for question 2
    question: `${response.results[0].question}`,
    a: `${response.results[0].incorrect_answers[2]}`,
    b: `${response.results[0].incorrect_answers[1]}`,
    c: `${response.results[0].incorrect_answers[0]}`,
    d: `${response.results[0].correct_answer}`,
    correct: "d"
  },
  {
    // for question 3
    question: `${response.results[0].question}`,
    a: `${response.results[0].correct_answer}`,
    b: `${response.results[0].incorrect_answers[1]}`,
    c: `${response.results[0].incorrect_answers[0]}`,
    d: `${response.results[0].incorrect_answers[2]}`,
    correct: "a"
  },
  {
    // for question 4
    question: `${response.results[0].question}`,
    a: `${response.results[0].incorrect_answers[1]}`,
    b: `${response.results[0].correct_answer}`,
    c: `${response.results[0].incorrect_answers[2]}`,
    d: `${response.results[0].incorrect_answers[0]}`,

    correct: "b"
  },
  {
    // for question 5
    question: `${response.results[0].question}`,
    a: `${response.results[0].incorrect_answers[1]}`,
    b: `${response.results[0].incorrect_answers[2]}`,
    c: `${response.results[0].correct_answer}`,
    d: `${response.results[0].incorrect_answers[0]}`,

    correct: "c"
  },
  ];
  response;

  const triviaBoard = $("#board");
  // querySelectorAll would help me get all elements with the answer class abd store them as an array so I can loop through them later
  const allAnswers = document.querySelectorAll(".answer");
  const allQuestions = $("#question");
  // This line selects an element with the id "a_text" using jQuery and stores it in the a_text variable.
  const a_text = $("#a_text");
  const b_text = $("#b_text");
  const c_text = $("#c_text");
  const d_text = $("#d_text");
  const submitBtn = $("#submit");

  let currentTriviaQuestion = 0;
  let score = 0;

  loadTrivia();

  // writing the function to load each of my trivia questions

  function deselectAnswers() {
    // looping through each answer class stored in the allAnswers variable
    allAnswers.forEach(answer => answer.checked = false);
    // This code assumes that allAnswers is an array of DOM elements representing radio buttons.
    // answer.checked = false: This line sets the checked property of each answer element to false, effectively unchecking the radio button.
  }

  function getSelected() {
    let newanswer;
  
    allAnswers.forEach(answer => {
      // the .checked will only work for checkboxes and radio buttons and its used to determine which one was checked(clicked) out of the remaining
      if (answer.checked) {
        newanswer = answer.id;
      }
  
    });
    // returning the newanswer after determining that particular answer based on its id
    return newanswer;
  }
  
  function loadTrivia() {
    deselectAnswers();
  
    const currentTriviaData = triviaData[currentTriviaQuestion];
  
    allQuestions.text(currentTriviaData.question);
    a_text.text(currentTriviaData.a);
    b_text.text(currentTriviaData.b);
    c_text.text(currentTriviaData.c);
    d_text.text(currentTriviaData.d);
  
  }



  submitBtn.click(function () {
    const selectedanswer = getSelected();

    if (selectedanswer) {
      // if the answer checked by my user is same as the answer stored in the (correct )key in the triviaData array, increase my user's score


      console.log(triviaData[currentTriviaQuestion]);
      if (selectedanswer === triviaData[currentTriviaQuestion].correct) {
        score++;
      }
      currentTriviaQuestion++;

      if (currentTriviaQuestion < triviaData.length) {
        loadTrivia();
      } else {
        triviaBoard.html(`
                <h2>You answered ${score}/${triviaData.length} questions correctly</h2> 
                ${getCurrentTime()}
                
            `);
      }

    }
    localStorage.setItem(triviaBoard, JSON.stringify(triviaBoard));
  });
}

function getQuestion(categoryId) {
  $('#answer').hide();
  let request = new XMLHttpRequest();
  const url = `https://opentdb.com/api.php?amount=1&category=${categoryId}`;
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };
  request.open("GET", url, true);
  request.send();
}
