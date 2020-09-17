import React from 'react'
import ReactDOM from 'react-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import calendarPlugins from '@fullcalendar/google-calendar'
import ListesEvents from '../ListesEvents.json'
export default function Calendar() {
    return (
        <div className = 'calendar' >
                    <h3 className = 'title-calendar'> My Calendar </h3>
             <FullCalendar
            defaultView="dayGridMonth"
            //  plugins={  dayGridPlugin}
            // weekends={true}
            events= {ListesEvents}
            // eventColor =  'red'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{ 
              left: 'prev',
              center: 'title',
              right: 'next' 
            }}
            eventBorderColor = 'red'
          firstDay = { 1 } 
          dayHeaderFormat={   { weekday: 'long' }    }
            // titleFormat = { [{year : 'numeric', month : 'long'}] }    
          />
        </div>
       
    )
}
