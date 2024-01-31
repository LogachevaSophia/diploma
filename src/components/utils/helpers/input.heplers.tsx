export const onInputNumWithTwoDots = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let val = e.target.value;
    const start = e.target.selectionStart;
    val = val.replace(/([^0-9.]+)/, "");
    val = val.replace(/^(0|\.)/, "");
    const match = /(\d{0,14})[^.]*((?:\.\d{0,2})?)/g.exec(val);
    // const match = /(\d*)[^.]*((?:\.\d{0,2})?)/g.exec(val);
    console.log("match", match, match.input.length);
    const value = match[1] + match[2];
    e.target.value = value;
    e.target.value = Number(value).toFixed(2);
    e.target.setSelectionRange(start, start);
  };
  
  export const onInputOnlyNumbers = (e) => {
    const val = e.target.value;
    e.target.value = val.replace(/[^.\d]/g, "");
  };
  
  export const getMaxLengthString = (
    name: string,
    str: string,
    number: number,
    callBack: (key: string, str: string) => void,
  ) => {
    if (str.length > number && callBack) {
      callBack(name, str.slice(0, number));
    }
  };
  
  //mask - XXX XX XX XX XX
  export const onInputClassifierCode = (e) => {
    const value = e.target.value;
  
    const newValue = value.replace(/\D/g, "");
    let result = "";
    for (let i = 0; i < newValue.length; i++) {
      if (i === 3 || i === 5 || i === 7 || i === 9) {
        result += " " + newValue[i];
      } else {
        result += newValue[i];
      }
    }
  
    e.target.value = result.slice(0, 15);
  };
  
  // export const onInputClassifierCode = (e) => {
  //   const value = e.target.value;
  
  //   const newValue = value.replace(/\D/g, "").slice(0, 11);
  //   const result = newValue.replace(
  //     /(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/,
  //     "$1 $2 $3 $4 $5",
  //   );
  
  //   e.target.value = result;
  // };
  
  export const checksPresenceName = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLElement>,
    name = "",
  ) => {
    if (!e.target.getAttribute("name")) {
      e.target.setAttribute("name", name);
    }
  };
  export const deleteInputName = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLElement>,
    autocomplete = "",
  ) => {
    if (autocomplete !== "on") {
      e.target.removeAttribute("name");
    }
  };
  