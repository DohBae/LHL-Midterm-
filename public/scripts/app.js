// Client facing scripts here

$(document).ready(function () {
  let questionSection = `
  <section class="question-creation">
  <label for="question-text">Question:</label>
  <input type="question-text" name="question-text" style="width: 25rem; margin-bottom: 10px;"> </input> <br>
    <section class="create-answers">
      <label for="answer">Answer:</label>
      <input type="answer" name="answer" style="width: 20rem; margin-bottom: 10px;" />
      <select name="answer-val">
        <option value="Incorrect">Incorrect</option>
        <option value="Correct">Correct</option>
      </select><br>
      <label for="answer">Answer:</label>
      <input type="answer" name="answer" style="width: 20rem; margin-bottom: 10px;" />
      <select name="answer-val">
        <option value="Incorrect">Incorrect</option>
        <option value="Correct">Correct</option>
      </select><br>
      <label for="answer">Answer:</label>
      <input type="answer" name="answer" style="width: 20rem; margin-bottom: 10px;" />
      <select name="answer-val">
        <option value="Incorrect">Incorrect</option>
        <option value="Correct">Correct</option>
      </select><br>
      <label for="answer">Answer:</label>
      <input type="answer" name="answer" style="width: 20rem; margin-bottom: 10px;" />
      <select name="answer-val">
        <option value="Incorrect">Incorrect</option>
        <option value="Correct">Correct</option>
      </select><br>
    </section>
  </section>
  `;

  $("#add-question-btn").on("click", function() {
    $(questionSection).insertBefore("#form-submit-btn");
  });

  $('#share-result-btn').on("click", function() {
    let inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("Your results URL has been copied to your clipboard!");
  });

  $('#share-quiz-btn').on("click", function() {
    let inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = 'http://localhost:8080/take-a-quiz/';
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("The URL for this quiz has been copied to your clipboard!");
  });

});
