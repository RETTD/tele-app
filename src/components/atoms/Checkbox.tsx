import { ServicesChecked } from "../views/ChooseServicesView/ChooseServicesView";

type CheckobxProps = {
  item: ServicesChecked
  handleChange: (key: string) => void,
};

const Checkobx = ({ item, handleChange }: CheckobxProps) => {

  return (
    <div key={item.key}>
      {item.label}
      <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.key)} />
    </div>
  );
};

export default Checkobx
 