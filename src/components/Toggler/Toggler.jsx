import "./Toggler.css";

function Toggler({ onChoose, active }) {
  const handleClick = (e) => {
    onChoose(e.target.name);
  };

  return (
    <div className="page-toggler">
      <button
        className={`toggler-btn" ${active === 1 ? "active" : ""}`}
        name="list-of-dogs"
        onClick={handleClick}>
        Seznam psu
      </button>
      <button
        className={`toggler-btn" ${active === 2 ? "active" : ""}`}
        name="shelter-storage"
        onClick={handleClick}>
        Sklad utulku
      </button>
    </div>
  );
}
export default Toggler;
