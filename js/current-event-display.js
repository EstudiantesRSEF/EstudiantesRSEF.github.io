/**
 * Current Event Display for Jekyll
 * This script identifies and highlights the current event and the next upcoming event
 * from a Jekyll schedule data structure (site.data.PLANCKS25.schedule).
 */

document.addEventListener('DOMContentLoaded', function() {
  function parseTimeRange(timeString, dateObj) {
    if (!timeString || timeString.indexOf(" - ") === -1) return null;
    
    const [startTime, endTime] = timeString.split(" - ");
    
    let startHour, startMinute, endHour, endMinute;
    
    if (startTime === "Late") {
      startHour = 23; 
      startMinute = 0;
    } else {
      const startParts = startTime.split(":");
      startHour = parseInt(startParts[0], 10);
      startMinute = parseInt(startParts[1], 10);
    }
    
    if (endTime === "Late") {
      endHour = 23;
      endMinute = 59;
    } else {
      const endParts = endTime.split(":");
      endHour = parseInt(endParts[0], 10);
      endMinute = parseInt(endParts[1], 10);
    }
    
    const startDate = new Date(dateObj);
    startDate.setHours(startHour, startMinute, 0);
    
    const endDate = new Date(dateObj);
    endDate.setHours(endHour, endMinute, 59);
    
    return { start: startDate, end: endDate };
  }
  
  function parseEventDate(dateStr) {
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
    let month = -1;
    for (let i = 0; i < monthNames.length; i++) {
        if (dateStr.includes(monthNames[i])) {
            month = i;
            break;
        }
    }
    
    const dayMatch = dateStr.match(/(\d+)(st|nd|rd|th)?/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : 1;
    
    return new Date(2025, month, day);
  }
  
  function findCurrentAndNextEvents() {
    const now = new Date();
    console.log("Current time:", now.toLocaleString());
    
    let currentEvents = [];
    let nextEvent = null;

    for (let dayIndex = 0; dayIndex < window.scheduleData.length; dayIndex++) {
        const dayData = window.scheduleData[dayIndex];
        if (!dayData.events || !dayData.date) continue;
        
        const eventDate = parseEventDate(dayData.date);
        console.log(`\nChecking ${dayData.day}, ${dayData.date}`);
        console.log("Event date parsed as:", eventDate.toLocaleString());
        
        for (let i = 0; i < dayData.events.length; i++) {
            const event = dayData.events[i];
            if (!event.hour || event.hour.indexOf(" - ") === -1) continue;
            
            const timeRange = parseTimeRange(event.hour, eventDate);
            if (!timeRange) continue;
            
            console.log(`\nEvent: ${event.title}`);
            console.log(`Time range: ${timeRange.start.toLocaleString()} - ${timeRange.end.toLocaleString()}`);
            
            if (now >= timeRange.start && now <= timeRange.end) {
                currentEvents.push({
                    ...event,
                    dayInfo: {
                        day: dayData.day,
                        date: dayData.date
                    }
                });
            } else if (timeRange.start > now && !nextEvent) {
                nextEvent = {
                    ...event,
                    dayInfo: {
                        day: dayData.day,
                        date: dayData.date
                    },
                    nextDay: dayIndex > 0
                };
            }
        }
    }

    console.log("Current events found:", currentEvents);
    console.log("Next event found:", nextEvent);
    
    return { currentEvents, nextEvent };
}

function updateEventDisplay() {
    const { currentEvents, nextEvent } = findCurrentAndNextEvents();
    
    const currentDisplay = document.getElementById('current-event-display');
    const nextDisplay = document.getElementById('next-event-display');
    
    // Current Events Display
    if (currentEvents.length > 0) {
        currentDisplay.innerHTML = currentEvents.map(event => `
            <div class="single-schedules-inner">
                ${event.hour ? `
                    <div class="date">
                        <i class="fa fa-clock-o"></i>
                        ${event.hour}
                    </div>
                    <h5>${event.title}</h5>
                ` : `
                    <h5 style="text-align: center;">${event.title}</h5>
                `}
                ${(event.suptitle || event.place) ? `
                    <div class="location-container">
                        ${event.suptitle ? `
                            <p class="event-suptitle">${event.suptitle}</p>
                        ` : ''}
                        ${event.place ? `
                            <p class="location">
                                <i class="fa fa-map-marker"></i>
                                ${event.map_link ? `
                                    <a href="${event.map_link}" target="_blank" class="location-link">
                                        ${event.place}
                                        <i class="fa fa-external-link"></i>
                                    </a>
                                ` : event.place}
                            </p>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('');
    } else {
        currentDisplay.innerHTML = '<div class="single-schedules-inner"><h5 style="text-align: center;">No events happening right now</h5></div>';
    }

    // Next Event Display
    if (nextEvent) {  // Changed from results.nextEvent
      console.log("Rendering next event:", nextEvent);
      nextDisplay.innerHTML = `
          <div class="single-schedules-inner">
              ${nextEvent.hour ? `
                  <div class="date">
                      <i class="fa fa-clock-o"></i>
                      ${nextEvent.hour}
                      ${nextEvent.dayInfo ? `
                          <span style="color: ${nextEvent.dayInfo.day !== currentEvents[0]?.dayInfo?.day ? '#00a79d' : 'inherit'}">
                              (${nextEvent.dayInfo.day})
                          </span>
                      ` : ''}
                  </div>
                  <h5>${nextEvent.title}</h5>
              ` : `
                  <h5 style="text-align: center;">${nextEvent.title}</h5>
              `}
              ${(nextEvent.suptitle || nextEvent.place) ? `
                  <div class="location-container">
                      ${nextEvent.suptitle ? `
                          <p class="event-suptitle">${nextEvent.suptitle}</p>
                      ` : ''}
                      ${nextEvent.place ? `
                          <p class="location">
                              <i class="fa fa-map-marker"></i>
                              ${nextEvent.map_link ? `
                                  <a href="${nextEvent.map_link}" target="_blank" class="location-link">
                                      ${nextEvent.place}
                                      <i class="fa fa-external-link"></i>
                                  </a>
                              ` : nextEvent.place}
                          </p>
                      ` : ''}
                  </div>
              ` : ''}
          </div>
      `;
  } else {
      nextDisplay.innerHTML = '<div class="single-schedules-inner"><h5 style="text-align: center;">No upcoming events</h5></div>';
  }
}
  
  // Initial update
  updateEventDisplay();
  
  // Update every minute
  setInterval(updateEventDisplay, 60000);
});