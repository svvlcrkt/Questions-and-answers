const questions = $('.question');

questions.each(function(index,question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){

        //if we want the other text to close automatically
        //when we open an text
        questions.each(function(ind, item){
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