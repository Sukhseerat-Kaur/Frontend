import { useState } from "react";
import "./StyleDay21.css";
function AppDay21() {
  const [itemName, setItem] = useState("");
  const [cal, setCal] = useState();
  const [list, updateList] = useState([]);

  function handleClick() {
    updateList([...list, { foodItem: itemName, calories: cal }]);
    setItem("");
    setCal("");
  }

  return (
    <div className="app-day-21">
      <div className="top">
        <Inputs
          itemName={itemName}
          cal={cal}
          setItem={setItem}
          setCal={setCal}
        />
        <input type="submit" value="Add Item" onClick={handleClick} />
      </div>
      <CalorieList
        list={list}
        updateList={updateList}
        setItem={setItem}
        setCal={setCal}
      />
    </div>
  );
}

function InputText({ itemName, setItem }) {
  return (
    <input
      type="text"
      value={itemName}
      placeholder="Enter Item"
      className="itemName"
      onChange={(e) => setItem(e.target.value)}
    />
  );
}

function InputNumber({ cal, setCal }) {
  return (
    <input
      type="number"
      value={cal}
      placeholder="Calories"
      className="cal"
      onChange={(e) => setCal(e.target.value)}
    />
  );
}

function Inputs({ itemName, cal, setItem, setCal }) {
  return (
    <div className="inputs">
      <InputText itemName={itemName} setItem={setItem} />
      <InputNumber cal={cal} setCal={setCal} />
    </div>
  );
}

function CalorieList({ list, updateList, setItem, setCal }) {
  return (
    <div className="calorie-list">
      {list.map((obj, index) => {
        return (
          <Card
            itemName={obj.foodItem}
            cal={obj.calories}
            list={list}
            i={index}
            updateList={updateList}
            setItem={setItem}
            setCal={setCal}
            key={index}
          />
        );
      })}
    </div>
  );
}

function EditInputs({ itemName, cal, list, i, updateList, setItem, setCal }) {
  const [editedItem, editItem] = useState(itemName);
  const [editedCal, editCal] = useState(cal);

  function saveEdit() {
    list[i].foodItem = editedItem;
    list[i].calories = editedCal;
    updateList(list);
    setItem(editedItem);
    setCal(editedCal);
  }

  return (
    <div className="edit-form">
      <input
        type="text"
        value={editedItem}
        onChange={(e) => editItem(e.target.value)}
      />
      <input
        type="number"
        value={editedCal}
        onChange={(e) => editCal(e.target.value)}
      />

      <input type="submit" value="Save" onClick={saveEdit} />
    </div>
  );
}
function Card({ itemName, cal, list, i, updateList, setItem, setCal }) {
  const [toEdit, toggleEdit] = useState(false);
  function deleteItem() {
    const newList = list.filter((obj, index) => {
      return index !== i;
    });
    updateList(newList);
  }
  return (
    <div className="cards">
      {toEdit ? (
        <EditInputs
          itemName={itemName}
          cal={cal}
          list={list}
          i={i}
          updateList={updateList}
          setItem={setItem}
          setCal={setCal}
        />
      ) : (
        <h1>{itemName}</h1>
      )}

      <p>You consumed {cal} calories</p>

      <div className="btns">
        <button className="dlt" onClick={deleteItem}>
          Delete
        </button>

        <button className="edit" onClick={() => toggleEdit(true)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default AppDay21;
