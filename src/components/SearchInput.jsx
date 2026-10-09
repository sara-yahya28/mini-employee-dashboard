import './css/SearchInput.css';

export default function SearchInput({
  value,
  onChange,
  inputRef,
  placeholder = 'ابحث...',
}) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}