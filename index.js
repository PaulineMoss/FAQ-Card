 function defineId(clicked_id)
  {
      return(clicked_id);
  }
//make Q1, Q2,... into array and iterate through it and return index
 function matchIds(clicked_id){
     var questionId = defineId(clicked_id);
     if(questionId == "Q1"){
         return document.getElementById('A1')
     } else if (questionId == "Q2"){
         return document.getElementById('A2')
     } else if(questionId == "Q3"){
        return document.getElementById('A3')
     } else if(questionId == "Q4"){
         return document.getElementById('A4')
     } else {
         return document.getElementById('A5')
     }
 }

 function expand(clicked_id) {
    var id = defineId(clicked_id);
    var x = matchIds(id);
    var question = document.getElementById(id);
    var arrow = document.getElementById(id).lastChild;
    if (x.style.display === "none") {
      x.style.display = "block";
      question.style.fontWeight = "700";
      arrow.style.transform = 'rotate(180deg)';
    } else {
      x.style.display = "none";
      document.getElementById(id).style.fontWeight = "400";
      arrow.style.transform = 'rotate(360deg)';
    }
  }


  