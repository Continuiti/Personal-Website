var app = document.getElementById('site-description');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hello there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Welcome to my website!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("My name is Thien.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a student at the University of New Orleans.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a senior Computer Science major (Dec. '21).")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I love utilizing technology to solve problems.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also enjoy public speaking and gumbo!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();
