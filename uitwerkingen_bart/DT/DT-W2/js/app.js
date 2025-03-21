

document.querySelector("#btnStart")
    .addEventListener("click", function (e) {
        StopWatch.start();
        updateTime();

    });

document.querySelector("#btnStop")
    .addEventListener("click", function (e) {
        StopWatch.stop();
        updateTime();

    });

document.querySelector("#btnReset")
    .addEventListener("click", function (e) {
        StopWatch.reset();
        updateTime();
    });


function updateTime() {
    // console.log(StopWatch.currentTime());
    document.querySelector('#date-time').innerHTML = StopWatch.currentTime();
}