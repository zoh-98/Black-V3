module.exports = function ({api ,models, Users, Threads, Currencies, globalData, usersData, threadsData , black }) {
    const logger = require("../../utils/log.js");
   	const moment = require("moment");

    return function ({ event }) {
        const timeStart = Date.now()
        const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
        const { userBanned, threadBanned } = global.data;
        const { events } = global.client;
        const { allowInbox, DeveloperMode } = global.config;
        var { senderID, threadID } = event;
        senderID = String(senderID);
        threadID = String(threadID);
        if (userBanned.has(senderID)|| threadBanned.has(threadID) || allowInbox == ![] && senderID == threadID) return;
        for (const [key, value] of events.entries()) {
            if (value.config.Type.indexOf(event.logMessageType) !== -1) {
                const eventRun = events.get(key);
                try {
                    const Obj = {};
                    Obj.api = api
                    Obj.black = black;
                    Obj.event = event
                    Obj.models= models 
                    Obj.usersData = usersData;
                    Obj.threadsData = threadsData;
                    Obj.globalData = globalData;
                    Obj.Users= Users 
                    Obj.Threads = Threads
                    Obj.Currencies = Currencies 
                    eventRun.onType(Obj);
                    if (DeveloperMode == !![]) 
                    	logger(global.getText('handleEvent', 'executeEvent', time, eventRun.config.name, threadID, Date.now() - timeStart), '[ Event ]');
                } catch (error) {
                    logger(global.getText('handleEvent', 'eventError', eventRun.config.name, JSON.stringify(error)), "error");
                }
            }
        }
        return;
    };
}