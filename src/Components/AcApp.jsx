import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header';
import bugList from '../Constants/Insects';
import fishList from '../Constants/Fish';
export default class AcApp extends Component {

  constructor() {
    super();
    this.onSetType = this.onSetType.bind(this);
    this.onSetHemisphere = this.onSetHemisphere.bind(this);
    this.state = {};
    this.createLocalCache();

    var today = new Date();
  }

  createLocalCache() {
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


  onSetType(type) {
    this.setState({ type });
    console.log(this.state);
  }

  onSetHemisphere(hemisphere) {

    this.setState({ hemisphere });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Header
            currentDate={this.today}
            setType={this.onSetType}
            setHemisphere={this.onSetHemisphere} />
        </Container>
      </div>
    );
  }
}