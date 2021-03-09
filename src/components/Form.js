import React from "react";

const Form = (props) => {
  return (
    <form>
      <input onChange={props.change} type="text" value={props.value} placeholder="wpisz Miasto" />
      {/* <button onClick={props.submit}>Search city</button> */}
    </form>
  );
};

export default Form;
