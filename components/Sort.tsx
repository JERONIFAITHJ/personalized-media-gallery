import React, { useState } from "react";

const Sort = () => {
  const [formErrorState, setFormErrorState] = useState({
    sortNumbers: false,
  });
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [formValues, setFormValues] = useState<{
    numbers: number[];
    sortNumbers: string;
  }>({
    numbers: [],
    sortNumbers: "",
  });

  const onNumbersChange = (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      sortNumbers: value,
    }));
  };

  const onAddNumberClick = () => {
    setFormErrorState((prev) => ({
      ...prev,
      sortNumbers: formValues.sortNumbers === "",
    }));
    setFormValues((prev) => ({
      sortNumbers: "",
      numbers: [...prev.numbers, Number(prev.sortNumbers)],
    }));
  };

  const onSubmit = async () => {
    try {
      const resp = await fetch("http://localhost:3003/sort/merge-sort", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ array: formValues.numbers }),
      });
      const res = await fetch("http://localhost:3003/auth/generate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload: { id: "cu73hj2349324" } }),
      });

      if (!resp.ok) throw new Error("Try again later!");
      const parsedBody = await resp.json();
      setSortedNumbers(parsedBody?.array);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-full text-center">
      <h1 className="m-5">Sort</h1>
      <div className="mb-5 flex justify-center items-center gap-5">
        <h2>
          Entered Numbers:{" "}
          {formValues.numbers.map((val, i) => (
            <span>
              {i === formValues.numbers.length - 1 ? val : `${val}, `}
            </span>
          ))}
        </h2>
        <button type="button" onClick={onSubmit}>
          Sort
        </button>
      </div>
      <h2 className="mb-5">Sorted numbers: </h2>

      <form>
        <div className="flex flex-col justify-center items-center gap-5 max-w: 50%">
          <div>
            <label htmlFor="sortNumbers" className="mr-5">
              Enter numbers to sort:{" "}
            </label>
            <input
              className="rounded border-2 border-solid border-white"
              onChange={onNumbersChange}
              name="sortNumbers"
              value={formValues.sortNumbers}
              type="number"
            />
          </div>
          {formErrorState.sortNumbers && (
            <div className="text-red-500">Enter a valid number!</div>
          )}
          <button type="button" className="w-max " onClick={onAddNumberClick}>
            Add Number
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sort;
