function CalorieList() {
  return (
    <div className="calorie-list">
      <CalorieCard itemName="Pizza" cal="270" />
      <CalorieCard itemName="Coke" cal="150" />
      <CalorieCard itemName="Watermelon" cal="40" />
      <CalorieCard itemName="Cake" cal="260" />
      <CalorieCard itemName="Burger" cal="300" />
      <CalorieCard itemName="Maggi" cal="250" />
      <CalorieCard itemName="Walnuts" cal="300" />
      <CalorieCard itemName="Peanuts" cal="450" />
    </div>
  );
}

function CalorieCard({ itemName, cal }) {
  return (
    <div className="calorie-card">
      <div className="item">{itemName}</div>
      <div className="cal">
        You added {cal} calories to your today's calorie count with this{" "}
        {itemName}
      </div>
    </div>
  );
}

export default CalorieList;
