import type { PhaseNodeType } from "@/data/types/reactFlow";

export const nodesPhases: PhaseNodeType[] = [
  {
    id: "1",
    type: "phase",
    position: { x: 0, y: 0 },
    data: { id: "1", minPoints: 10 },
  },
  {
    id: "2",
    type: "phase",
    position: { x: 80, y: -150 },
    data: { id: "2", minPoints: 20 },
  },
  {
    id: "3",
    type: "phase",
    position: { x: -80, y: -300 },
    data: { id: "3", minPoints: 30 },
  },
  {
    id: "4",
    type: "phase",
    position: { x: 160, y: -500 },
    data: { id: "4", minPoints: 40 },
  },
  {
    id: "5",
    type: "phase",
    position: { x: 80, y: -750 },
    data: { id: "5", minPoints: 50 },
  },
  {
    id: "6",
    type: "phase",
    position: { x: -80, y: -1000 },
    data: { id: "6", minPoints: 60 },
  },
  {
    id: "7",
    type: "phase",
    position: { x: 90, y: -1250 },
    data: { id: "6", minPoints: 70 },
  },
  {
    id: "8",
    type: "phase",
    position: { x: 0, y: -1500 },
    data: { id: "8", minPoints: 80 },
  },
  {
    id: "9",
    type: "phase",
    position: { x: 80, y: -1750 },
    data: { id: "9", minPoints: 90 },
  },
  {
    id: "10",
    type: "phase",
    position: { x: -80, y: -2000 },
    data: { id: "10", minPoints: 100 },
  },
  {
    id: "11",
    type: "phase",
    position: { x: 150, y: -2250 },
    data: { id: "11", minPoints: 110 },
  },
  {
    id: "12",
    type: "phase",
    position: { x: 0, y: -2500 },
    data: { id: "12", minPoints: 120 },
  },
  {
    id: "13",
    type: "phase",
    position: { x: -140, y: -2750 },
    data: { id: "13", minPoints: 130 },
  },
  {
    id: "14",
    type: "phase",
    position: { x: -60, y: -3000 },
    data: { id: "14", minPoints: 140 },
  },
  {
    id: "15",
    type: "phase",
    position: { x: 90, y: -3250 },
    data: { id: "15", minPoints: 150 },
  },
  {
    id: "16",
    type: "phase",
    position: { x: 160, y: -3500 },
    data: { id: "16", minPoints: 160 },
  },
  {
    id: "17",
    type: "phase",
    position: { x: 50, y: -3750 },
    data: { id: "17", minPoints: 170 },
  },
  {
    id: "18",
    type: "phase",
    position: { x: -100, y: -4000 },
    data: { id: "18", minPoints: 180 },
  },
  {
    id: "19",
    type: "phase",
    position: { x: -160, y: -4250 },
    data: { id: "19", minPoints: 190 },
  },
  {
    id: "20",
    type: "phase",
    position: { x: 0, y: -4500 },
    data: { id: "20", minPoints: 200 },
  },
];

const nodeLastIndex = nodesPhases[nodesPhases.length - 1];
export const nodesLastPosition = nodeLastIndex.position.y - 200;
