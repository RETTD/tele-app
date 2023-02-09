type SelectYearProps = {
  optionsState: string,
  setState: React.Dispatch<React.SetStateAction<string>>
}

const SelectYear = ({optionsState, setState}: SelectYearProps) => {
  
  function handleSelectChange(event:React.ChangeEvent<HTMLSelectElement>) {
    setState(event.target.value);
}
  return (
    <select onChange={handleSelectChange} value={optionsState}>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
    </select>
  );
};
export default SelectYear;
