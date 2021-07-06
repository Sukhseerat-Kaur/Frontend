fetch("https://codeforces.com/api/contest.list?gym=false")
  .then((res) => res.json())
  .then((data) => {
    data.result.forEach((contestObj) => {
      if (contestObj.phase == "BEFORE") {
        addContestTohtml(contestObj);
      }
    });
  });

let container = document.querySelector(".container");

function addContestTohtml(contestObj) {
  let position = "beforeend";

  let startTimeMillisecs = contestObj.startTimeSeconds * 1000;
  let startTime = unixMillisecsToHumanReadable(startTimeMillisecs);
  let day = startTime.toLocaleString("en-US", { weekday: "long" });
  let date = startTime.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  let currDateTimeUNIX = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  let diffInTime = startTimeMillisecs - currDateTimeUNIX.getTime();

  // Calculating the no. of days between two dates
  let diffInDays;
  if (diffInTime >= oneDay) {
    diffInDays = Math.round(diffInTime / oneDay) + " Days";
  } else {
    diffInTime = diffInTime / 1000;
    let hours = Math.floor(diffInTime / 3600);
    diffInTime = diffInTime % 3600;
    let minutes = Math.floor(diffInTime / 60);
    let secs = Math.floor(diffInTime % 60);
    diffInDays = `${hours} : ${minutes} : ${secs}`;
  }

  // console.log(contestObj.durationSeconds);

  // let duration = contestObj.durationSeconds;
  // let durationHours = Math.floor(duration / 3600);
  // duration = duration - durationHours;
  // let durationMins = Math.floor(duration / 60);

  // duration = `${durationHours} : ${durationMins}`;

  let addhtml = ` <div class="contest-card">
                    <div class="contest-name"><a href="https://codeforces.com/contests">${contestObj.name}</a></div>
                    <div class="day">Day: ${day}</div>
                    <div class="start-time">Date: ${date}</div>
                    <div class="time-to-start">Starts In: ${diffInDays}</div>
                   
                  </div>`;

  container.insertAdjacentHTML(position, addhtml);
}

function unixMillisecsToHumanReadable(unixMilli) {
  let dateObj = new Date(unixMilli);
  return dateObj;
}
