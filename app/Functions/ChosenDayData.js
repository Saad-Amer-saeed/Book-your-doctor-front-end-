function ChosenDayData(chosenDay, weekSchedule) {
  switch (chosenDay) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 0:
      dayName = "Saturday";
      break;
    default:
      dayName = "Unknown";
  }

  function getDaySchedule(day) {
    const daySchedule = weekSchedule.find((item) => item.day === day);
    if (daySchedule) {
      const { open, close } = daySchedule.times;
      return { open, close };
    } else {
      return `Sorry, we don't have schedule information for ${day}.`;
    }
  }

  const OpenAndCloseDay = getDaySchedule(dayName);

  function generateTimeSlots(startTime, endTime, slotDuration) {
    // Parse start and end times
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    // Convert start and end times to minutes
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    // Calculate slot duration in minutes
    const [slotHour, slotMinute] = slotDuration.split(":").map(Number);
    const slotTotalMinutes = slotHour * 60 + slotMinute;

    // Initialize array to store time slots
    const timeSlots = [];

    // Generate time slots
    for (
      let i = startTotalMinutes;
      i < endTotalMinutes;
      i += slotTotalMinutes
    ) {
      const hour = Math.floor(i / 60);
      const minute = i % 60;

      // Format hour and minute to HH:MM format
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");

      // Add time slot to array
      timeSlots.push(`${formattedHour}:${formattedMinute}`);
    }

    return timeSlots;
  }

  // Example usage
  // const startTime = "15:30";
  // const endTime = "18:30";
  // const slotDuration = "00:30"; // 30 minutes slot duration
  const startTime = OpenAndCloseDay.open;
  const endTime = OpenAndCloseDay.close;
  const slotDuration = "00:30"; // 30 minutes slot duration

  const timeSlots = generateTimeSlots(startTime, endTime, slotDuration);
  return timeSlots;
}
export default ChosenDayData;
