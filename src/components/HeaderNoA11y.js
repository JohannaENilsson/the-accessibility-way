import NavigationNoA11y from "./NavigationNoA11y";

const HeaderNoA11y = ({ headerText }) => {
  return (
    <div className="header">
      <h1>{headerText}</h1>
      <NavigationNoA11y />
    </div>
  );
};

export default HeaderNoA11y;
