import React from 'react';

function App(){

    const heading = {
    
    }
    
    let currDate = new Date();
    currDate = currDate.getHours();
    let greeting = "";
    
    if(currDate >=1 && currDate < 12){
        greeting = "Good Morning";
        heading.color = "green";
    }else if(currDate >=12 && currDate < 19){
        greeting = "Good AfterNoon";
        heading.color = "orange";
    }else{
        greeting = "Good night";
        heading.color = "purple";
    }

    return(
        <>
    <div className="center">
    <h1>Hello All, <span style= {heading}> {greeting} </span></h1>
    </div>
    </>
    )
}

export default App;


