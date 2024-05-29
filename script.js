

var btn = document.getElementById("submit");
var myElement = document.getElementById('myElement');
var img = document.getElementById('img');
var place = document.getElementById('name');



btn.addEventListener("click",()=>{

    let option1 = document.getElementById("nature").value;
    var option2= document.getElementById("transport").value;
    var option3= document.getElementById("people").value;
   

    
        document.getElementById("imgSection").style.visibility="visible";
        myElement.innerHTML="your choice: "+option1+" " +option2+" "+option3; 

        if(option1=='water' && option2=='hourse-boat' && option3=='Less-People'){
            img.src="images/DAL.webp";
            place.innerHTML="DAL LAKH";

        }else if(option1=='mountains' && option2=='Cars' && option3=='More-people'){
            img.src="images/gulmarg1.png";
            place.innerHTML="GULMARG";

        }else if(option1=='trees' && option2=='Buses' && option3=='no people'){
            img.src="images/SON.webp";
            place.innerHTML="SONAMARG";

        }
        else{
            document.getElementById("imgSection").style.visibility="hidden";
            

        }
        
    
});
