import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      <Button name="All" />
      <Button name="CID" />
      <Button name="Live" />
      <Button name="Music" />
      <Button name="Podcasts" />
      <Button name="Mutual Fund" />
      <Button name="Investing" />
      <Button name="Comedy" />
    </div>
  );
};

export default ButtonList;
