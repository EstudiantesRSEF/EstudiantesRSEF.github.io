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
    
    let currentEvent = null;
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
            console.log(`Is current? ${now >= timeRange.start && now <= timeRange.end}`);
            
            if (now >= timeRange.start && now <= timeRange.end) {
                currentEvent = {
                    ...event,
                    dayInfo: {
                        day: dayData.day,
                        date: dayData.date
                    }
                };
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

    console.log("Current event found:", currentEvent);
    console.log("Next event found:", nextEvent);
    
    return { currentEvent, nextEvent };
  }

  function updateEventDisplay() {
    const results = findCurrentAndNextEvents();
    console.log("Update results:", results);
    
    const currentDisplay = document.getElementById('current-event-display');
    const nextDisplay = document.getElementById('next-event-display');
    
    // Current Event Display
    if (results.currentEvent) {
        currentDisplay.innerHTML = `
            <div class="single-schedules-inner">
                ${results.currentEvent.hour ? `
                    <div class="date">
                        <i class="fa fa-clock-o"></i>
                        ${results.currentEvent.hour}
                    </div>
                    <h5>${results.currentEvent.title}</h5>
                ` : `
                    <h5 style="text-align: center;">${results.currentEvent.title}</h5>
                `}
                ${(results.currentEvent.suptitle || results.currentEvent.place) ? `
                    <div class="location-container">
                        ${results.currentEvent.suptitle ? `
                            <p class="event-suptitle">${results.currentEvent.suptitle}</p>
                        ` : ''}
                        ${results.currentEvent.place ? `
                            <p class="location">
                                <i class="fa fa-map-marker"></i>
                                ${results.currentEvent.map_link ? `
                                    <a href="${results.currentEvent.map_link}" target="_blank" class="location-link">
                                        ${results.currentEvent.place}
                                        <i class="fa fa-external-link"></i>
                                    </a>
                                ` : results.currentEvent.place}
                            </p>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        currentDisplay.innerHTML = '<div class="single-schedules-inner"><h5 style="text-align: center;">No events happening right now</h5></div>';
    }

    // Next Event Display
    if (results.nextEvent) {
        console.log("Rendering next event:", results.nextEvent);
        nextDisplay.innerHTML = `
            <div class="single-schedules-inner">
                ${results.nextEvent.hour ? `
                    <div class="date">
                        <i class="fa fa-clock-o"></i>
                        ${results.nextEvent.hour}
                        ${results.nextEvent.dayInfo ? `
                            <span style="color: ${results.nextEvent.dayInfo.day !== results.currentEvent?.dayInfo?.day ? '#00a79d' : 'inherit'}">
                                (${results.nextEvent.dayInfo.day})
                            </span>
                        ` : ''}
                    </div>
                    <h5>${results.nextEvent.title}</h5>
                ` : `
                    <h5 style="text-align: center;">${results.nextEvent.title}</h5>
                `}
                ${(results.nextEvent.suptitle || results.nextEvent.place) ? `
                    <div class="location-container">
                        ${results.nextEvent.suptitle ? `
                            <p class="event-suptitle">${results.nextEvent.suptitle}</p>
                        ` : ''}
                        ${results.nextEvent.place ? `
                            <p class="location">
                                <i class="fa fa-map-marker"></i>
                                ${results.nextEvent.map_link ? `
                                    <a href="${results.nextEvent.map_link}" target="_blank" class="location-link">
                                        ${results.nextEvent.place}
                                        <i class="fa fa-external-link"></i>
                                    </a>
                                ` : results.nextEvent.place}
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