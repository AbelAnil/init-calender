document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    const detailsContainer = document.getElementById('event-details-container');
    const prevBtn = document.getElementById('prev-month-btn');
    const nextBtn = document.getElementById('next-month-btn');
    const monthTitleEl = document.getElementById('current-month-title');

    let currentMonthIndex = 0;
    let selectedEventDay = null;

    // Filter out months that have no events
    const activeMonths = calendarData.filter(m => m.events && m.events.length > 0);

    function renderMonth() {
        if (activeMonths.length === 0) return;
        
        const monthData = activeMonths[currentMonthIndex];
        monthTitleEl.textContent = monthData.month;
        
        // Update buttons
        prevBtn.disabled = currentMonthIndex === 0;
        nextBtn.disabled = currentMonthIndex === activeMonths.length - 1;

        calendarContainer.innerHTML = '';
        selectedEventDay = null; // reset selection when month changes
        renderEventDetails(null); // clear details panel

        const miniCalendar = document.createElement('div');
        miniCalendar.className = 'mini-calendar';
        
        const calendarHeader = document.createElement('div');
        calendarHeader.className = 'calendar-header';
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(d => {
            const dayEl = document.createElement('div');
            dayEl.textContent = d;
            calendarHeader.appendChild(dayEl);
        });
        miniCalendar.appendChild(calendarHeader);

        const calendarGrid = document.createElement('div');
        calendarGrid.className = 'calendar-grid';
        
        const [mName, mYear] = monthData.month.split(' ');
        const dateStr = `1 ${mName} ${mYear}`;
        const firstDay = new Date(dateStr);
        const startDayIndex = firstDay.getDay(); // 0-6
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const mIndex = monthNames.indexOf(mName);
        const daysInMonth = new Date(mYear, mIndex + 1, 0).getDate();
        
        for (let i = 0; i < startDayIndex; i++) {
            const empty = document.createElement('div');
            empty.className = 'calendar-day empty';
            calendarGrid.appendChild(empty);
        }
        
        const eventsByDay = {};
        monthData.events.forEach(event => {
            const str = event.scheduled_date || event.header_date || '';
            const match = str.match(/\d+/);
            if (match) {
                const d = parseInt(match[0], 10);
                eventsByDay[d] = event;
            }
        });
        
        for (let d = 1; d <= daysInMonth; d++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            dayCell.textContent = d;
            
            const currentDayIndex = (startDayIndex + d - 1) % 7;
            const isWeekend = currentDayIndex === 0 || currentDayIndex === 6;
            const academicBusyEvent = monthData.academic_busy_dates && monthData.academic_busy_dates[d.toString()];
            const isAcademicBusy = !!academicBusyEvent;
            const event = eventsByDay[d];
            
            if (event) {
                dayCell.classList.add('event');
                dayCell.title = event.event_name;
                dayCell.addEventListener('click', () => {
                    // Remove selected class from all
                    document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
                    dayCell.classList.add('selected');
                    selectedEventDay = d;
                    renderEventDetails(event, mYear);
                });
            } else if (isWeekend || isAcademicBusy) {
                dayCell.classList.add('busy');
                const reason = isAcademicBusy ? academicBusyEvent : "Weekend";
                dayCell.title = `Unavailable: ${reason}`;
                dayCell.addEventListener('click', () => {
                    // Remove selected class from all
                    document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
                    dayCell.classList.add('selected');
                    selectedEventDay = d;
                    renderBusyDetails(d, mName, mYear, reason);
                });
            } else {
                dayCell.title = "Free to schedule";
                dayCell.addEventListener('click', () => {
                    // Remove selected class from all
                    document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
                    dayCell.classList.add('selected');
                    selectedEventDay = d;
                    renderFreeDetails(d, mName, mYear);
                });
            }
            
            calendarGrid.appendChild(dayCell);
        }
        
        miniCalendar.appendChild(calendarGrid);
        calendarContainer.appendChild(miniCalendar);
    }

    function renderEventDetails(event, year) {
        if (!event) {
            detailsContainer.innerHTML = `
                <div class="empty-state">
                    <p>Select a date on the calendar to view event details.</p>
                </div>
            `;
            return;
        }

        function formatWithDay(dateStr) {
            if (!dateStr) return '';
            if (dateStr.includes(',')) return dateStr;
            const cleanDate = dateStr.split('(')[0].trim();
            const d = new Date(`${cleanDate}, ${year}`);
            if (!isNaN(d)) {
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                return `${dateStr}, ${days[d.getDay()]}`;
            }
            return dateStr;
        }

        let metaHTML = '';
        if (event.actual_date) {
            metaHTML = `
                <div class="event-meta" style="background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); padding: 1rem; max-width: 500px; margin: 0 auto 0.8rem auto; border-radius: 10px; text-align: left; font-size: 0.9rem;">
                    <div style="margin-bottom: 0.3rem;"><strong>Actual Date:</strong> ${formatWithDay(event.actual_date)}</div>
                    <div><strong>Reason:</strong> ${event.reason}</div>
                </div>
            `;
        }

        let activitiesHTML = event.activities.map(act => `
            <div class="activity-section" style="padding: 1rem; background: rgba(0,0,0,0.1); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); margin: 0 1.5rem 0.8rem 1.5rem;">
                <div class="activity-type" style="margin-bottom: 0.5rem; font-weight: bold; letter-spacing: 3px; font-size: 0.85rem; text-align: center;">${act.type} Track</div>
                <div class="activity-name" style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: #fff; text-align: center;">${act.name}</div>
                <div class="activity-details">
                    <p style="font-size: 0.95rem; line-height: 1.5; color: #e2e8f0; margin-bottom: 1rem;">${act.description}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${event.actual_date ? `<span class="tag" style="background: rgba(139, 92, 246, 0.2); padding: 0.25rem 0.6rem; border-radius: 15px; font-size: 0.85rem;">📅 Actual Date: ${formatWithDay(event.actual_date)}</span>` : ''}
                        <span class="tag" style="background: rgba(59, 130, 246, 0.2); padding: 0.25rem 0.6rem; border-radius: 15px; font-size: 0.85rem;">⏱ ${act.duration}</span>
                        <span class="tag" style="background: rgba(236, 72, 153, 0.2); padding: 0.25rem 0.6rem; border-radius: 15px; font-size: 0.85rem;">📝 ${act.format}</span>
                    </div>
                    ${act.prerequisites ? `<div style="margin-top: 0.8rem; font-size: 0.85rem; color: #cbd5e1; padding-top: 0.8rem; border-top: 1px dashed rgba(255,255,255,0.1);"><em><strong>Prerequisites:</strong> ${act.prerequisites}</em></div>` : ''}
                </div>
            </div>
        `).join('');

        detailsContainer.innerHTML = `
            <div class="event-card" style="border: none; background: transparent; padding: 0; box-shadow: none;">
                <div class="event-header" style="align-items: center; text-align: center; margin-bottom: 1rem; margin-top: 1rem;">
                    <span class="event-date-badge" style="align-self: center; font-size: 0.9rem; padding: 0.3rem 1rem; margin-bottom: 0.5rem; display: inline-block;">${formatWithDay(event.scheduled_date || event.header_date)}</span>
                    <h3 class="event-title" style="font-size: 1.8rem; margin-top: 0; text-align: center; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${event.event_name}</h3>
                </div>
                ${metaHTML}
                <div style="margin-top: 0.5rem;">
                    ${activitiesHTML}
                </div>
            </div>
        `;
    }

    function renderBusyDetails(day, month, year, reason) {
        detailsContainer.innerHTML = `
            <div class="event-card" style="border: none; background: transparent; padding: 0; box-shadow: none; text-align: center;">
                <div class="event-header" style="align-items: center; margin-bottom: 2rem;">
                    <span class="event-date-badge" style="font-size: 1.1rem; padding: 0.5rem 1.5rem; display: inline-block;">${day} ${month} ${year}</span>
                    <h3 class="event-title" style="font-size: 2rem; margin-top: 1.5rem; color: #fca5a5;">Unavailable Date</h3>
                </div>
                <div class="event-meta" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 2rem; border-radius: 12px; margin: 0 auto; max-width: 500px;">
                    <p style="font-size: 1.2rem; color: #fecaca; margin: 0;"><strong>Reason:</strong> ${reason.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `;
    }

    function renderFreeDetails(day, month, year) {
        detailsContainer.innerHTML = `
            <div class="event-card" style="border: none; background: transparent; padding: 0; box-shadow: none; text-align: center;">
                <div class="event-header" style="align-items: center; margin-bottom: 2rem;">
                    <span class="event-date-badge" style="font-size: 1.1rem; padding: 0.5rem 1.5rem; display: inline-block;">${day} ${month} ${year}</span>
                    <h3 class="event-title" style="font-size: 2rem; margin-top: 1.5rem; color: #86efac;">Free Date</h3>
                </div>
                <div class="event-meta" style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); padding: 2rem; border-radius: 12px; margin: 0 auto; max-width: 500px;">
                    <p style="font-size: 1.2rem; color: #bbf7d0; margin: 0;">This date is free to schedule new events or activities.</p>
                </div>
            </div>
        `;
    }

    prevBtn.addEventListener('click', () => {
        if (currentMonthIndex > 0) {
            currentMonthIndex--;
            renderMonth();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentMonthIndex < activeMonths.length - 1) {
            currentMonthIndex++;
            renderMonth();
        }
    });

    // Initial render
    renderMonth();
});
