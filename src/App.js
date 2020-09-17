import React, { useEffect } from 'react';

import './App.css';
import Calendar from './Components/Calendar';
import Header from './Components/Header';
import Nav from './Components/Nav';
import UpcomingEvents from './Components/UpcomingEvents';

function App() {

  // var calendar = new Calendar(calendarEl, {
  //   events: [
  //     // my event data
  //   ],
  //   eventColor: '#378006'
  // });


  const methode = () => {
    // document.querySelector('.fc-daygrid-event-harness').parentElement 
    //  console.log( document.querySelector('.fc-daygrid-event-harness') )
  }
  useEffect(() => {
    methode()
    //  const element =   ReactDOM.findDOMNode(this).querySelector(".fc-daygrid-event-harness")
    // event.parentElement.classList.add('events')   
    // console.log(element);
    console.log(document.querySelector('.fc-daygrid-event-harness'))
  }, [])



  // }
  return (
    <div className="App">

   <Header /> 

     

      <main>
          <Nav /> 
         
          <div className='UpEvent-Calender'>
        <UpcomingEvents/>

       <Calendar /> 
        </div>

      </main>
      {/* <main>
      <h3>
        Upcoming Events
      </h3>
      <div className="card">
 
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
    </main> */}



    </div>
  );
}

export default App;
