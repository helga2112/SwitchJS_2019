Write code that takes a string and renders it with undulating font sizes.

Each letter should be in its own 'span' tag, and each span's .style.fontSize property
starts at '10px' and increases by 5 pixels until the middle of the string is reached,
before shrinking back to 10 pixels.
Below is an empty div with the id 'rollercoaster' 
which you can append to: 
var text = 'Hello World!';
var div = document.getElementById('rollercoaster');
