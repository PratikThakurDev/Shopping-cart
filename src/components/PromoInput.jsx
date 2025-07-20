const PromoInput = ({ value, onChange, onApply }) => (
  <div style={{ display: "flex" }}>
    <input type="text" placeholder="Promocode" value={value} onChange={onChange} />
    <button onClick={onApply}>Apply</button>
  </div>
);

export default PromoInput;
