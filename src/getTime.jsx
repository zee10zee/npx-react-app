import React from "react";



         function getTime(){
            var date = new Date(2020, 1,1,15);
    
            // full year  date.getFullYear();
    
            // time 
            var currentTime = date.getHours(); console.log(currentTime)
            var customStyle = {
                color : ""
            }
    
            let greeting;
    
            if(currentTime < 12){
                greeting = "good Morning"
                customStyle.color = "blue";
            }else if(currentTime < 18){
                greeting = "good afternoon"
                customStyle.color = "green";
    
            }else{
                greeting = "good Night !"
                customStyle.color = "#ccc";
            }
    
             return(<div>
                <h1 style={{textTransform: "capitalize"}} >hello noori ! 
                <span style={customStyle} > {greeting}</span></h1>
               </div>);
         }
export default getTime;