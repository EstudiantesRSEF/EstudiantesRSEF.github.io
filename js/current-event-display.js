/**
 * Current Event Display for Jekyll
 * This script identifies and highlights the current event and the next upcoming event
 * from a Jekyll schedule data structure (site.data.PLANCKS25.schedule).
 */

document.addEventListener('DOMContentLoaded', function() {
  // Schedule data will be loaded from Jekyll in the HTML template
  // We expect scheduleData to be populated with the site.data.PLANCKS25.schedule content
  
  // Function to parse time strings like "10:00 - 18:00" into Date objects
  function parseTimeRange(timeString, currentDate) {
    const [startTime, endTime] = timeString.split(" - ");
    
    // Create date objects for start and end times
    const startHour = parseInt(startTime.split(":")[0]);
    const startMinute = parseInt(startTime.split(":")[1]);
    
    const endHour = parseInt(endTime.split(":")[0]);
    const endMinute = parseInt(endTime.split(":")[1]);
    
    const startDate = new Date(currentDate);
    startDate.setHours(startHour, startMinute, 0);
    
    const endDate = new Date(currentDate);
    endDate.setHours(endHour, endMinute, 0);
    
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
  
  // Function to find current and next events
  function findCurrentAndNextEvents() {
    // Get the current date and time
    const now = new Date(); // Use this in production
    // const now = new Date("2023-05-01T16:30:00"); // For testing specific times
    
    const currentDayOfWeek = getDayOfWeek(now);
    const currentFormattedDate = formatDate(now);
    
    // Find the schedule for the current day
    const todaySchedule = window.scheduleData.find(day => 
      day.day.includes(currentDayOfWeek) || day.date.includes(currentFormattedDate)
    );
    
    if (!todaySchedule) {
      return { currentEvent: null, nextEvent: null, message: "No events scheduled for today" };
    }
    
    let currentEvent = null;
    let nextEvent = null;
    
    // Loop through events to find current and next events
    for (let i = 0; i < todaySchedule.events.length; i++) {
      const event = todaySchedule.events[i];
      const { start, end } = parseTimeRange(event.hour, now);
      
      // Check if the current time is within this event's time range
      if (now >= start && now <= end) {
        currentEvent = event;
      }
      
      // Check for the next event
      if (now < start && (!nextEvent || start < parseTimeRange(nextEvent.hour, now).start)) {
        nextEvent = event;
      }
    }
    
    // If no current event was found but we have a next event
    if (!currentEvent && nextEvent) {
      return { 
        currentEvent: null, 
        nextEvent, 
        message: "No event is currently happening"
      };
    }
    
    // If current event was found but no next event on the same day
    if (currentEvent && !nextEvent) {
      // Try to find the first event of the next day
      const currentDayIndex = window.scheduleData.findIndex(day => 
        day.day.includes(currentDayOfWeek) || day.date.includes(currentFormattedDate)
      );
      
      if (currentDayIndex < window.scheduleData.length - 1) {
        const nextDay = window.scheduleData[currentDayIndex + 1];
        if (nextDay.events.length > 0) {
          nextEvent = nextDay.events[0];
          nextEvent.nextDay = true; // Mark as being on the next day
          nextEvent.dayInfo = nextDay; // Store day info for display
        }
      }
    }
    
    return { currentEvent, nextEvent, message: "Events found" };
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
        <div class="date">
          <i class="fa fa-clock-o"></i>
          ${event.hour}
          ${nextDayInfo}
        </div>
        <h5>${event.title}</h5>
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
      </div>
    `;
  }
  
  // Function to update the display
  function updateEventDisplay() {
    const { currentEvent, nextEvent, message } = findCurrentAndNextEvents();
    
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
          <p>There is no event happening right now</p>
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
    }
    
    .next-event {
      background-color: rgba(33, 150, 243, 0.1);
      border-left: 4px solid #2196F3;
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
  
  // Update the display initially
  updateEventDisplay();
  
  // Update the display every minute
  setInterval(updateEventDisplay, 60000);
});