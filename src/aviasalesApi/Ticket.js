/* eslint-disable class-methods-use-this */
export default class TicketData {
  getDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    let min = minutes - hours * 60;
    if (min < 10) min = `0${min}`;
    return `${hours}:${min}`;
  };

  getStart = (date) => {
    const h = new Date(date).getHours();
    const m = new Date(date).getMinutes();
    if (m < 10) return `${h}:0${m}`;
    return `${h}:${m}`;
  };

  getFinish = (start, duration) => {
    const startMs = new Date(start).getTime();
    const durationMs = duration * 60 * 1000;
    const resultMs = startMs + durationMs;
    const h = new Date(resultMs).getHours();
    const m = new Date(resultMs).getMinutes();
    if (m < 10) return `${h}:0${m}`;
    return `${h}:${m}`;
  };

  quanityStops = (arr) => {
    const stops = arr.length;
    if (stops === 1) return `1 ПЕРЕСАДКА`;
    if (stops > 1 && stops <= 4) return `${stops} ПЕРЕСАДКИ`;
    if (stops > 4) return `${stops} ПЕРЕСАДОК`;
    return `НЕТ ПЕРЕСАДОК`;
  };

  getStops = (arr) => {
    return arr.join(", ");
  };
}
