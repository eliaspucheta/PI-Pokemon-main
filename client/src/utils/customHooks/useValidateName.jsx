import { useState } from "react";

const useValidateName = () => {
  const [errorName, setErrorName] = useState({});

  const errorValidate = (name) => {
    const errorObj = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (name.length < 3) errorObj.name = "name must be longer";
    if (!nameRegex.test(name))
      errorObj.name = "name cannot contain number or symbols";
    return errorObj;
  };

  return { errorName, errorValidate, setErrorName };
};

export default useValidateName;
