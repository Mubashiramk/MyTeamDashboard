import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { newProjectdata } from "../../Assets/newProjectData";

export const Calendar = () => {
  return (
    <div className="ki">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        customButtons={{
          new: {
            text: "new",
            click: () => console.log("new event"),
          },
        }}
        events={newProjectdata}
        eventColor="rgba(57, 84, 255, 1)"
        nowIndicator
        // dateClick={(e) => console.log(e.dateStr)}
        // eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
};
