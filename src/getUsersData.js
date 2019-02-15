function getDetail(user) {
  let details = {};
  for(let i = 0; i < user.devices.length; i++) {
    if(user.devices[i].risk > 0.6) {
      details['Shortname'] = user.devices[i].shortname;
      details['State'] = user.devices[i].state;
      details['Last_seen'] = `${user.devices[i].last_seen_at.slice(0,10)} ${user.devices[i].last_seen_at.slice(11,19)}`
    }
  }
  return details;
}

export default function getUsers(users) {
  let accoutRisk = [0, 0,0]
  let highRiskList = [];
  for(let user of users) {
    const risk = user.risk;
    if(risk < 0.6 ) {
      accoutRisk[0] += 1;
    } else if (risk >= 0.6 && risk <0.9) {
      accoutRisk[1] += 1;
    } else {
      highRiskList.push(getDetail(user))
      accoutRisk[2] += 1;
    }
  }
  return {accoutRisk, highRiskList}
}

