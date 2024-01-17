
import React from "react";
import { useSnapshot } from "valtio";
import { state } from "./lib/state";
import DataTable from "./components/table";
import GraphTest from "./components/graphCanva";

const Results = () => {
    return (
        <div className="flex flex-row bg-white w-screen h-screen ">
            <div className="flex basis-1/3 p-10 h-fit">
                <DataTable />
            </div>
            <div className="flex basis-2/3 p-10 h-fit">
                <GraphTest data={state.data}/>
            </div>
        </div>
    );
    }

export default Results;