var QBApp = {
  appId: 38435,
  authKey: 'yU8cuM2qTpVpxyu',
  authSecret: 'WHL53DCCqLhDZrb'
};

var config = {
  chatProtocol: {
    active: 2
  },
  debug: {
    mode: 1,
    file: null
  }
};

var QBUser1 = {
        //id: 11426052,
        login: 'hornby@gmail.com',
        pass: 'flamescup89'
    }
    ,
    QBUser2 = {
		//id: 11366647,
        login: 'seanhs@gmail.com',
        pass: 'flamescup89'
    }
    ;

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);
