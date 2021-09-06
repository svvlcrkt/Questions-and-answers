// we can solve it with 2 methods:
// 1st; using selectors inside the element

//Instead of looking at the whole document, 
//we can also take articles from the document 
//and then proceed from articles.

const questions = document.querySelectorAll('.question');
//we got all articles
questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn')
    // console.log(btn);
    btn.addEventListener('click',function(){

        //if we want the other text to close automatically
        //when we open an text
        questions.forEach(function(item){
            if(item !== question){ //if I don't click on the same element again,
                item.classList.remove('show-text'); //then delete show-text class from prev. article
                //if we don't put this in if block, 
                //the bottom if block won't work

            }

        })

        if(question.classList.contains('show-text')){
            // console.log("if 28");
            question.classList.remove('show-text');
        }
        else{
            // console.log("else 32");
            question.classList.add('show-text');
        }
        //question is one article tag,
        //we already wanted to add the show-text class to this tag.

        // question.classList.toggle('show-text');
        // we can also use the toggle function instead of if-else.


    })

})

// 2nd; traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//         // The reason we go to 2 parent elements 
//         // is that we can access the text from here.

//         // console.log(e.currentTarget);
//         //event.currentTarget tells us on which element 
//         //the event was attached or the element whose 
//         //eventListener triggered the event.
//         //so output of this code will be button tag
//         // console.log(e.target);
//         //event.target tells where the event started.
//         //so output of this code will be i tag
//     })

// })