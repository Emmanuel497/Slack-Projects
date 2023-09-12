    const currentDate = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    document.getElementById('date').innerHTML = currentDate.toLocaleDateString();
    document.getElementById('currentDayOfTheWeek').innerHTML = dayOfWeek;

    function updateTime(){
        const currentTime =  new Date();

        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        const miliseconds = currentTime.getMilliseconds().toString().padStart(3, '0');

        const formattedTime= `${hours}:${minutes}:${seconds}.${miliseconds}`;

        document.getElementById("currentUTCTime").textContent =  formattedTime;
    }
    setInterval(updateTime, 100);
    updateTime();
