import Header from "../components/Header";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - The accessibility way</title>
      </Helmet>
      <a href="#maincontent" id="skipLink">
        Skip to main content
      </a>
      <Header headerText={"About with A11Y"} />

      <main className="centerColumn" id="maincontent">
        <h2>Quisque aliquam dignissim velit, id viverra urna rhoncus ut.</h2>
        <p>
          Pellentesque id euismod orci. Phasellus volutpat vulputate risus, non
          posuere odio luctus et. Donec eget tellus cursus, tincidunt nisi sit
          amet, fringilla diam. Quisque aliquam dignissim velit, id viverra urna
          rhoncus ut. Etiam felis erat, lobortis at sem sed, efficitur tincidunt
          nulla. Suspendisse efficitur vel turpis et hendrerit. Nunc hendrerit
          finibus volutpat. Proin rutrum, nulla sit amet fringilla convallis, mi
          augue suscipit purus, lacinia interdum ex erat ac quam.
        </p>
        <h3>Etiam pretium posuere metus id volutpat.</h3>
        <p>
          Maecenas quis tortor id enim egestas consequat eu id nisl. Etiam
          pretium posuere metus id volutpat. Donec ipsum risus, tempor commodo
          erat eget, aliquam facilisis leo. Sed in condimentum nunc. Donec lorem
          augue, porta nec mi non, egestas egestas diam. Donec nec lobortis
          orci. In hac habitasse platea dictumst. Quisque ultricies ut diam at
          gravida. Quisque a auctor justo. Morbi ut vehicula nulla.
        </p>
        <h2>Ut sed risus elit</h2>
        <p>
          Morbi aliquam sapien at mattis faucibus. Morbi nisl tortor, convallis
          ac sapien eget, feugiat mattis elit. Duis eleifend, nisl tristique
          vehicula egestas, est velit fringilla arcu, id dictum quam dolor at
          odio. Nunc faucibus, sem at ullamcorper rhoncus, sapien mauris varius
          mauris, in dapibus turpis orci fermentum mi. Pellentesque placerat,
          nisi ac pharetra consectetur, mi dolor tincidunt ligula, ut vestibulum
          leo sem vitae ipsum. Morbi justo quam, iaculis eget maximus efficitur,
          maximus dictum purus. Vestibulum posuere mauris et eros ullamcorper
          blandit. Duis pharetra porttitor augue, quis facilisis leo varius nec.
          Pellentesque eleifend lorem eget tellus varius, non porta augue
          pharetra.
        </p>
        <h3>Morbi aliquam sapien at mattis faucibus.</h3>
        <p>
          Maecenas quis tortor id enim egestas consequat eu id nisl. Etiam
          pretium posuere metus id volutpat. Donec ipsum risus, tempor commodo
          erat eget, aliquam facilisis leo. Sed in condimentum nunc. Donec lorem
          augue, porta nec mi non, egestas egestas diam. Donec nec lobortis
          orci. In hac habitasse platea dictumst. Quisque ultricies ut diam at
          gravida. Quisque a auctor justo. Morbi ut vehicula nulla.
        </p>
        <ul>
          <li>Nunc faucibus, sem at ullamcorper rhoncus.</li>
          <li>Phasellus magna nisi, congue in porta ac.</li>
          <li>Sed in condimentum nunc.</li>
        </ul>
        <h2>Morbi aliquam sapien at mattis faucibus.</h2>
        <p>
          Praesent viverra nisi eget nulla congue, ac feugiat neque interdum.
          Vivamus nec ligula hendrerit, vehicula justo non, suscipit neque.
          Aenean malesuada interdum erat, nec ultricies nulla rutrum et. Aliquam
          suscipit, velit nec fermentum eleifend, tellus sapien egestas mauris,
          vel pharetra nisl ante in erat. Nulla maximus hendrerit felis, ut
          hendrerit mi sodales non. Mauris eget odio nunc. Praesent id diam
          eros. Morbi quis augue at risus ultrices ornare vitae nec nulla.
          Maecenas ac bibendum metus, quis fermentum odio. Sed sodales tincidunt
          tristique. Phasellus magna nisi, congue in porta ac, fringilla id mi.
        </p>
        <h3>Mauris eget odio nunc. Praesent id diam eros.</h3>
        <p>
          Maecenas quis tortor id enim egestas consequat eu id nisl. Etiam
          pretium posuere metus id volutpat. Donec ipsum risus, tempor commodo
          erat eget, aliquam facilisis leo. Sed in condimentum nunc. Donec lorem
          augue, porta nec mi non, egestas egestas diam. Donec nec lobortis
          orci. In hac habitasse platea dictumst. Quisque ultricies ut diam at
          gravida. Quisque a auctor justo. Morbi ut vehicula nulla.
        </p>
      </main>
    </>
  );
};

export default About;
