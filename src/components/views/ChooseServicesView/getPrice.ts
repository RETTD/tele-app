export function getPrice(checked: string[], year: string) {
    let totalPrice = 0;
    let information = undefined;
    let internet = false;
    let tv = false;
    let phone = false;
  
    if (checked.includes("internet")) {
      internet = true;
      totalPrice += 39 + (Number(year) - 2023) * 10;
    }
  
    if (checked.includes("tv")) {
      tv = true;
      totalPrice += 49;
      if (year === "2025") {
        totalPrice += 10;
      }
    }
  
    if (checked.includes("phone")) {
      phone = true;
      totalPrice += 29;
    }
  
    if (internet && tv) {
      if (phone) {
        if (year === "2023") totalPrice -= 9;
        if (year === "2024") totalPrice -= 14;
        if (year === "2025") totalPrice -= 24;
      } else {
        totalPrice -= 9;
        if (year === "2025") {
          totalPrice -= 10;
        }
      }
    }
  
    if (checked.includes("decoder")) {
      if (!tv) {
        information = true;
      } else if (!internet) {
        totalPrice += 29;
      }
    }
  
    if (information) return -1;
    return totalPrice;
  }
  