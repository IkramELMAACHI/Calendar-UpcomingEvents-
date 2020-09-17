import React, { useEffect, useState } from 'react'

export default function UpcomingEvents() {
const [UpEvents, setUpEvents] = useState([])
const monthNames = [
"January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

 const Day = (start, end) =>{
   if( new Date(`${start}`).getDate() == (new Date(`${end}`).getDate() - 1)){
       console.log( new Date(`${start}`).getDate() );
       return new Date(`${start}`).getDate() 
   }else{
    console.log( new Date(`${end}`).getDate() );

      return ( new Date(`${start}`).getDate() + '-' +(new Date(`${end}`).getDate() - 1)) 
   }
   
   
 }
// document.write("The current month is " + monthNames[date.getMonth()]);
useEffect(() => {
fetch('/up-event.json').then((res)=>{
  
return res.json() 

}).then((data)=>{
    setUpEvents(data)
console.log(data);
}
)  
}, [])

    return (
        <div className='UpEvents'>
            <h3> Upcoming Events </h3>
            <div>
                {
                    UpEvents.splice(0,3).map( (UpEvent ,index) =>
    <div className='UpEvent'   key = {index}>
        <div>
               <h2 className='UpEvent-day m-0'> 
                    {

                   Day(UpEvent.startRecur, UpEvent.endRecur)
                     } </h2>
                    <span className='UpEvent-month'>
                   {monthNames[new Date(`${UpEvent.startRecur}`).getMonth()]}
                    </span>
          </div>
                 

                    <h3 className='UpEvent-title m-0'>{UpEvent.title }  </h3>
                    <div>
                    <div className='UpEvent-time'> {UpEvent.start +'--'+UpEvent.end }   </div>
                    <div className='UpEvent-place'>{UpEvent.place } </div>
                    </div>
                  
                </div>
                    )
                }
        
    </div>
        </div>
    )
}
