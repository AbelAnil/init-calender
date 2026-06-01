

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('calendar-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';

    function renderCalendar() {
        container.innerHTML = ''; // Clear existing

        calendarData.forEach(monthData => {
            // Check if month has events matching the filter
            const hasVisibleEvents = monthData.events.some(event => {
                if (currentFilter === 'all') return true;
                return event.activities.some(act => act.type.toLowerCase().includes(currentFilter) || act.type === 'Combined');
            });

            if (!hasVisibleEvents) return;

            const monthSection = document.createElement('section');
            monthSection.className = 'month-section';

            const monthTitle = document.createElement('h2');
            monthTitle.className = 'month-title';
            monthTitle.textContent = monthData.month;
            monthSection.appendChild(monthTitle);

            const eventsGrid = document.createElement('div');
            eventsGrid.className = 'events-grid';

            monthData.events.forEach(event => {
                // Filter activities inside the event based on selected filter
                const visibleActivities = event.activities.filter(act => {
                    if (currentFilter === 'all') return true;
                    return act.type.toLowerCase().includes(currentFilter) || act.type === 'Combined';
                });

                if (visibleActivities.length === 0) return;

                const card = document.createElement('div');
                card.className = 'event-card';

                let metaHTML = '';
                if (event.actual_date) {
                    metaHTML = `
                        <div class="event-meta">
                            <div><strong>Actual Date:</strong> ${event.actual_date}</div>
                            <div><strong>Reason:</strong> ${event.reason}</div>
                        </div>
                    `;
                }

                let activitiesHTML = visibleActivities.map(act => `
                    <div class="activity-section">
                        <div class="activity-type">${act.type} Track</div>
                        <div class="activity-name">${act.name}</div>
                        <div class="activity-details">
                            <p>${act.description}</p>
                            <div style="margin-top: 0.5rem">
                                <span class="tag">⏱ ${act.duration}</span>
                                <span class="tag">📝 ${act.format}</span>
                            </div>
                            ${act.prerequisites ? `<div style="margin-top: 0.3rem; font-size: 0.8rem"><em>Req: ${act.prerequisites}</em></div>` : ''}
                        </div>
                    </div>
                `).join('');

                card.innerHTML = `
                    <div class="event-header">
                        <span class="event-date-badge">${event.scheduled_date || event.header_date}</span>
                        <h3 class="event-title">${event.event_name}</h3>
                    </div>
                    ${metaHTML}
                    ${activitiesHTML}
                `;

                eventsGrid.appendChild(card);
            });

            monthSection.appendChild(eventsGrid);
            container.appendChild(monthSection);
        });
    }

    // Initial render
    renderCalendar();

    // Filtering logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            // 'all', 'btech', 'others'
            renderCalendar();
        });
    });
});
