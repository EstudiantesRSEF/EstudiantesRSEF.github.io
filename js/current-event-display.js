/**
 * Current Event Display for Jekyll
 * This script identifies and highlights the current event and the next upcoming event
 * from a Jekyll schedule data structure (site.data.PLANCKS25.schedule).
 */

document.addEventListener('DOMContentLoaded', function() {
  // Schedule data will be loaded from Jekyll in the HTML template
  // We expect scheduleData to be populated with the site.data.PLANCKS25.schedule content
  
  // Function to parse time strings like "10:00 - 18:00" into Date objects
  function parseTimeRange(timeString, dateObj) {
    if (!timeString || timeString.indexOf(" - ") === -1) return null;
    
    const [startTime, endTime] = timeString.split(" - ");
    
    // Create date objects for start and end times
    let startHour, startMinute, endHour, endMinute;
    
    // Handle special cases like "Late"
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
    endDate.setHours(endHour, endMinute, 59); // Add 59 seconds to include the entire minute
    
    return { start: startDate, end: endDate };
  }
  
  // Function to get day of week as a string
  function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }
  
  // Function to format date as "Month Day" (e.g., "May 1st")
  function formatDate(date) {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    
    // Add ordinal suffix
    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) suffix = "st";
    else if (day === 2 || day === 22) suffix = "nd";
    else if (day === 3 || day === 23) suffix = "rd";
    
    return `${month} ${day}${suffix}`;
  }
  
  // Function to parse event date from string format (e.g., "May 1st")
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
    
    // Use 2025 instead of current year
    return new Date(2025, month, day);
  }
  
  // Function to find current and next events
  function findCurrentAndNextEvents() {
    const now = new Date();
    console.log("Current time:", now.toLocaleString());

    // Debug dates being checked
    for (let dayIndex = 0; dayIndex < window.scheduleData.length; dayIndex++) {
        const dayData = window.scheduleData[dayIndex];
        if (!dayData.events || !dayData.date) continue;
        
        // Parse the event date
        const eventDate = parseEventDate(dayData.date);
        console.log(`\nChecking ${dayData.day}, ${dayData.date}`);
        console.log("Event date parsed as:", eventDate.toLocaleString());
        
        // Process events for this day
        for (let i = 0; i < dayData.events.length; i++) {
            const event = dayData.events[i];
            if (!event.hour || event.hour.indexOf(" - ") === -1) continue;
            
            const timeRange = parseTimeRange(event.hour, eventDate);
            if (!timeRange) continue;
            
            console.log(`\nEvent: ${event.title}`);
            console.log(`Time range: ${timeRange.start.toLocaleString()} - ${timeRange.end.toLocaleString()}`);
            console.log(`Is current? ${now >= timeRange.start && now <= timeRange.end}`);
            console.log(`Is future? ${timeRange.start > now}`);
        }
    }
    
    return { currentEvent, nextEvent };
  }
  
  // Function to create an event card
  function createEventCard(event, isCurrentEvent = false) {
    if (!event) return "";
    
    const cardClass = isCurrentEvent ? "current-event" : "next-event";
    
    let nextDayInfo = '';
    if (event.nextDay && event.dayInfo) {
      nextDayInfo = `<div class="next-day-info">${event.dayInfo.day}, ${event.dayInfo.date}</div>`;
    }
    
    return `
      <div class="single-schedules-inner ${cardClass}">
        ${event.hour ? `
          <div class="date">
            <i class="fa fa-clock-o"></i>
            ${event.hour}
          </div>
        ` : ''}
        ${event.hour ? `<h5>${event.title}</h5>` : `<h5 style="text-align: center;">${event.title}</h5>`}
        ${(event.suptitle || event.place) ? `
          <div class="location-container">
            ${event.suptitle ? `<p class="event-suptitle">${event.suptitle}</p>` : ''}
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
        ${nextDayInfo}
      </div>
    `;
  }
  
  // Function to update the display
  function updateEventDisplay() {
    const { currentEvent, nextEvent } = findCurrentAndNextEvents();
    
    const displayElement = document.getElementById('current-event-display');
    if (!displayElement) return;
    
    let htmlContent = '';
    
    if (currentEvent) {
      htmlContent += `
        <div class="event-status-section">
          <h3>HAPPENING NOW</h3>
          ${createEventCard(currentEvent, true)}
        </div>
      `;
    } else {
      htmlContent += `
        <div class="event-status-section">
          <h3>NO CURRENT EVENT</h3>
          <p>There is no event happening right now.</p>
        </div>
      `;
    }
    
    if (nextEvent) {
      htmlContent += `
        <div class="event-status-section">
          <h3>COMING UP NEXT</h3>
          ${createEventCard(nextEvent)}
        </div>
      `;
    }
    
    displayElement.innerHTML = htmlContent;
  }
  
  // Add custom CSS for highlighting current events
  const style = document.createElement('style');
  style.innerHTML = `
    .current-event {
      background-color: rgba(76, 175, 80, 0.1);
      border-left: 4px solid #4CAF50;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 4px;
    }
    
    .next-event {
      background-color: rgba(33, 150, 243, 0.1);
      border-left: 4px solid #2196F3;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 4px;
    }
    
    .event-status-section {
      margin-bottom: 30px;
    }
    
    .event-status-section h3 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
    }
    
    .next-day-info {
      font-size: 0.9rem;
      font-style: italic;
      color: #666;
      margin-top: 5px;
    }
  `;
  document.head.appendChild(style);
  
  // For testing: Log the schedule data to console
  console.log("Schedule data:", window.scheduleData);
  
  // Update the display initially
  updateEventDisplay();
  
  // Update the display every minute
  setInterval(updateEventDisplay, 60000);
});