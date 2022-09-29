    let screen=document.getElementById('output-screen');
    let buttons=document.querySelectorAll('.btn');
    let screenValue='';
   
    
   for(item of buttons)
   {
      item.addEventListener('click',(e)=>
      {
         buttonText=e.target.innerText;
         console.log('button text is',buttonText)

         if(buttonText=='c')
         {
                screenValue="";
                screen.value=screenValue;
         }else if(buttonText == '=')
         {
            screen.value=eval(screenValue);
            // if(screenValue==screen.value)
            // {
            //     screen.value=eval(screenValue);
            // }
         }
         else{
            screenValue += buttonText;
            screen.value=screenValue;
         }

      })

   }
 


   

