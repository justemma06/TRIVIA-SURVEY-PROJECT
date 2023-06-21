import $ from 'jquery';

export function getCurrentTime() {
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

export function displayCategories() {
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




