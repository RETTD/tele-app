import Checkbox from "../atoms/Checkbox";
import { Service } from "../views/ChooseServicesView/ChooseServicesView";

type CheckboxContainerProps = {
  items: Service[],
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
