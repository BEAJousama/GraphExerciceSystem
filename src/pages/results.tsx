
import React from "react";
import { useSnapshot } from "valtio";
import { state } from "./lib/state";
import DataTable from "./components/table";
import GraphTest from "./components/graphCanva";

const Results = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen w-screen">
            <div className="flex p-10 h-fit">
                <DataTable />
            </div>
            <GraphTest data={state.data}/>
        </div>
    );
    }

export default Results;