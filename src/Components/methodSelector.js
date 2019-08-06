import React from "react";

function MethodSelect(props) {
  return (
    <>
      <div>
        <label className='method_header'>Method</label>
        <select
          name="method"
          id="method"
          onChange={props.onChangeValue}
          value={props.method}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
    </>
  );
}

export default MethodSelect;