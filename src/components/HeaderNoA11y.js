import NavigationNoA11y from "./NavigationNoA11y";

const HeaderNoA11y = ({ headerText }) => {
  return (
    <header>
      <h1>{headerText}</h1>
      <NavigationNoA11y />
    </header>
  );
};

export default HeaderNoA11y;
