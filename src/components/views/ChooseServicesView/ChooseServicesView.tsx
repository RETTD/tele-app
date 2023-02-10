import CheckboxContainer from "../../molecules/CheckboxContainer";
import SelectYear from "../../atoms/SelectYear";
import { getPrice } from "./getPrice";
import React, { useState, useCallback } from "react";

export type ServicesChecked = {
  label: string;
  key: string;
  checked: boolean;
};

const services: ServicesChecked[] = [
  {
    label: "Internet",
    key: "internet",
    checked: false,
  },
  {
    label: "Telewizja",
    key: "tv",
    checked: false,
  },
  { label: "Abonament telefoniczny", key: "phone", checked: false },
  { label: "Dekoder 4K", key: "decoder", checked: false },
];

const ChooseServicesView = () => {
  const [checkboxes, setCheckboxes] = useState(services);
  const [year, setYear] = useState("2023");
  const [price, setPrice] = useState<number>(0);
  const handleChangeCheckboxes = useCallback(
    (key: string) => {
      setCheckboxes((prevState) =>
        prevState.map((item) => {
          if (item.key === key) {
            return { ...item, checked: !item.checked };
          }
          return item;
        })
      );
    },
    [setCheckboxes]
  );

  const handleClickToGetPrice = () => {
    const checked = checkboxes.filter((item) => item.checked === true);

    if (checked) {
      setPrice(
        getPrice(
          checked.map((item) => item.key),
          year
        )
      );
    } else {
      setPrice(0);
    }
  };

  return (
    <>
      <CheckboxContainer
        handleChange={handleChangeCheckboxes}
        items={checkboxes}
      />
      <SelectYear optionsState={year} setState={setYear} />
      <button onClick={handleClickToGetPrice}>Oblicz cenę</button>
      {checkboxes.find(({key, checked}) => key === "decoder" && checked) &&
        checkboxes.find(({key, checked}) => key === "tv" && !!checked) && (
          <p>Nie możesz zakupić dekodera bez telewizji</p>
        )}
      {price ? (
        <p>Cena za ten zestaw wynosi: {price}</p>
      ) : (
        <p>Wybierz usługi</p>
      )}
    </>
  );
};

export default ChooseServicesView;
