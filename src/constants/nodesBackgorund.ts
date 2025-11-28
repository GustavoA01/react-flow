import img1Puc from '../assets/map-background/fundo1-puc.svg';
import img1SaoGabriel from '../assets/map-background/fundo1-estacao-sao-gabriel.svg';

export const backgroundNodes = [
  {
    id: 'bg-img1-sao-gabriel',
    type: 'background',
    position: { x: -1920, y: -1800 }, 
    data: { 
      id:'1',
      image: img1Puc, 
      width: 2000, 
      height: 2800 
    },
    zIndex: -10,
    draggable: false,
    selectable: false,
  },
  {
    id: 'bg-img1-estacao-sao-gabriel',
    type: 'background',
    position: { x: 78, y: -1800 }, 
    data: { 
      id:'1',
      image: img1SaoGabriel, 
      width: 1920, 
      height: 2800 
    },
    zIndex: -10,
    draggable: false,
    selectable: false,
  },
]