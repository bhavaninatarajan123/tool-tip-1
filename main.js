var ques=document.querySelectorAll(".course");
//console.log(ques);
ques.forEach(function(del){
    del.addEventListener("click",function(){
        if(del.nextElementSibling.classList.contains("active")){
            del.nextElementSibling.classList.remove("active");
        }
        else{
            del.nextElementSibling.classList.add("active");
        }
    })
})

