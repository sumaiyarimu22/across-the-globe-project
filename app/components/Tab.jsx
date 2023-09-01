import HorizontalTab from "./HorizontalTab";

const Tab = () => {
  return (
    <HorizontalTab tabs={["All Posts(32)", "Article", "Education", "Job"]}>
      <div>tab 1</div>
      <div>tab 2</div>
      <div>tab 3</div>
      <div>tab 4</div>
    </HorizontalTab>
  );
};

export default Tab;
