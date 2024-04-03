import { createSlice, } from "@reduxjs/toolkit";
type project ={
  items: [
    {
      img: string,
      date: string,
      icons: string,
      title: string,
      description: string,
    }
  ]
}
const initialState: project = {
  items: [
    {
      img: "https://i.ibb.co/mHXC994/timer.png",
      date: "Jul - Dec 2022",
      icons: "<DiHtml5 /> <DiCss3 /> <BiLogoJavascript />",
      title: "Timer Pomodoro",
      description: "Timer criado para auxiliar nos estudos com pausas de acordo com o tempo definido",
    }
  ]
}

const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {

  }
})

// export const {  } = ProjectSlice.actions
export default ProjectSlice.reducer
