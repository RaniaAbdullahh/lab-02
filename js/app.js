'use strict';


function q()
{
  var c = 0;

  var userName = prompt('what is your name?');
  //console.log(userName)
  alert('welcome to my site ' + userName);

  function q1()
  {

    var grad = prompt('Did i graduated from Hashemite University? ');

    if (grad.toLowerCase() === 'yes') {
      // console.log('correct');
      alert('GREAT GOB ' + userName);
      c++;
    }
    else {
      // console.log('wrong')
      alert('i graduated from hashemite university ');

    }
  }
  q1();


  function q2()
  {
    var age = prompt('am i 25 years old?');
    if (age.toLowerCase() === 'yes') {
      // console.log('correct');
      alert('no ' + userName + ' i am 24 ');
    }
    else {
      // console.log('wrong')
      alert('correct,i am 24:) ');
      c++;
    }
  }
  q2();

  function q3()
  {
    var job = prompt('do i have a previous work experience?');
    if (job.toLowerCase() === 'yes') {
      // console.log('correct');
      alert('GREAT GOB, i had a work experience  in Arab Engineers company for 8 monthes as a maintenance & tender engineer ');
      c++;
    }
    else {
      // console.log('wrong')
      alert('okey, i had a work experience  in Arab Engineers company for 8 monthes as a maintenance & tender engineer ');
    }
  }
  q3();

  function q4()
  {
    var goal = prompt('does my goal to just return to my career without take advantage of this course? ');
    if (goal.toLowerCase() === 'yes') {
      // console.log('correct');
      alert('no, my goal is to employ my skills in programming in my career, which will be a very rich experience.');
      c++;
    }
    else {
      // console.log('wrong')
      alert('great,my goal is to employ my skills in programming in my career, which will be a very rich experience. ');

    }
  }
  q4();

  function q5()
  {
    var hobbies = prompt('do i like swimming?');
    switch (hobbies.toLowerCase()) {
    case 'yes':
      // console.log('correct');
      alert(`GREAT GOB ${userName} i am a perfect swimmer`);
      c++;

      break;

    case 'no':
      // console.log('wrong')
      alert('no, i am a perfect swimmer ');
      break;
    default:
      // console.log('try again');
      break;
    }
  }
  q5();


  function q6 ()
  {
    var i = 0;
    while (i <= 4) {
      var guissNum = prompt('Guiss how many country did i visit?');
      if (guissNum > 3) {
        alert('too high');
      } else if (guissNum < 3) {
        alert('too low');
      } else {
        alert('yessss');
        c++;
      }

      i++;
    }
    alert('the right answer is 3 haha');
  }
  q6();


  function q7()
  {
    var places = ['italy', 'spain', 'paris', 'rome', 'santorini'];
    console.log(places.join());
    var guissPlace = prompt('guiss what is my favorite place i wish to visit?');
    for (var x = 0; x < places.length; x++) {
      if (guissPlace.toLowerCase() === places[x]) {
        alert('Bravoo, right answer');
        c++;
        console.log(places[x]);

      }


    }
    for (var t = 0; t < places.length; t++) {
      if (guissPlace.toLowerCase() === places[t]) {
        break;
      } else {
        var r = 1;
        while (r < 6) {
          guissPlace = prompt('guiss what is my favorite place i wish to visit?');
          r++;
          break;
        }

      }
    }
  }
  q7();
  alert(' My favorite places is italy spain paris rome santoini');
  alert('your score is : ' + c);
}
q();




















