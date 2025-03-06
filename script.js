// Basic JavaScript for client-side event display (no API, manual data entry)

const events = [
  {
    title: 'AI Seminar',
    date: '2024-10-26',
    location: 'HKU Room 101',
    description: 'A seminar on the latest AI research.',
    registrationLink: 'https://example.com/ai-seminar',
    category: 'science'
  },
  {
    title: 'Art Exhibition',
    date: '2024-11-15',
    location: 'CUHK Art Museum',
    description: 'An exhibition of contemporary art.',
    registrationLink: 'https://example.com/art-exhibition',
    category: 'art'
  },
  {
    title: "Economics Talk",
    date: "2024-12-01",
    location: "PolyU Lecture Hall",
    description: "Discussion on current economic trends.",
    registrationLink: "https://example.com/economics-talk",
    category: "economics"
  },
  // ... more events (add manually)
];

function displayEvents(eventsToDisplay) {
  const container = document.getElementById('events-container');
  container.innerHTML = ''; // Clear previous content

  if (eventsToDisplay.length === 0) {
    container.innerHTML = '<p>No events found.</p>';
    return;
  }

  eventsToDisplay.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event'); // Add a class for styling

    const title = document.createElement('h3');
    title.textContent = event.title;

    const date = document.createElement('p');
    date.textContent = `Date: ${event.date}`;

    const location = document.createElement('p');
    location.textContent = `Location: ${event.location}`;

    const description = document.createElement('p');
    description.textContent = event.description;

    const registrationLink = document.createElement('a');
    registrationLink.href = event.registrationLink;
    registrationLink.textContent = 'Register Here';
    registrationLink.target = "_blank";

    eventDiv.appendChild(title);
    eventDiv.appendChild(date);
    eventDiv.appendChild(location);
    eventDiv.appendChild(description);
    eventDiv.appendChild(registrationLink);

    container.appendChild(eventDiv);
  });
}

function filterEvents(category) {
  let filteredEvents = events; //start with all events
    if (category !== "all") {
        filteredEvents = events.filter(event => event.category === category);
    }
  displayEvents(filteredEvents);
}

document.addEventListener('DOMContentLoaded', () => {
  displayEvents(events); // Display all events initially

  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      filterEvents(category);
    });
  });
});
