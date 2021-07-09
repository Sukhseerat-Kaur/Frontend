// function Chessboard() {
//   const n = 8;
//   return (
//     <div className="chessboard">
//       {[...Array(n)].map((rowNum) => {
//         // <Row
//         //   key={rowNum}
//         //   style={{
//         //     backgroundColor: rowNum % 2 == boxNum % 2 ? "black" : "white",
//         //   }}
//         // />;

//         return <Row key={rowNum} />;
//       })}
//     </div>
//   );
// }
const n = 8;
function Chessboard() {
  return (
    <div className="chessboard">
      {[...Array(n).keys()].map((item) => {
        return <Row rowNum={item} key={item} />;
      })}
    </div>
  );
}

// function Row() {
//   const n = 8;
//   return (
//     <div className="row">
//       {[...Array(n)].map((boxNum) => {
//         return <Box key={boxNum}></Box>;
//       })}
//     </div>
//   );
// }

function Row({ rowNum }) {
  return (
    <div className="row">
      {[...Array(n).keys()].map((item) => {
        return <Box colNum={item} rowNum={rowNum} key={item} />;
      })}
    </div>
  );
}
function Box({ colNum, rowNum }) {
  return (
    <div
      className="box"
      style={{
        backgroundColor: rowNum % 2 === colNum % 2 ? "black" : "white",
      }}
    ></div>
  );
}

export default Chessboard;
