import styled from "styled-components";

export const Navbar = styled.div`
  background: #f8bbd0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  //align-items: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const NavLeft = styled.div`
  //background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    height: 50px;
  }
`;

export const NavMid = styled.div`
  //background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 1s ease;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    transition: all 1s ease;
  }
`;

export const NavRight = styled.div`
  //background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavRight2 = styled.div`
  //background: green;
  display: none;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.a`
  color: #a37484;
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: white;
    transition: all 0.5s ease;
  }
`;

export const NavIcon = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  fill: transparent;
  position: relative;

  &:hover {
    stroke: white;
  }
`;