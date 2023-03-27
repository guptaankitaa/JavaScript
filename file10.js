
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="button_su">
        <span class="su_button_circle">
        </span>
        <a href="#" class="button_su_inner" onclick="callingFunction()">
        <span class="button_text_container" >
            By calling a function
        </span>
    </a>
    </div>

    <div class="button_su">
        <span class="su_button_circle">
        </span>
        <a href="#" class="button_su_inner">
        <span class="su_button_text_container" id="thirdway">
            using inline event
        </span>
    </a>
    </div>
    

    <div class="button_su">
        <span class="su_button_circle">
        </span>
        <a href="#" class="button_su_inner">
        <span class="su_button_text_container" id="fourthway">
           using querySelector eventlistner
        </span>
    </a>
    </div>
    
    <script>
        const callingFunction = () =>{
            alert("Second Wayyyyyyyyyyyyyyy.............");
        }

        const thirdway = document.getElementById('thirdway');
        thirdway.onclick = function(){
            alert('Third Wayyyyyyyyyyyyyyy............');
        }
        thirdway.onclick = function(){
            console.log('Third Wayyyyyyyyyyyyyyy............');
        }  
        //this work on top to bottom only print in console

        const fourthway = document.querySelector('#fourthway');           //only chng 1st matching element
        fourthway.addEventListener('click',() =>{
            alert("fourth wayyyyyyyyyyy.............");
        })

        fourthway.addEventListener('click',() =>{
            console.log("fourth wayyyyyyyyyyy.............");
        })

        //both work
    </script>
</body>
</html>

//queryselectorall is for to no of clss 
//to get all the info of event
 <script>
      

        const fourthway = document.getElementById('fourthway');
       
        const checkEvent = () =>{
            alert('heyyyy thereeeeeeeeeee..........');
            //to get all the info of event
            console.log(event);
            console.log(event.target);
            console.log(event.type);
        }

       fourthway.addEventListener('click', checkEvent);
        
    </script>

//mouseEvnts..................................................

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main-div{
            width: 100vw;
            height: 100vh;
            display: grid;
            place-items: center;
        }

        #box{
            width: 100px;
            height: 100vh;
            background: gold;
        }
    </style>
</head>
<body>
    <div class="main-div">
        <div id="box"></div>
    </div>

    <script>

        const mEnter = document.getElementById('box');

        mEnter.addEventListener('mouseenter', () =>{
            mEnter.style.backgroundColor = 'pink';
            console.log('mouse entr vro');
        });

        mEnter.addEventListener('mouseleave', () =>{
            console.log('mouse entr vro');
            mEnter.style.backgroundColor = 'blue';
           
        });
    </script>
</body>
</html>
