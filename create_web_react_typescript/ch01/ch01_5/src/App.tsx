import * as D from "./data";

export default function () {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  );
}