const n = 8;
function boxes() {
  return [...Array(n)].map((element, index) => <div className="box"></div>);
}

export default boxes;
