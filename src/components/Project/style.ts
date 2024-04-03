import styled from "styled-components";


export const ProjectHover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 16px;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(255, 255,255, 0.1);
    box-shadow: 0px 0px 8px 1px #7DFFAF;
    opacity: 0;
    li{
      width: 48px;
      height: 48px;
      list-style: none;
      margin: 16px;
      background-color: #171023;
      border-radius: 8px;
      display: flex;
      :hover{
        background-color: #2C243B;
      }
      a{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  text-align: start;
  background-color: #2C243B;
  border-radius: 16px;
  margin-bottom: 24px;
  position: relative;
  :hover{
    ${ProjectHover}{
      opacity: 1;
    }
  }

  img{
    border-radius: 8px 8px 0 0;
  }

  div{
    margin-bottom: 16px;
    span{
      color: #CDD0D4;
      font-family: 'Heebo', sans-serif;
    }
  }
  h3{
    display: inline;
  }
  p{
    margin-top: 8px;
    font-size: 18px;
  }
  .details{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .icons{
      display: flex;
      margin: 0;
    }
    svg{
      font-size: 28px;
      color: #9955E8;
    }
  }

`

