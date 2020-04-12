import React from 'react';
import Header from './Header';
import CritterCards from './CritterCards';
import { MuiThemeProvider, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import theme from '../themes/theme';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as critterActions from '../actions/critter';
import CritterPanel from './CritterPanel';

function AcApp(props) {
  const date = new Date();
  let time;
  let calendar;
  let day;
  const getTime = () => {
    let h = date.getHours();
    let m = date.getMinutes();
    let ses = ' AM';
    if (h >= 12) {
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

  const [tab, setTab] = React.useState(0);


  // const createLocalCache = () => {
  //   if (localStorage.getItem("Bitterlingchk") == null) {
  //     fishList.forEach(function (fish) {
  //       localStorage.setItem(fish.name + "chk", fish.chk);
  //     })
  //   }
  //   if (localStorage.getItem("Common Butterflychk") == null) {
  //     bugList.forEach(function (bug) {
  //       localStorage.setItem(bug.name + "chk", bug.chk);
  //     })
  //   }
  // }



  const onSetHemisphere = (hemisphere) => {
    props.setHemisphere(hemisphere);
  }

  const isAvailableThisTime = (critter) => {
    const currHour = date.getHours();
    if (currHour < critter.stime) return false;
    if (currHour > critter.etime) return false;

    return true;
  }

  const isAvailableThisMonth = (critter) => {
    if (critter.smonth2) {
      //TODO: check if current date is inside this as well.
    }

    const currMonth = date.getMonth() + 1;

    // currmonth is 9
    // assume smonth = 8
    // emonth = 6
    if (critter.smonth > critter.emonth) {
      if (currMonth > critter.smonth) return false;
      if (currMonth > critter.emonth) return false;
    } else {
      if (currMonth < critter.smonth) return false;
      if (currMonth > critter.emonth) return false;
    }


    return true;
  }

  const handleOnCaught = (critter) => {

    props.toggleCaught({ type: critter.type, critterId: critter.no });
  }

  const bugCards = props.bugs.map(bug =>
    <CritterCards
      onCaught={handleOnCaught}
      key={bug.name}
      critter={bug}
      available={isAvailableThisMonth(bug)} />);
  const fishCards = props.fish.map(fish =>
    <CritterCards
      onCaught={handleOnCaught}
      key={fish.name}
      critter={fish}
      available={isAvailableThisMonth(fish)} />);

  getTime();
  getCalendar();
  getDay();
  setInterval(getTime, 30000); // every 30 seconds.
  setInterval(getCalendar, 3600000); // every hour
  setInterval(getDay, 3600000); // every hour
  // createLocalCache();

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

  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const handleTabSwitch = (e, v) => {
    setTab(v);
  };

  const handleChangeIndex = (index) => {
    setTab(index);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Header
        calendar={calendar}
        hemisphere={props.hemisphere}
        time={time}
        day={day}
        setHemisphere={onSetHemisphere} />

      <Tabs value={tab}
        onChange={handleTabSwitch}
        aria-label="simple tabs example"
        variant='fullWidth'
        indicatorColor="primary"
        textColor="primary">
        <Tab label="Bugs" {...a11yProps(0)} />
        <Tab label="Fish" {...a11yProps(1)} />
      </Tabs>
      <SwipeableViews
        index={tab}
        onChangeIndex={handleChangeIndex}
      >
        <CritterPanel value={tab} index={0}>
          {bugCards}
        </CritterPanel>
        <CritterPanel value={tab} index={1}>
          {fishCards}
        </CritterPanel>
      </SwipeableViews>

    </ MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    type: state.critter.setting,
    hemisphere: state.critter.hemisphere,
    bugs: state.critter.bugs,
    fish: state.critter.fish
  };
}
function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(critterActions, dispatch) };

}
export default connect(mapStateToProps, mapDispatchToProps)(AcApp);
