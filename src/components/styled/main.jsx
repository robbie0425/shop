import styled from "styled-components";
import NewImg from "../../pic/new.png";
import LipstickImg from "../../pic/lipstick.png";
import PerfumeImg from "../../pic/perfume.jpeg";
import MaskImg from "../../pic/mask.jpeg";

export const Main = styled.div`
  background: #ffeeff;
`;

export const New = styled.div`
  background: url(${NewImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const Lipsticks = styled.div`
  background: url(${LipstickImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const Perfumes = styled.div`
  background: url(${PerfumeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  opacity: 0.7;
`;

export const Masks = styled.div`
  background: url(${MaskImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: center;
  opacity: 0.5;
`;

export const NewTitle = styled.div`
  height: 50px;
  width: 100px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const CardList = styled.div`
  height: auto;
  width: 100vw;
  padding: 50px;
  display: flex;
  align-content: space-evenly;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  margin-bottom: 30px;
  height: 300px;
  width: 300px;
`;

export const CardImg = styled.img`
  height: 200px;
  width: 300px;
`;

export const CardBody = styled.div`
  position: relative;
  background: #f8bbd0;
  height: 100px;
`;

export const CardTitle = styled.div``;

export const CardText = styled.div`
  //background-color: blue;
`;

export const CardIconList = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  height: 30px;
`;

export const CardIcon = styled.svg`
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    stroke: white;
  }
`;

export const SnackbarLike = styled.div`
  background: #85ffbd;
  position: fixed;
  left: 15px;
  bottom: 15px;
  height: 50px;
  width: 300px;
  border-radius: 10px;
  z-index: 10;
  padding: 10px;
  animation: fadein 1s, fadeout 1s 2.5s;

  @keyframes fadein {
    from {
      opacity: 0;
      left: -10%;
    }
    to {
      opacity: 1;
      left: 15px;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
      bottom: 15px;
    }
    to {
      opacity: 0;
      bottom: -10%;
    }
  }
`;

export const SnackbarText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  height: 30px;
  text-align: center;
`;
