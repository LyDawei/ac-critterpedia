import React, { useState } from 'react';
import Header from './Header';
import CritterCards from './CritterCards';
import bugList from '../Constants/Insects';
import fishList from '../Constants/Fish';

const style = {
  critterCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

export default function AcApp() {
  const date = new Date();
  const [type, setType] = useState('insect');
  const [hemisphere, setHemisphere] = useState('north');

  const bugCards = bugList.map(bug => <CritterCards key={bug.no} critter={bug} />);
  const fishCards = fishList.map(fish => <CritterCards key={fish.no} critter={fish} />);
  let time;
  let calendar;
  let day;

  const getTime = () => {
    let h = date.getHours();
    let m = date.getMinutes();
    let ses = ' AM';
    if (h > 12) {
      h -= 12;
      ses = ' PM'
    }

    if (h === 0) {
      h = 12;
    }

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    time = `${h}:${m}${ses}`;
  }

  const getCalendar = () => {
    const months = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];

    calendar = `${months[date.getMonth()]} ${date.getDate()}`;
  }

  const getDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = days[date.getDay()];
  }

  const createLocalCache = () => {
    if (localStorage.getItem("Bitterlingchk") == null) {
      fishList.forEach(function (fish) {
        localStorage.setItem(fish.name + "chk", fish.chk);
      })
    }
    if (localStorage.getItem("Common Butterflychk") == null) {
      bugList.forEach(function (bug) {
        localStorage.setItem(bug.name + "chk", bug.chk);
      })
    }
  }

  const onSetType = (type) => {
    setType(type);
  }

  const onSetHemisphere = (hemisphere) => {
    setHemisphere(hemisphere);
  }

  getTime();
  getCalendar();
  getDay();
  setInterval(getTime, 30000); // every 30 seconds.
  setInterval(getCalendar, 3600000); // every hour
  setInterval(getDay, 3600000); // every hour
  createLocalCache();

  // componentWillUnmount() {
  //   clearInterval(getTimeInterval);
  //   clearInterval(getCalendarInterval);
  // }



  // showAvail() {
  //   if (state.type == "fish")
  //     fishList.forEach(checkAvail)
  //   else
  //     bugList.forEach(checkAvail)

  // }

  // checkAvail(item) {
  //   document.getElementById(item.no).style.backgroundColor = "darkred";
  //   if (item.smonth > item.emonth) {
  //     if ((month <= item.emonth || month >= item.smonth)) {
  //       document.getElementById(item.no).style.backgroundColor = "orange";
  //       if (item.stime > item.etime) {
  //         if ((time <= item.etime || time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime && time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       if (item.stime2 > item.etime2) {
  //         if ((time <= item.etime2 || time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime2 && time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //     }
  //   }
  //   else {
  //     if ((month <= item.emonth && month >= item.smonth)) {
  //       document.getElementById(item.no).style.backgroundColor = "orange";
  //       if (item.stime > item.etime) {
  //         if ((time <= item.etime || time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime && time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       if (item.stime2 > item.etime2) {
  //         if ((time <= item.etime2 || time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime2 && time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //     }
  //   }
  //   if (item.smonth2 > item.emonth2) {
  //     if ((month <= item.emonth2 || month >= item.smonth2)) {
  //       document.getElementById(item.no).style.backgroundColor = "orange";
  //       if (item.stime > item.etime) {
  //         if ((time <= item.etime || time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime && time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       if (item.stime2 > item.etime2) {
  //         if ((time <= item.etime2 || time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime2 && time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //     }
  //   }
  //   else {
  //     if ((month <= item.emonth2 && month >= item.smonth2)) {
  //       document.getElementById(item.no).style.backgroundColor = "orange";
  //       if (item.stime > item.etime) {
  //         if ((time <= item.etime || time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime && time >= item.stime)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       if (item.stime2 > item.etime2) {
  //         if ((time <= item.etime2 || time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //       else {
  //         if ((time <= item.etime2 && time >= item.stime2)) {
  //           document.getElementById(item.no).style.backgroundColor = "green";
  //         }
  //       }
  //     }
  //   }
  //   var critterimage = "img/" + list + "/" + item.name + ".png";
  //   if (list == "fish")
  //     []
  //   document.getElementById(item.no + " image").src = critterimage;

  //   if (screen.width < 800 || window.innerWidth < 800) {
  //     document.getElementById(item.no + " image").height = 48;
  //     document.getElementById(item.no + " image").width = 48;
  //   }
  //   else {
  //     document.getElementById(item.no + " image").height = 96;
  //     document.getElementById(item.no + " image").width = 96;
  //   }
  //   item.chk = localStorage.getItem(item.name + "chk");
  //   if (item.chk == 0) {
  //     document.getElementById("chk" + item.no).src = "img/uncheck.png";
  //     if (screen.width < 800 || window.innerWidth < 800) {
  //       document.getElementById("chk" + item.no).height = 24;
  //       document.getElementById("chk" + item.no).width = 24;
  //     }
  //   }
  //   else {
  //     if (list == "fish")
  //       document.getElementById("chk" + item.no).src = "img/check.png";
  //     else
  //       document.getElementById("chk" + item.no).src = "img/checkb.png";
  //     if (screen.width < 800 || window.innerWidth < 800) {
  //       document.getElementById("chk" + item.no).height = 24;
  //       document.getElementById("chk" + item.no).width = 24;
  //     }
  //   }
  // }

  return (
    <div>
      <Header
        calendar={calendar}
        type={type}
        hemisphere={hemisphere}
        time={time}
        day={day}
        setType={onSetType}
        setHemisphere={onSetHemisphere} />
      <div style={style.critterCard}>
        {type === 'insect' ?
          bugCards : fishCards}
      </div>

    </div>
  );

}
