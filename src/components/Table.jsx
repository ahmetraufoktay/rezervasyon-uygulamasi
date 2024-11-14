import capacityIMG from "../assets/users.svg";
import "./Table.css";

function Table({ data }) {
  const num = data.id;
  const satir = num % 5 == 0 ? Math.floor(num / 5) : Math.floor(num / 5) + 1;
  const sutun = num % 5 == 0 ? 5 : num % 5;

  return (
    <button
      style={{
        gridRow: `${satir} / ${satir + 1}`,
        gridColumn: `${sutun} / ${sutun + 1}`,
      }}
      className="table"
    >
      <h3 className="masa-no">Masa {data.id}</h3>
      <div className="kapasite">
        <img src={capacityIMG} alt="kapasite resmi" />
        <h4>{data.capacity}</h4>
      </div>
    </button>
  );
}

export default Table;
