   var nMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
   var eDisplay = $('#currentDay')
   eDisplay.text(nMoment);
     console.log(eDisplay);
     console.log(nMoment)
      console.log(moment().format('h'))

//when the user inputs a value, make sure its able to save.
$(".hour").each(function(){
 console.log($(this).text())
  var note = localStorage.getItem($(this).text())

  $(this).parent().parent().find("textarea").val(note)
  
})

/// evrytiem you save 

 $(".saveBtn").on('click', function(event) {
    event.preventDefault();
  
   var txt = $(this).closest(".time-block").find("textarea").val();;
// hour = $(this).attr("hour")
    var hourTime = $(this).parent().parent().find(".hour").text();
    
     if (txt !== ""){
        
       console.log('saved');
       console.log(txt);
  
       localStorage.setItem(hourTime, txt);
       
     }
   });
   //make if statements to have the coler coded with the correct hour
   // function colorCoded (){
      //var timeHourNine = $('#nine').text();
      //console.log(timeHourNine);
      
      var dayTime = (moment().format('HH'))
      console.log(dayTime);
      var nine = '9';
      console.log(nine);
      var ten = '10';
      var eleven = '11';
      var twelve = '12';
      var one = '13';
      var two = '14';
      var three = '15';
      var four = '16';
      var five = '17';
      
      if (parseInt(nine) < parseInt(dayTime)){
        $('#nineText').addClass('past');
      }
      if (parseInt(nine) == parseInt(dayTime)){
          $('#nineText').addClass('present');
      }
      if (parseInt(nine) > parseInt(dayTime)){
        $('#nineText').addClass('future');
      }

      if (parseInt(ten) < parseInt(dayTime)){
        $('#tenText').addClass('past');
      }
      if (parseInt(ten) == parseInt(dayTime)){
          $('#tenText').addClass('present');
      }
      if (parseInt(ten) > parseInt(dayTime)){
        $('#tenText').addClass('future');
      }
      if (parseInt(eleven) < parseInt(dayTime)){
        $('#elevenText').addClass('past');
      }
      if (parseInt(eleven) == parseInt(dayTime)){
          $('#elevenText').addClass('present');
      }
      if (parseInt(eleven) > parseInt(dayTime)){
        $('#elevenText').addClass('future');
      }
      if (parseInt(twelve) < parseInt(dayTime)){
        $('#twelveText').addClass('past');
      }
      if (parseInt(twelve) == parseInt(dayTime)){
          $('#twelveText').addClass('present');
      }
      if (parseInt(twelve) > parseInt(dayTime)){
        $('#twelveText').addClass('future');
      }
      if (parseInt(one) < parseInt(dayTime)){
        $('#oneText').addClass('past');
      }
      if (parseInt(one) == parseInt(dayTime)){
          $('#oneText').addClass('present');
      }
      if (parseInt(one) > parseInt(dayTime)){
        $('#oneText').addClass('future');
      }
      if (parseInt(two) < parseInt(dayTime)){
        $('#twoText').addClass('past');
      }
      if (parseInt(two) == parseInt(dayTime)){
          $('#twoText').addClass('present');
      }
      if (parseInt(two) > parseInt(dayTime)){
        $('#twoText').addClass('future');
      }
      if (parseInt(three) < parseInt(dayTime)){
        $('#threeText').addClass('past');
      }
      if (parseInt(three) == parseInt(dayTime)){
          $('#threeText').addClass('present');
          console.log(dayTime)
          console.log(three);
      }
      if (parseInt(three) > parseInt(dayTime)){
        $('#threeText').addClass('future');
      }
      if (parseInt(four) < parseInt(dayTime)){
        $('#fourText').addClass('past');
      }
      if (parseInt(four) == parseInt(dayTime)){
          $('#fourText').addClass('present');
      }
      if (parseInt(four) > parseInt(dayTime)){
        $('#fourText').addClass('future');
      }
      if (parseInt(five) < parseInt(dayTime)){
        $('#fiveText').addClass('past');
      }
      if (parseInt(five) == parseInt(dayTime)){
          $('#fiveText').addClass('present');
      }
      if (parseInt(five) > parseInt(dayTime)){
        $('#fiveText').addClass('future');
      }
      
          
        
      

    
     //}

   
 
   // store  setItem(key,value)
   // read getItem(key)

// $(".saveBtn").on('click',function (event){
// event.preventDefault();
// //once information is saved, store in local storage.
// // savedArray.push(textField.value);
// // console.log(savedArray);

// if ($("textarea").val() !== "") {
    
//     alert('saved');
//     alert($("textarea").val());

//     var textField = $('textarea').val();

//     localStorage.setItem("textField", textField); 

// }
// }); 
    
 //keep information displayed on the page when refreshed
//data.forEach(item => {
//      textField(item)
//  })
//   localStorage.setItem('saved', JSON.stringify(savedArray));
    // localStorage.setItem("textField", (textField));
    // console.log(localStorage)
   
   
  
//add a function that will trigger the time blocks color depnding on the current time.




