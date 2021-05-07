import Particles from "react-particles-js";

function Intro() {
  return (
    <div id="page-one">
      <div id="intro">
        <h1 id='intro-text'>
          Hi!
          <br />
          My name is
        </h1>
        <h1 id='name'>ERIC MICHAEL HANSON,</h1>
        <h1 id='intro-text'>I'm a Front End Web Developer!</h1>
      </div>
      <Particles
        id="particles"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "rgb(199, 201, 211)",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: true,
            },
            move: {
              speed: 1,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        }}
      />
    </div>
  );
}

export default Intro;
