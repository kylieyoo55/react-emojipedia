import React from "react"
import App from "./App"

function Dictionary(emo){
   
    return(
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
          {emo.emoji}
          </span>
          <span>{emo.name}</span>
        </dt>
        <dd>
         {emo.meaning}
        </dd>
      </div>
    )
}

export default Dictionary;