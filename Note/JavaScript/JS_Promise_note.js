
const red = () => console.log('red')
function green() { console.log('green'); }
function yellow() { console.log('yellow'); }

let light = (fn, timer) => new Promise(resolve => {
    setTimeout(() => { fn(); resolve() }, timer)
})


function start(times) {
    if (!times) { return }

    times--
    Promise.resolve()
        .then(() => light(red, 3000))
        .then(() => light(green, 1000))
        .then(() => light(yellow, 2000))
        .then(() => start(times))

}

start(3)