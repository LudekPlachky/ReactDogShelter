import "./DogForm.css";

function DogForm({ data, valid, onChange, onAdd }) {
  return (
    <div className="dog-form">
      <input
        type="text"
        placeholder="Jmeno psa"
        name="name"
        onChange={onChange}
        value={data.name}
      />
      <input
        type="text"
        placeholder="Rasa psa"
        name="breed"
        onChange={onChange}
        value={data.breed}
      />
      <input
        type="number"
        placeholder="Vek psa"
        name="age"
        min="0"
        max="25"
        onChange={onChange}
        value={data.age}
      />
      <button disabled={!valid} onClick={onAdd}>
        Pridat
      </button>
    </div>
  );
}
export default DogForm;
