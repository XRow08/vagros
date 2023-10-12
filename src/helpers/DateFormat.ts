import { DateTime } from "luxon";

function toFormat(date: string, format: string = "dd/MM/yyyy") {
  return DateTime.fromISO(date).toUTC().toFormat(format);
}

function isoToTimestamp(iso8601Date: string) {
  return DateTime.fromISO(iso8601Date).toMillis();
}

function secToDays(secs: number) {
  const segundosEmUmDia = 86400;
  return secs / segundosEmUmDia;
}

function timestampToDate(timestamp: number) {
  const sec = Math.floor((timestamp / 1000) % 60);
  const min = Math.floor((timestamp / (1000 * 60)) % 60);
  const hours = Math.floor((timestamp / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    min,
    sec,
  };
}

export const DateFormat = {
  toFormat,
  isoToTimestamp,
  secToDays,
  timestampToDate,
};
