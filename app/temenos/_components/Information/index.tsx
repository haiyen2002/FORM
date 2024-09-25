import React from "react";

const Information = ({ code, name, end, start }: any) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="grid grid-cols-3">
        <div>
          <span>Custormer:</span>
        </div>
        <div>
          <span>{code}</span>
        </div>
        <div>
          <span>{name}</span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <span>Du dau:</span>
        </div>
        <div>
          <span>{start}</span>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <span>Du cuoi:</span>
        </div>
        <div>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
