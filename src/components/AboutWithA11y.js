import HeaderWithA11y from "./HeaderWithA11y";
import { Helmet } from "react-helmet";

const AboutWithA11y = () => {
  return (
    <>
      <Helmet>
        <title>About - The accessibility way</title>
      </Helmet>
      <a href="#maincontent" id="skipLink">
        Skip to main content
      </a>
      <HeaderWithA11y headerText={"About with A11Y"} />

      <main className="centerColumn" id="maincontent">
        <h2>
          You know when grown-ups tell you 'everything's going to be fine' and
          you think they're probably lying to make you feel better?
        </h2>
        <p>
          Heh-haa! Super squeaky bum time! I'm nobody's taxi service; I'm not
          gonna be there to catch you every time you feel like jumping out of a
          spaceship. Sorry, checking all the water in this area; there's an
          escaped fish. No… It's a thing; it's like a plan, but with more
          greatness. *Insistently* Bow ties are cool! Come on Amy, I'm a normal
          bloke, tell me what normal blokes do! Father Christmas. Santa Claus.
          Or as I've always known him: Jeff.
        </p>
        <h3>You know how I sometimes have really brilliant ideas?</h3>
        <p>
          I hate yogurt. It's just stuff with bits in. No, I'll fix it. I'm good
          at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call
          me the Rotmeister. Aw, you're all Mr. Grumpy Face today. Did I mention
          we have comfy chairs?
        </p>
        <h2>
          You know when grown-ups tell you 'everything's going to be fine' and
          you think they're probably lying to make you feel better?
        </h2>
        <p>
          Heh-haa! Super squeaky bum time! I'm nobody's taxi service; I'm not
          gonna be there to catch you every time you feel like jumping out of a
          spaceship. Sorry, checking all the water in this area; there's an
          escaped fish. No… It's a thing; it's like a plan, but with more
          greatness. *Insistently* Bow ties are cool! Come on Amy, I'm a normal
          bloke, tell me what normal blokes do! Father Christmas. Santa Claus.
          Or as I've always known him: Jeff.
        </p>
        <h3>You know how I sometimes have really brilliant ideas?</h3>
        <p>
          I hate yogurt. It's just stuff with bits in. No, I'll fix it. I'm good
          at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call
          me the Rotmeister. Aw, you're all Mr. Grumpy Face today. Did I mention
          we have comfy chairs?
        </p>
        <ul>
          <li>Hej</li>
          <li>hej 2</li>
          <li>hej 3</li>
          <li>hej 4</li>
        </ul>
        <h2>
          You know when grown-ups tell you 'everything's going to be fine' and
          you think they're probably lying to make you feel better?
        </h2>
        <p>
          Heh-haa! Super squeaky bum time! I'm nobody's taxi service; I'm not
          gonna be there to catch you every time you feel like jumping out of a
          spaceship. Sorry, checking all the water in this area; there's an
          escaped fish. No… It's a thing; it's like a plan, but with more
          greatness. *Insistently* Bow ties are cool! Come on Amy, I'm a normal
          bloke, tell me what normal blokes do! Father Christmas. Santa Claus.
          Or as I've always known him: Jeff.
        </p>
        <h3>You know how I sometimes have really brilliant ideas?</h3>
        <p>
          I hate yogurt. It's just stuff with bits in. No, I'll fix it. I'm good
          at fixing rot. Call me the Rotmeister. No, I'm the Doctor. Don't call
          me the Rotmeister. Aw, you're all Mr. Grumpy Face today. Did I mention
          we have comfy chairs?
        </p>
      </main>
    </>
  );
};

export default AboutWithA11y;
