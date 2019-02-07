//  after 3 seconds do something 
setTimeout( function(){
    document.querySelector("div.loading").classList.add("hidden")
}, 2500)


// below is the css
// div.loading {
//     z-index: 2;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%; 
//     background-color: $background-color;

//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// div.loading h3 {
//     padding-left:24px;
// }

// div.loading.hidden {
//     opacity: 0;
//     pointer-events: none;
// }

// below is the HTML

/* <div class="loading">
<img src="icon/loading.gif">
</div> */