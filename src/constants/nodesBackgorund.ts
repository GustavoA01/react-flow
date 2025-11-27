import img1 from '../assets/map-background/1_estacao.png';

export const backgroundNodes = [
  {
    id: 'bg-img1-sao-gabriel',
    type: 'background',
    position: { x: -1920, y: -1800 }, 
    data: { 
      id:'1',
      image: img1, 
      width: 2000, 
      height: 2800 
    },
    zIndex: -10,
    draggable: false,
    selectable: false,
  },
]