import { Service } from "../views/ChooseServicesView/ChooseServicesView";

type CheckobxProps = {
  item: Service
  handleChange: (key: string) => void,
};

const Checkobx = ({ item, handleChange }: CheckobxProps) => {

  return (
    <div>
      {item.label}
      <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.key)} />
    </div>
  );
};

export default Checkobx
 