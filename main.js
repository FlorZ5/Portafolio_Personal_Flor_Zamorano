let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#EC8FD0;">Soy TSU en desarrollo de software multiplataforma</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();