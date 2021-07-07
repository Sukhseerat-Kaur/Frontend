import Card from "./Card/CardBox";
import Board from "./ChessBoard/Board";
import "./Day16Style.css";
import "./Card/cardStyle.css";
import "./ChessBoard/ChessStyle.css";
const AppDay16 = () => {
  return (
    <div className="app-day-16">
      <Card />
      <Board />
    </div>
  );
};

export default AppDay16;
