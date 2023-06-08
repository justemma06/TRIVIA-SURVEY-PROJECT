import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
`http://localhost:8080/images/Purple Diamond.svg`;
`http://localhost:8080/images/Orange Circle.svg`;

function getElements(response) {
  // $('#question').html(response.results[0].question);

  $('#answer').html(`<h6>Answer</h6> ${response.results[0].correct_answer}`);
    
  // my Trivia game Database

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
    // {
    //     // for question 4
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].incorrect_answers[1]}`,
    //     b: `${response.results[0].correct_answer}`,
    //     b: `${response.results[0].incorrect_answers[2]}`,
    //     d: `${response.results[0].incorrect_answers[0]}`,

    //     correct: "b"
    // },
    // {
    //     // for question 5
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].incorrect_answers[1]}`,
    //     b: `${response.results[0].incorrect_answers[2]}`,
    //     c: `${response.results[0].correct_answer}`,
    //     d: `${response.results[0].incorrect_answers[0]}`,

    //     correct: "c"
    // },
    // {
    //     // for question 6
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].incorrect_answers[1]}`,
    //     b: `${response.results[0].incorrect_answers[2]}`,
    //     c: `${response.results[0].incorrect_answers[0]}`,
    //     d: `${response.results[0].correct_answer}`,
    //     correct: "d"
    // },
    // {
    //     // for question 7
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].incorrect_answers[1]}`,
    //     b: `${response.results[0].incorrect_answers[2]}`,
    //     c: `${response.results[0].correct_answer}`,
    //     d: `${response.results[0].incorrect_answers[0]}`,
    //     correct: "c"
    // },
    // {
    //     // for question 8
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].incorrect_answers[1]}`,
    //     d: `${response.results[0].correct_answer}`,
    //     c: `${response.results[0].incorrect_answers[0]}`,
    //     d: `${response.results[0].incorrect_answers[2]}`,
    //     correct: "b"
    // },
    // {
    //     // for question 9
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].incorrect_answers[1]}`,
    //     b: `${response.results[0].incorrect_answers[2]}`,
    //     c: `${response.results[0].incorrect_answers[0]}`,
    //     d: `${response.results[0].correct_answer}`,
    //     correct: "d"
    // },
    // {
    //     // for question 10
    //     question: `${response.results[0].question}`,
    //     a: `${response.results[0].correct_answer}`,
    //     b: `${response.results[0].incorrect_answers[1]}`,
    //     c: `${response.results[0].incorrect_answers[2]}`,
    //     d: `${response.results[0].incorrect_answers[0]}`,
    //     correct: "a"
    // },
    // {
    //     // for question 11
    //     question: `${response.results[10].question}`,
    //     a: `${response.results[10].incorrect_answers[1]}`,
    //     b: `${response.results[10].incorrect_answers[2]}`,
    //     c: `${response.results[10].incorrect_answers[0]}`,
    //     d: `${response.results[10].correct_answer}`,
    //     correct: "d"
    // },
    // {
    //     // for question 12
    //     question: `${response.results[11].question}`,
    //     a: `${response.results[11].incorrect_answers[1]}`,
    //     b: `${response.results[11].correct_answer}`,
    //     c: `${response.results[11].incorrect_answers[0]}`,
    //     d: `${response.results[11].incorrect_answers[2]}`,
    //     correct: "b"
    // },
    // {
    //     // for question 13
    //     question: `${response.results[12].question}`,
    //     a: `${response.results[12].incorrect_answers[1]}`,
    //     b: `${response.results[12].correct_answer}`,
    //     c: `${response.results[12].incorrect_answers[0]}`,
    //     d: `${response.results[12].incorrect_answers[2]}`,
    //     correct: "b"
    // },
    // {
    //     // for question 14
    //     question: `${response.results[13].question}`,
    //     a: `${response.results[13].incorrect_answers[1]}`,
    //     b: `${response.results[13].incorrect_answers[0]}`,
    //     c: `${response.results[13].incorrect_answers[2]}`,
    //     d: `${response.results[13].correct_answer}`,
    //     correct: "d"
    // },
    // {
    //     // for question 15
    //     question: `${response.results[14].question}`,
    //     d: `${response.results[14].correct_answer}`,
    //     a: `${response.results[14].incorrect_answers[1]}`,
    //     b: `${response.results[14].incorrect_answers[0]}`,
    //     c: `${response.results[14].incorrect_answers[2]}`,
    //     correct: "a"
    // }
  ];
  response;

  const triviaBoard = $("#board");
  // querySelectorAll would help me get all elements with the answer class abd store them as an array so I can loop through them later
  const allAnswers = document.querySelectorAll(".answer");
  const allQuestions = $("#question");
  const a_text = $("#a_text");
  const b_text = $("#b_text");
  const c_text = $("#c_text");
  const d_text = $("#d_text");
  const submitBtn = $("#submit");

  let currentTriviaQuestion = 0;
  let score = 0;

  loadTrivia();

  // writing the function to load each of my trivia questions

  function loadTrivia() {
    deselectAnswers();

    const currentTriviaData = triviaData[currentTriviaQuestion];

    allQuestions.text(currentTriviaData.question);
    a_text.text(currentTriviaData.a);
    b_text.text(currentTriviaData.b);
    c_text.text(currentTriviaData.c);
    d_text.text(currentTriviaData.d);

  }

  function deselectAnswers() {
    // looping through each answer class stored in the allAnswers variable
    allAnswers.forEach(answer => answer.checked = false);
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

function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = 0;
  if (now.getMinutes() + 1 < 10) {
    minutes = '0' + now.getMinutes().toString();
  } else {
    minutes = now.getMinutes();
  }
  let period;
  if (hours >= 12) {
    period = 'PM';
  } else {
    period = 'AM';
  }
  let date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  let time;
  if (hours > 12) {
    time = `${hours - 12}:${minutes} ${period}`;
  } else if (hours == 0) {
    time = `${hours + 12}:${minutes} ${period}`;
  } else {
    time = `${hours}:${minutes} ${period}`;
  }
  return `${date} ${time}`;
}

function displayCategories() {
  let request = new XMLHttpRequest();
  const url = "https://opentdb.com/api_category.php";

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      let html = '';
      for (let i = 0; i < response.trivia_categories.length; i++) {
        html = '';
        html += `<option value="${response.trivia_categories[i].id}">`;
        html += `${response.trivia_categories[i].name}`;
        html += `</option>`;
        $('#trivia-questions').append(html);
      }
    }
  };
  request.open("GET", url, true);
  request.send();
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

