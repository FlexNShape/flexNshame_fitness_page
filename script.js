const days = document.querySelectorAll(".day");
let x = 0.000;

days.forEach((day) => {
    console.log(day);
    day.addEventListener("click", () => {
        x = x + 3.33;
        console.log("Day Complete");
        day.style.backgroundColor = "#8fff00";

        // Select the .iconLock element relative to the current day element
        const el = day.querySelector(".iconLock");

        if (el) {
            const id = el.getAttribute("id");
            console.log(id);
            const key = document.getElementById(id);
            console.log(key);
            
            if (key) {
                let y = "%";
                key.remove();// Remove the lock if it exists
                if(x<101){
                    let w = x;
                    let z = x + y;
                    document.querySelector(".inner").style.width = z;
                    w = Math.floor(w);
                    console.log(w);
                    if(w == 99){
                        w = 100;
                        w = w + y;
                        console.log(w);
                        document.querySelector(".percentage").innerText = w;
                    }
                    else{
                        w = w + y;
                        console.log(w);
                        document.querySelector(".percentage").innerText = w;
                    }
                    let hide = document.querySelector(".exercise");
                    hide.style.display = "block";
                    hide.style.margin = "20px";
                    hide.style.padding = "10px";
                    hide.style.backgroundColor = "#569206";

                }
            } else {
                console.log("Lock not found");
            }
        } else {
            console.log("No lock associated with this day");
        }
    });
});