var q = Math.floor(Math.random()*100)+1; /*this is for the program to make random numbers*/

	var h=q%2;/*this is to find out if a number is even or not*/

	if (h==0)

		alert(" number is even");

	else
		alert (" number is odd");

	for (var count=1;count<=10;count++)/* this is to loop*/
	{
       
         let num = prompt ("please enter a number:'any number'");

                 if(num>q){
  	                    alert("number is higher, make another guess");
                   }

                 if (num<q){
  	                     alert ("number is lower make another guess");
                   }

                 if (num==q){
  	                     alert("you win!!!");
                    	break;
                   }
                 if (count==10) { /*incase you reah 10 tims and still havent figured the number out*/
                    	alert("you lose");
                   }   	      

    }   	  	

