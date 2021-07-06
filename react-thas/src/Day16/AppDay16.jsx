import Card from "./Card/CardBox";
import Board from "./ChessBoard/board";
import "./Day16Style.css";
import "./Card/cardStyle.css";
import "./ChessBoard/ChessStyle.css";
const Day16 = () => {
  return (
    <div className="day16">
      <Card />
      <Board />
    </div>
  );
};

export default Day16;
