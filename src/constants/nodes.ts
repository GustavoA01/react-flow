export const nodesPhases = [
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
]

export const nodesLastPosition =
  nodesPhases[nodesPhases.length - 1].position.y - 200
