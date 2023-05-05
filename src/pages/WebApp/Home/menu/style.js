import styled, {keyframes} from 'styled-components';

const ShowMenu = keyframes`
0%{right:-300px}
100%{right:0;}
`;
const BackgroundOpacity = keyframes`
0%{opacity:0}
100%{opacity:1;}
`;

export const BackgroundContainer = styled.div`
color:var(--font-color);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  //opacity: 0;
pointer-events:none;
  background-color: #00000000;
transition:all .5s ease;
${props =>
  props.menu &&
  `
  opacity: 1;
pointer-events:auto;
  background-color: #00000080;
  `}

article{
  padding:1rem;
}

  > div {
  right:-300px;
transition:all .5s ease;
${props =>
  props.menu &&
  `
  right:0;
  `}
  }

& .open{
  //opacity: 1;
//pointer-events:none;
  //background-color: #00000080;
  //animation: ${BackgroundOpacity} 0.5s ease both;
}

  & .open div{
  }

& .close{
  //opacity: 0;
  //background-color: #00000000;
  //animation: ${BackgroundOpacity} 0.5s ease both;
}

  & .close div{
  //right:-300px;
  }



hr{
  border-top:none;
  border-color:#2d2f3350;
}

  .row{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .row:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }

  button{
    display:flex;
    justify-content:space-between;
    background-color:transparent;
    border:none;
    color:var(--font-color);
    align-items:center;
    width:100%;
    padding:.75rem;

    &:hover{
    background-color:#2d2f33;
    }

    h3{
      margin:0;
    }

    figure{
      width:20px;
      height:20px;
      margin:0;
      background-color:${props=>props.bg ? props.bg : 'red'}
    }
  }

  button:has(div) div{
    display:flex;
    align-items:center;
    gap:1rem;
  }
`;

export const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: -300px;
  background-color:#1a1c20;
  width: 300px;
`;
