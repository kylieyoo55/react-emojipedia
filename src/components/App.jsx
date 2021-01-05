import React from "react";
import Dictionary from "./Dict";
import emoji from "../emojipedia"




function CreateDict(emo){
  return (
  <Dictionary
  key={emo.id} 
  emoji={emo.emoji} 
  name={emo.name} 
  meaning={emo.meaning} 
  />
  )
}

function App(){
  return(
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emoji.map(CreateDict)}
        
        </dl>
        </div>
  )
}

export default App;
