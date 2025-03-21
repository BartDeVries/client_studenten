
let StopWatch = (function () {
    let starttime = 0;
    let running = false;
    let timerTime = 0;

    const start = function () {
        if (!running) {
            starttime = Date.now();
            running = true;
        }
    };

    const stop = function () {
        if (running) {
            timerTime += Date.now() - starttime;
            running = false;
        }
    };

    const reset = function () {
        timerTime = 0;
    };

    const currentTime = function () {
        return timerTime;
    };

    return {
        start: start,
        stop: stop,
        reset: reset,
        currentTime: currentTime
    }

})();
