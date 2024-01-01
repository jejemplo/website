function getTimeFromString(timeString) {
    let theTime = new Date();
    let time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12: 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

function  getNextShowing(movie) {
  let now new Date().getTime();
  for (let i = 0; i < movie.showtimes.length; i++) {
    let showtime = getTimeFromString(movie.showtimes[i]);
    if ((showtime - now) > 0) {
      return "Next showing of " + movie.title + " is " + movie.showtimes[i];
    }
  }
  return null;
}

movies = [
  {
    title: "Plan 9 from Outer Space",
    genre: "Cult Classic",
    rating: 5,
    showtimes: ["3:00pm", "7:00pm", "11:00pm"]
  },
  {
    title: "Forbidden Planet",
    genre: "Classic Sci-fi",
    rating: 5,
    showtimes: ["5:00pm", "9:00pm"]
  },
  {
    title: "Buckaroo Banzai",
    genre: "Cult Classic",
    rating: 5,
    showtimes: ["1:00pm", "5:00pm", "7:00pm"]
  }
];
