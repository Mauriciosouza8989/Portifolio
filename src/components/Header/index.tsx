import { useState } from "react";
import { Container, Main, NavMobile, NavDesktop } from "./style";
import { FiX } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";

export function Header(){
  const [isOpen, setIsOpen] = useState(false)
  return(
    <Container>
      <Main>
      <h1 className="logo">Maurício<span>Sousa</span></h1>
        { isOpen ? <FiX onClick={() => setIsOpen(false)}/> : <IoMenuOutline onClick={()=> setIsOpen(true)}/> }
        { isOpen &&
          <NavMobile>
            <ul>
              <li onClick={()=> setIsOpen(false)}><a href="#">Home</a></li>
              <li onClick={()=> setIsOpen(false)}><a href="#about">about</a></li>
              <li onClick={()=> setIsOpen(false)}><a href="#projects">Projects</a></li>
              <li onClick={()=> setIsOpen(false)}><a href="#contact">Contact</a></li>
              <hr />
            </ul>
          </NavMobile>
        }
        <NavDesktop>
            <ul>
              <li onClick={()=> setIsOpen(false)}><a href="#">Home</a></li>
              <li onClick={()=> setIsOpen(false)}><a href="#about">about</a></li>
              <li onClick={()=> setIsOpen(false)}><a href="#projects">Projects</a></li>
              <li onClick={()=> setIsOpen(false)}><a href="/#contact">Contact</a></li>
            </ul>
          </NavDesktop>
      </Main>
    </Container>
  )
}
