"use client";
import React from "react";
import {ReactFlow,  Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import SocialNode from "./SocialNode";
const initialNodes = [
    {
      id: "1",
      type: "social",
      position: { x: 500, y: 100 },
      data: { icon: "github", label: "GitHub" },
    },
    {
      id: "2",
      type: "social",
      position: { x: 300, y: 300 },
      data: { icon: "user", label: "Profile" },
    },
    {
      id: "3",
      type: "social",
      position: { x: 700, y: 300 },
      data: { icon: "instagram", label: "Instagram" },
    },
    {
      id: "4",
      type: "social",
      position: { x: 200, y: 500 },
      data: { icon: "info", label: "Info 1" },
    },
    {
      id: "5",
      type: "social",
      position: { x: 400, y: 500 },
      data: { icon: "info", label: "Info 2" },
    },
    {
      id: "6",
      type: "social",
      position: { x: 600, y: 500 },
      data: { icon: "info", label: "Info 3" },
    },
    {
      id: "7",
      type: "social",
      position: { x: 800, y: 500 },
      data: { icon: "info", label: "Info 4" },
    },
  ];


  const nodeTypes = {
    social: SocialNode,
  };
  
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-3", source: "1", target: "3", animated: true },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e3-6", source: "3", target: "6" },
    { id: "e3-7", source: "3", target: "7" },
  ];

const GraphComponent = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center rounded-lg  border border-white/20 p-2 gap-2">
      <div className="flex justify-center items-center w-full h-10 text-2xl font-bold border-b-2 border-white/10">
      Graph View
      </div>
      <div className="w-full h-[400px] bg-gray-800 shadow-lg rounded-xl ">
        <ReactFlow nodes={initialNodes} edges={initialEdges}  nodeTypes={nodeTypes} fitView>
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};



export default GraphComponent;
