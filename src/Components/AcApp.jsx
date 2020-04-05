import React, { Component } from 'react';
import Header from './Header';
import CritterCards from './CritterCards';
import bugList from '../Constants/Insects';
import fishList from '../Constants/Fish';
import { MuiThemeProvider } from '@material-ui/core';

const style = {
  critterCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
};

export default class AcApp extends Component {

  constructor() {
    super();

    this.date = new Date();
    this.state = {
      type: 'insect',
      hemisphere: 'north'
    };

    this.bugCards = bugList.map(bug => <CritterCards key={bug.no} critter={bug} key={bug.name} />);
    this.fishCards = fishList.map(fish => <CritterCards key={fish.no} critter={fish} />);
    this.getTime();
    this.getCalendar();
    this.getDay();
  }

  componentDidMount() {
    this.getTimeInterval = setInterval(this.getTime, 30000); // every 30 seconds.
    this.getCalendarInterval = setInterval(this.getCalendar, 3600000); // every hour
    this.getDayInterval = setInterval(this.getDay, 3600000); // every hour
  }

  componentWillUnmount() {
    clearInterval(this.getTimeInterval);
    clearInterval(this.getCalendarInterval);
  }

  createLocalCache = () => {
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

  // showAvail() {
  //   if (this.state.type == "fish")
  //     fishList.forEach(this.checkAvail)
  //   else
  //     bugList.forEach(this.checkAvail)

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

  getTime = () => {
    let h = this.date.getHours();
    let m = this.date.getMinutes();
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
    this.time = `${h}:${m}${ses}`;
  }

  getCalendar = () => {
    const months = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];

    this.calendar = `${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  getDay = () => {
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    this.day = days[this.date.getDay()];
  }

  onSetType = (type) => {
    this.setState({ type });
  }

  onSetHemisphere = (hemisphere) => {

    this.setState({ hemisphere });
  }

  render() {

    return (
      <div>
        <Header
          calendar={this.calendar}
          type={this.state.type}
          hemisphere={this.state.hemisphere}
          time={this.time}
          day={this.day}
          setType={this.onSetType}
          setHemisphere={this.onSetHemisphere} />
        <div style={style.critterCard}>
          {this.state.type === 'insect' ?
            this.bugCards
            : this.fishCards}
        </div>

      </div>
    );
  }
}
