
//create varibales Day-Planner
let savedArray = localStorage.getItem('saved');

localStorage.setItem('saved', JSON.stringify(savedArray))
var data = JSON.parse(localStorage.getItem('saved'));
//add the correct date to the top of the page
(function(){
    var nowMoment = moment();
    
    var eDisplay = $('currentDay');

    eDisplay.innerHtml = nowMoment.format('2019-10-19');


})();

//when the user inputs a value, make sure its able to save.


$(".saveBtn").on('click',function(event){
event.preventDefault();


//once information is saved, store in local storage.
savedArray.push(textField.value);
console.log(savedArray);


if ($.trim($("textarea").val()) != "") {
    alert('saved');
    alert($("textarea").val());
    var textField = $('textarea');
localStorage.setItem("textField", (textField)); 

}
}); 
    


 //keep information displayed on the page when refreshed
data.forEach(item => {
     textField(item)
 })
  localStorage.setItem('saved', JSON.stringify(savedArray));
    localStorage.setItem("textField", (textField));
    console.log(localStorage)
   
   
  
//add a function that will trigger the time blocks color depnding on the current time.




