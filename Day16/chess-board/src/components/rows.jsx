import Boxes from "./box";
const r = 8;
function rows() {
  return [...Array(r)].map((row, index) => (
    <div className="row">
      <Boxes />
    </div>
  ));
}

export default rows;
