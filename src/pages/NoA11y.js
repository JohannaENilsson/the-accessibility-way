import HeaderNoA11y from "../components/HeaderNoA11y";

import WaterMicrogreens from "../assets/water-culture-microgreens.jpg";
import Beetroot from "../assets/beetroot.jpg";
import Cress from "../assets/cress.jpg";
import InJars from "../assets/inJars.jpg";
import SproutedShoots from "../assets/sproutedShoots.jpg";
import PeaShoots from "../assets/peaShoots.jpg";
import SeedsInSoaking from "../assets/seedsInSoaking.jpg";
import SeedsAreRinsed from "../assets/seedsAreRinsed.png";

const NoA11y = () => {
  return (
    <>
      <HeaderNoA11y headerText={"No thought of A11Y"} />
      <div className="main">
        <div>
          <h2>You know how I sometimes have really brilliant ideas?</h2>
          <p>
            The way I see it, every life is a pile of good things and bad
            things.â€¦hey.â€¦the good things don't always soften thebad things;
            but vice-versa the bad things don't necessarily spoil the good
            things and make them unimportant. Youknow when grown-ups tell you
            'everything's going to be fine' and you think they're probably lying
            to make you feelbetter?It's art!
          </p>
        </div>

        <div>
          <h2>they're probably lying to make youfeel better?</h2>
          <div className="centerRow" role="presentation">
            <img
              src={WaterMicrogreens}
              alt="Water microgreens grown on a net. the micro greens have long routs and leafs  on the top. It´s a white background."
              width="280px"
              height="280px"
            />
            <img
              src={Beetroot}
              alt="Many beetroot shoots. The stem of the shoots is purple and the leafs are green. The roots are a messy tangle. The background i white."
              width="280px"
              height="280px"
            />
            <img
              src={InJars}
              alt="On a white table stands many jars with seeds in them. All the seeds have sprouted a lot. the jars have holes in the lids so it's easier to rinse them."
              width="280px"
              height="280px"
            />
            <img
              src={PeaShoots}
              alt="Many pea shoots that have grown really tall, all the roots ar all tangle together. Next to the pea shout there is sprouted peas in a transparent box."
              width="280px"
              height="280px"
            />
            <img
              src={SeedsInSoaking}
              alt="50-Seeds-soaked-in-a-jar-71-Gas-Production-Testing-for-Carbon-Dioxide-711-Background_Q320.jpg"
              width="280px"
              height="280px"
            />
            <img
              src={SeedsAreRinsed}
              alt="qa45_F2%3_3wqz3%af_seeds_are_rinsed(1).jpg"
              width="280px"
              height="280px"
            />
            <img src={SproutedShoots} alt="" width="280px" height="280px" />
            <img src={Cress} alt="" width="280px" height="280px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoA11y;
