window.evolution =  (function () {
    var events = { dataReceived: [] };

    // Creates a pseudo datasource object containing pre-defined device objects
    var datasource = {
        devices: [
            { id: 1, name: 'Device #1' },
            { id: 2, name: 'Device #2' },
            { id: 3, name: 'Device #3' },
            { id: 4, name: 'Device #4' },
            { id: 5, name: 'Device #5' },
            { id: 6, name: 'Device #6' },
            { id: 7, name: 'Device #7' },
            { id: 8, name: 'Device #8' },
            { id: 9, name: 'Device #9' },
            { id: 10, name: 'Device #10' }
        ]
    };

    // Set up simulated data stream
    window.setInterval(function () {
        var deviceReport = {
            type: 'deviceReport',
            deviceId: (Math.floor(Math.random() * (datasource.devices.length)) + 1),
            reportDate: new Date(),
            latitude: (Math.random() * 180) - 90,
            longitude: (Math.random() * 360) - 180,
        };

        for (var i = 0, ilen = events.dataReceived.length; i < ilen; i++) {
            events.dataReceived[i](deviceReport);
        }
    }, 2000);

    return {
        data: datasource,

        bind: function (eventName, handler) {
            if (eventName in events && typeof handler === 'function') {
                events[eventName].push(handler);
            }
        }
    };
})();