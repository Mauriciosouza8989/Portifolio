import { ReactNode } from "react";
import { Container, ProjectHover } from "./style";
import { MdArrowOutward } from "react-icons/md";
import { DiGithubBadge } from "react-icons/di";

type Props ={
  imgUrl: string,
  date: string,
  icons: ReactNode,
  title: string,
  description: string,
  urlDeploy: string,
  urlGithub: string,
}

export function Project({imgUrl, date, icons, title, description, urlDeploy, urlGithub}: Props){
  return(
    <Container>
      <ProjectHover id="pro">
        <ul>
          <li id="github">
            <a target="blank" href={urlGithub}><DiGithubBadge /></a>
          </li>
          <li id="deploy">
            <a target="blank" href={urlDeploy}><MdArrowOutward /></a>
          </li>
        </ul>
      </ProjectHover>
      <img src={imgUrl} />
      <div className="details">
        <span>{date}</span>
        <div className="icons">
          {icons}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}
