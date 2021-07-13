import { useState } from "react";
function CalorieList() {
  const [list, updateList] = useState([
    ["Pizza", 270],
    ["Coke", 150],
    ["Watermelon", 140],
    ["Cake", 260],
    ["Burger", 300],
  ]);

  return (
    <div className="claorie-list">
      {list.length > 0 ? (
        list.map((itemList, index) => {
          return (
            <CalorieCard
              key={index}
              itemName={itemList[0]}
              cal={itemList[1]}
              list={list}
              updateList={updateList}
              i={index}
            />
          );
        })
      ) : (
        <h2>Nothing to show</h2>
      )}
    </div>
  );
}
function CalorieCard({ itemName, cal, list, updateList, i }) {
  function deleteItem() {
    const newList = list.filter((listEle, index) => {
      return index !== i;
    });
    updateList(newList);
  }
  return (
    <div className="calorie-card">
      <div className="item">{itemName}</div>
      <div className="cal">
        You added {cal} calories to your today's calorie count with this{" "}
        {itemName}
      </div>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default CalorieList;
