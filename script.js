let timer;
let totalTime;
let currentTime;
let pausedTime;

    function startcountdown(minutes, startTime) {
        totalTime = minutes * 60;
        currentTime = startTime || totalTime;
        timer = setInterval(function () {
            const hours = Math.floor(currentTime / 3600);
            const minutes = Math.floor((currentTime % 3600) / 60);
            const seconds = currentTime % 60;
            document.getElementById('timer').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            if (currentTime <= 0) {
                clearInterval(timer);
                document.getElementById('timer').textContent = '00:00:00';
            }
            currentTime--;
        }, 1000);
    }
    function playpausebutton(){
        const button = document.getElementById('playbutton');
        button.innerHTML = (button.innerHTML.includes('play')) ? '<i class="fa-solid fa-circle-pause fa-2xl" style="color: #03accd;"></i>' : '<i class ="fa-solid fa-circle-play fa-2xl" style="color: #03accd;"></i>'; 
    }

    document.getElementById('playbutton').addEventListener('click', function () {
        if (!timer) {
            const minutes = parseInt(document.getElementById('minutes').value);
            startcountdown(minutes, pausedTime);
        } else {
            clearInterval(timer);
            timer = null;
            pausedTime = currentTime;
        } playpausebutton();
    });

    document.getElementById('reset').addEventListener('click', function () {
        clearInterval(timer);
        timer = null;
        document.getElementById('timer').textContent = '00:00:00';
        document.getElementById('minutes').value = 1;
        document.getElementById('playbutton').innerHTML = '<i class ="fa-solid fa-circle-play fa-2xl" style="color: #03accd;"></i>';
        pausedTime = null;
    });

    document.getElementById('minutes').addEventListener('input', function () {
        clearInterval(timer);
        timer = null;
        document.getElementById('timer').textContent = '00:00:00';
        document.getElementById('playbutton').innerHTML = '<i class ="fa-solid fa-circle-play fa-2xl" style="color: #03accd;"></i>';
        pausedTime = null;
    });