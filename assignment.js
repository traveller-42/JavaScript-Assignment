/*Problem Number 1 */
function kilometerToMeter(kiloMeter){
    /*This function accept a parameter in kilometer and 
    it returns a  meter by converting kilometer into meter
    we know , 1 kilo = 1000 meter*/
    if(kiloMeter>=0)
      return kiloMeter*1000; //here it converts kilo to meter by multiplying 1000 
    else{
      //for invalid case  
      console.log("Invalid Input"); 
    }  
}
var x = kilometerToMeter(6);
console.log(x);

/*Problem Number 2 */
function budgetCalculator(numberOfWatch,numberOfMobile,numberOfLaptop){
   var costPerWatch = 50 ;
   var costPerMobile=100;
   var costPerLaptop=500;
   var totalCost=0;
   if(numberOfWatch>=0&&numberOfLaptop>=0&&numberOfMobile>=0){
       totalCost=( (costPerWatch*numberOfWatch)+(costPerMobile*numberOfMobile)+(costPerLaptop*numberOfLaptop));
       return totalCost;
   }
   else{
       console.log("Invalid Input");
   }  
}
var result = budgetCalculator(1,1,1);
console.log(result);

/*Problem Number 3 */
function hotelCost(howManyDays){
    var totalBill = 0 ;
    if(howManyDays==0){
        return 0 ;
    }
    else if(howManyDays>0){
        if(howManyDays<=10){
            //for calculating less than equal to 10
            totalBill=100*howManyDays; 
            return totalBill;
        }
        else if(howManyDays<=20){
            //for calculating less than equal to 20 and above 10
            totalBill=0;
            totalBill+=(100*10);
            howManyDays=howManyDays-10;
            totalBill+=howManyDays*80; 
            return totalBill;     
        }
        else{
            //for calculating greater than 20
            totalBill=0;
            totalBill+=(100*10);
            howManyDays=howManyDays-10;
            totalBill+=(10*80);
            howManyDays=howManyDays-10;
            totalBill+=(howManyDays*50);
            return totalBill;
        }
    }
    else{
        console.log("Invalid Input");
    }
}
var result = hotelCost(22);
console.log(result);

/*Problem Number 4 */
function megaFriend(arr){
   var i ;
   var maxChar = -1;//it stores the max character count in a string
   var ansOfMaxName = "";//here i saved the maximum length name 
    for(i=0; i<arr.length;i++){
       var name = arr[i];
       var j = 0;
       if(typeof name != 'string'){
          //for invalid input  
          continue;
       }
       else{
           //for valid input
          var count = name.length;
          if(count>maxChar){
              //here i saved the string which contains maximum charecter in each iteration
              ansOfMaxName=name;
              maxChar=count;
          }
       }        
   }
   if(maxChar==-1){
       //when all the values are not string or invalid this will show error message
      console.log("Invalid Input");
   }
   else{
      return ansOfMaxName;
    }
}
var arr = [0,1,2,3,"SIAM"]; 
var result = megaFriend(arr);
console.log(result);
