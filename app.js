function toggleMenu() {
  $(".menu__list").toggleClass("menu__list--active");
}

function checkAnswer(event) {
  console.log(event.target.id);
  var answer = event.target.id;
  var result="";
  switch (answer){
    case "c1_a1":
      result="That's right, good job! Press the button to read more of the story."
      $("#button-next-1").show();
      break;
    case "c1_a2":
      result="Not the Windy City, try again!"
      break;
    case "c1_a3":
      result="Try again!"
      break;
    case "c2_a1":
      result="Try again!"
      break;
    case "c2_a2":
      result="Try again!"
      break;
    case "c2_a3":
      result="That's right! We're working on the next set of challenges"
      $("#button-next-3").show();
      break;
  }
  $(".result").show();
  $(".result__text").html(result);
}

function buttonClick(cNo) {
  switch(cNo) {
    case 1:
      $("#challenge__container-1").hide();
      $("#page-3").show();
      $(".instr__text").hide();
      $("#button-next-1").hide();
      $("#button-next-2").show();
      $(".result__text").html('');
      break;
    case 2:
      $("#page-3").hide();
      $("#challenge__container-2").show();
      $("#button-next-2").hide();
      break;
    case 3:
      $("#challenge__container-2").hide();
      $("#challenge__container-3").show();
  }
  $(".result").hide();
}
