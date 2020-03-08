import React from 'react'
import { UserConsumer } from './UserContext'

export default function Punk() {
    return (
        <UserConsumer>
        {

            (anything) => { return <div> 
                                     
                        
           { anything.map(same => {
          return <div > 
            <h3>{same.name}</h3>
            <h3>{same.tagline}</h3>
            <h3>{same.first_brewed}</h3>
            <h3>{same.description}</h3>  
            <img src={same.image_url} />
                <br/>
                 </div>
                                   })} 

                                 </div> }          
                     
        }
        </UserConsumer>         
    )
}
