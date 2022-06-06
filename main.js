const checkbox = document.querySelector("#checkbox");
const nightHeader = document.querySelector(".night-header");
const dayHeader = document.querySelector(".day-header")
;


checkbox.addEventListener('change', () => {
    document.body.classList.toggle("dark");
    

  if(dayHeader.classList.contains("show")){
      dayHeader.classList.remove("show");
      nightHeader.classList.add("show");
  } else if (!dayHeader.classList.contains("show")){
      dayHeader.classList.add("show");
      nightHeader.classList.remove("show");
  };

});

