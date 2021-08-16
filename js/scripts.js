// $("h1").click(function() {
//   alert("This is a heading.");
// });

// $("p").click(function() {
//   alert("This is a paragraph.");
// });

// $("img").click(function() {
//   alert("This is an image.");
// });

$(document).ready(function() {
  $("p").click(function(event) {
    event.preventDefault();
    const listeners = ["heading", "paragraph", "image"]
    console.log("HELLOOOOO");
    listeners.forEach(function(listen) {
    
    alert('This is a ' + listen)
  })
})
})
