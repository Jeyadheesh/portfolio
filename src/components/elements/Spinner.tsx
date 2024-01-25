import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-b-4 border-transparent border-b-priClr"></div>
  );
};

export default Spinner;
