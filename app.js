(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        targetDay = "12/15/2022"
    
    today = mm + "/" + dd + "/" + yyyy;
    
    const countDown = new Date(targetDay).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                timeDifference = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(timeDifference / (day)),
            document.getElementById("hours").innerText = Math.floor((timeDifference % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((timeDifference % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((timeDifference % (minute)) / second);
  
          //do something later when date is reached
          if (timeDifference < 0) {
            document.getElementById("headline").innerText = "Time is up! You had better applied.";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());