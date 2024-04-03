import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #171023;
  padding: 16px;
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  .logo{
    color: #F5F6F6;
    font-size: 28px;
    font-family: 'Kalam', cursive;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  svg{
    cursor: pointer;
  }

  @media (min-width: 580px) {
    svg{
      display: none;
    }
  }
`
export const Main = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg{
    font-size: 38px;
  }

`
export const NavMobile = styled.nav`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 76px;
  ul{
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    right:0;
    top: 0;
    text-align: center;
    padding: 24px 16px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #2C243B;
    a{
      color: #CDD0D4;
      text-decoration: none;
      padding: 8px;
    }
  }

`
export const NavDesktop = styled.nav`
  ul{
    display: flex;
    li{
      padding: 8px;

    }
    a{
      color: #CDD0D4;
      text-decoration: none;
      :hover{
        color: #7BFFAF;
        border-bottom: 1px solid #7BFFAF;
      }
    }
  }

  @media (max-width: 580px) {
    display: none;
  }
`

