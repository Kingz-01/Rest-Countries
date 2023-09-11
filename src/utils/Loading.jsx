
import React, {useState} from 'react'
import {GridLoader} from "react-spinners";

const Loading = ({ darkmode }) => {
let [loading, setLoading] = useState(true);
  let [color, setColor] = useState(
    darkmode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"
  );

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="py-5 bg-main-color ">
     <GridLoader
      color={color}
        loading={loading}
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
        />

    </div>
  )
}

export default Loading