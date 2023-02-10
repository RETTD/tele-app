import Checkbox from "../atoms/Checkbox";
import { ServicesChecked } from "../views/ChooseServicesView/ChooseServicesView";

type CheckboxContainerProps = {
  items: ServicesChecked[],
  handleChange: (key: string) => void
}
const CheckboxContainer = ({items, handleChange}: CheckboxContainerProps) => {

  return (
    <div>
      {items.map((item) => (
        <Checkbox item={item} handleChange={handleChange} />
      ))}
    </div>
  );
};
export default CheckboxContainer;
