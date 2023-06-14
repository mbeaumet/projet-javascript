const btn = document.querySelector("button");
const p = document.querySelector("p");
let second = 10;
let interval;

btn.addEventListener("click", start);

function start()
{
    interval = setInterval(counter, 1000);
}

function counter()
{
    second--;
    if (second == 0)
    {
        stop();
    }
    else
    {
        p.textContent = second;
    }
}

function stop()
{
    clearInterval(interval);
    p.textContent = "Stop";
}