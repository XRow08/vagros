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

export const DateFormat = {
  toFormat,
  isoToTimestamp,
  secToDays,
};
