const stringToDate = (_date, _format, _delimiter) => {
  var formatLowerCase = _format.toLowerCase();
  var formatItems = formatLowerCase.split(_delimiter);
  var dateItems = _date.split(_delimiter);
  var monthIndex = formatItems.indexOf("mm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var month = parseInt(dateItems[monthIndex]);
  month -= 1;
  var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
  return formatedDate;
};

export const cleanCraftDate = (thisDate) => {
  // THIS STRIPS OUT TIMES!
  if (thisDate) {
    const splitDate = thisDate.split("T")[0];
    return stringToDate(splitDate, "yyyy-MM-dd", "-");
  }
  return null;
};

const isItToday = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end || start);
  const now = new Date();
  const startTomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return startDate <= startTomorrow && endDate >= now;
};

const isItTomorrow = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end || start);
  const now = new Date();
  const startTomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const endTomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 2
  );
  // console.log(startTomorrow, "\n", endTomorrow, "\n\n");
  return startDate <= endTomorrow && endDate >= startTomorrow;
};

const isItThisWeekend = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end || start);
  const now = new Date();
  const theDay = now.getDay();
  const daysToFriday = theDay < 5 && (theDay > 0 ? 5 - theDay : 0);
  const daysToSunday =
    daysToFriday === 0
      ? theDay === 5
        ? 2
        : theDay === 6
        ? 1
        : 0
      : daysToFriday + 2;
  const thisWeekendStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysToFriday
  );
  const thisWeekendEnd = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysToSunday + 1
  );
  return startDate <= thisWeekendEnd && endDate >= thisWeekendStart;
};

const isItNextWeek = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end || start);
  const now = new Date();
  const endOfNextWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 8
  );
  return startDate <= endOfNextWeek && (end ? endDate >= now : true);
};

const isItNextWeekend = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end || start);
  const now = new Date();
  const theDay = now.getDay();
  const daysToFriday = theDay < 5 && theDay > 0 ? 5 - theDay : 0;
  const daysToSunday =
    daysToFriday === 0
      ? theDay === 5
        ? 2
        : theDay === 6
        ? 1
        : 0
      : daysToFriday + 2;
  const thisWeekendStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysToFriday + 7
  );
  const thisWeekendEnd = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysToSunday + 8
  );
  return startDate <= thisWeekendEnd && endDate >= thisWeekendStart;
};

const isItNextMonth = (start, end) => {
  const now = new Date();
  const startDate = new Date(start);
  const endDate = new Date(end || start);
  const endOfNextMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate()
  );
  return startDate <= endOfNextMonth && endDate >= now;
};

export const timeFilters = {
  today: isItToday,
  tomorrow: isItTomorrow,
  thisWeekend: isItThisWeekend,
  nextWeek: isItNextWeek,
  nextWeekend: isItNextWeekend,
  nextMonth: isItNextMonth,
};

