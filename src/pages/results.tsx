import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import state from "../lib/state";
import DataTable from "./components/table";
import GraphTest from "./components/graphCanva";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";

const Results = () => {
  const [showTable, setShowTable] = React.useState(false);

  const downloadGraphImage = () => {
    const element = document.getElementById("graph");
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement("a");
        link.download = "my-image.jpeg";
        link.href = canvas.toDataURL("image/jpeg", 0.92);
        link.click();
      });
    }
  };

  const downloadTableImage = () => {
    const element = document.getElementById("table");
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement("a");
        link.download = "my-image.jpeg";
        link.href = canvas.toDataURL("image/jpeg", 0.92);
        link.click();
      });
    }
  }
  const snap = useSnapshot(state);

  useEffect(() => {
    if (state.data.length === 0) {
      window.location.href = "/graph";
    }
  }, []);


  return (
    <div className="flex flex-col md:flex-row justify-center relative items-center bg-white h-full w-full min-h-screen ">
      {showTable && (
        <div className="absolute z-30 inset-0 w-full h-full flex justify-center items-center bg-white">
          <div className="flex flex-col justify-center items-center h-full gap-5 w-2/3">
            <div id="table" className="w-full">
              <DataTable />
            </div>
            <div className="flex gap-3">
              <button
                className="text-white text-lg font-sans font-semibold rounded-xl bg-red-400 hover:bg-red-500 p-4"
                onClick={() => {
                  setShowTable(false);
                }}
              >
                Retour
              </button>
              <button
                className="text-white text-lg font-sans font-semibold rounded-xl bg-blue-400 hover:bg-blue-500 p-4"
                onClick={downloadTableImage}
              >
                Télécharger
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-full w-full md:w-10/12 flex flex-col justify-center items-center" id="graph">
        <h1 className="text-3xl font-bold font-sans text-black">
          Graphe: {state.exercice}
        </h1>
        {!showTable && <GraphTest data={state.data} />}
      </div>
      <div className="flex flex-row md:flex-col gap-6 items-center justify-center md:w-2/12">
        <button
          className="text-white text-lg font-sans font-semibold rounded-xl bg-red-400 hover:bg-red-500 p-4"
          onClick={downloadGraphImage}
        >
          Télécharger
        </button>
        <button
          className="text-white text-lg font-sans font-semibold rounded-xl bg-blue-400 hover:bg-blue-500 p-4"
          onClick={() => {
            setShowTable(true);
          }}
        >
          Voir Tableau
        </button>
        <button
          className="text-white text-lg font-sans font-semibold rounded-xl bg-green-400 hover:bg-green-500 p-4"
        >
          <Link href='/'>
              Nouvel exercice
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Results;