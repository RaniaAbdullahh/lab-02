'use strict';

var userName =prompt('what is your name?')
//console.log(userName)
alert('welcome to my site '+userName)

var grad =prompt('Did i graduated from Hashemite University? ');

if(grad.toLowerCase() === 'yes' ){
// console.log('correct');
alert('GREAT GOB '+userName);
}
else{
    // console.log('wrong')
    alert('i graduated from hashemite university ');

}

var age=prompt('am i 25 years old?');
if(age.toLowerCase() === 'yes' ){
    // console.log('correct');
    alert('no '+userName+' i am 24 ');
    }
    else{
        // console.log('wrong')
        alert('i am 24 by the way :) ' )
    }

    var job =prompt('do i have a previous work experience?')
    if(job.toLowerCase() === 'yes' ){
        // console.log('correct');
        alert('GREAT GOB, i had a work experience  in Arab Engineers company for 8 monthes as a maintenance & tender engineer ');
        }
        else{
            // console.log('wrong')
            alert('okey, i had a work experience  in Arab Engineers company for 8 monthes as a maintenance & tender engineer ');
        }
        

var goal =prompt('does my goal to just return to my career without take advantage of this course? ')
if(goal.toLowerCase() === 'yes' ){
    // console.log('correct');
    alert('no, my goal is to employ my skills in programming in my career, which will be a very rich experience. ');
    }
    else{
        // console.log('wrong')
        alert('great,my goal is to employ my skills in programming in my career, which will be a very rich experience. ' );

    }




var hobbies =prompt('do i like swimming?');
switch(hobbies.toLowerCase()){
    case 'yes':
        // console.log('correct');
        alert('GREAT GOB '+userName+' i am a perfect swimmer')

    break;

    case 'no':
        // console.log('wrong')
        alert('no, i am a perfect swimmer ');
    break
    default:
        // console.log('try again');
    break    
}