export const dateFormat = (time) => {
  const now = new Date(time);
  const theDate = now.toLocaleDateString("en-gb", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const theTime = Intl.DateTimeFormat("en", {
    timeZone: "Asia/Dubai",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now);
  return theTime + " " + theDate;
};

export const getDate = (time) => {
  const now = new Date(time);
  return now.toLocaleDateString("en-gb", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getShortDate = (time) => {
  const now = new Date(time);
  return now.toLocaleDateString("en-gb", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getTime = (time) => {
  const now = new Date(time);
  return Intl.DateTimeFormat("en-gb", {
    timeZone: "Asia/Dubai",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
    .format(now)
    .replace(/\s/g, "")
    .replace(":", ".")
    .toUpperCase();
};

export const getTimeHaveSpace = (time) => {
  const now = new Date(time);
  return Intl.DateTimeFormat("en-gb", {
    timeZone: "Asia/Dubai",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
    .format(now)
    .replace(/\s/g, " ")
    .replace(":", ".");
};

export const getDateDay = (time) => {
  // this should be coming in as a string
  // console.log("getDateDay 174: ", time, typeof time);
  // const now = new Date(time);
  let now = new Date(time);
  return (
    now.toLocaleDateString("en-gb", {
      timeZone: "Asia/Dubai",
      weekday: "long",
    }) +
    " " +
    now.toLocaleDateString("en-gb", {
      timeZone: "Asia/Dubai",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
};

export const getDateDayNoTimeZone = (time) => {
  let now = new Date(time);
  return (
    now.toLocaleDateString("en-gb", {
      weekday: "long",
    }) +
    " " +
    now.toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
};

export const getShortDay = (time) => {
  // this should be coming in as a string
  // console.log("getDateDay 174: ", time, typeof time);
  // const now = new Date(time);
  let now = new Date(time);
  return now.toLocaleDateString("en-gb", {
    timeZone: "Asia/Dubai",
    month: "long",
    day: "numeric",
  });
};

export const getShortDayNoTimeZone = (time) => {
  // this should be coming in as a string
  // console.log("getDateDay 174: ", time, typeof time);
  // const now = new Date(time);
  let now = new Date(time);
  return now.toLocaleDateString("en-gb", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getFormatShortDayNoTimeZone = (time, isHaveYear) => {
  // 28_Jan 2023?
  let now = new Date(time);
  let result = isHaveYear
    ? now.toLocaleDateString("en-gb", {
        timeZone: "Asia/Dubai",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : now.toLocaleDateString("en-gb", {
        timeZone: "Asia/Dubai",
        month: "short",
        day: "numeric",
      });
  let index = result.indexOf(" ");
  result = result.substring(0, index) + "_" + result.substring(index + 1);
  return result;
};

export const getTwoDifferenceDayFormatNoTimeZone = (firstDate, secondDate) => {
  let first = new Date(firstDate);
  let second = new Date(secondDate);

  let resultFirst = firstDate
    ? first.toLocaleDateString("en-gb", {
        timeZone: "Asia/Dubai",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  let resultSecond = secondDate
    ? second.toLocaleDateString("en-gb", {
        timeZone: "Asia/Dubai",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  if (!resultFirst && resultSecond) {
    let index = resultSecond.indexOf(" ");
    resultSecond =
      resultSecond.substring(0, index) +
      "_" +
      resultSecond.substring(index + 1);
    return resultSecond;
  } else if (resultFirst && resultSecond) {
    return `${resultFirst} - ${resultSecond}`;
  } else if (resultFirst) {
    let index = resultFirst.indexOf(" ");
    resultFirst =
      resultFirst.substring(0, index) + "_" + resultFirst.substring(index + 1);
    return resultFirst;
  } else {
    return "";
  }
};

export const getFormatTwoShortDayNoTimeZone = (
  startDate,
  endDate,
  isHaveYear
) => {
  // 28_29 Jan 2023?
  let now = new Date(endDate);
  let startDateDate = new Date(startDate);
  let result = now.toLocaleDateString("en-gb", {
    year: isHaveYear ? "numeric" : undefined,
    month: "short",
    day: "numeric",
  });
  if (getShortDate(startDate) === getShortDate(endDate)) {
    return getFormatShortDayNoTimeZone(startDate, true);
  } else {
    return `${startDateDate.getDate()}_${result}`;
  }
};

export const getStartDate = (x) => {
  // const now = new Date();
  const now = new Date(
    `${new Date().toLocaleDateString("en-gb", {
      timeZone: "Asia/Dubai",
      year: "numeric",
      month: "long",
      day: "numeric",
    })} 12:00:00`
  );
  const numberNow = Number(now);
  // console.log(now, x);
  const oneDay = 86400000;
  const thisFridayDifference = oneDay * Math.floor(5 - now.getDay());
  const thisSaturdayDifference = thisFridayDifference + oneDay;
  let startDate;
  switch (x) {
    case "tomorrow":
      startDate = new Date(numberNow + oneDay);
      // console.log("tomorrow");
      // console.log(now, startDate);
      break;
    case "thisWeekend":
      startDate = new Date(numberNow + thisFridayDifference);
      // console.log("this weekend");
      break;
    case "nextWeek":
      startDate = new Date(numberNow + thisSaturdayDifference);
      // console.log("next week");
      break;
    case "nextWeekend":
      startDate = new Date(numberNow + thisFridayDifference + 7 * oneDay);
      // console.log("next weekend");
      break;
    case "nextMonth":
      startDate = new Date(`${now.getMonth() + 2}/1/${now.getFullYear()}`);
      // console.log("next month");
      break;
    case "today":
    default:
      // console.log("today");
      startDate = new Date(numberNow);
  }
  return startDate;
};
