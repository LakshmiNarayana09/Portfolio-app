import portfolio from "../../assets/portfilioImg.png";
import weather from "../../assets/weatherImg.png";
import cred from "../../assets/credImg.png";
import auth from "../../assets/auth.png";
import todo from "../../assets/todo.png";
import qr from "../../assets/qr.png";
import playlist from "../../assets/playlist.png";
import logos from '../../assets/logos.png'
import ProjectCard from '../home/projects/ProjectCard';
import Footer from '../home/footer/Footer'

const projects = [
  {
    id: 1,
    title: "Portfolio",
    category: "Frontend",
    description:
      "Developed to showcase my skills in web development using React, CSS, and Figma.",
    overview:
      "A modern and responsive portfolio website designed to present my projects, technical skills, and personal profile. It features smooth navigation, engaging animations, and a clean user interface built with React and custom CSS.",
    image: portfolio,
    technologies: logos,
  },
  {
    id: 2,
    title: "Weather App",
    category: "Full Stack",
    description:
      "Weather application with real-time API integration and responsive UI.",
    overview:
      "A weather forecasting application that fetches live weather data using an external API. Users can search for any city to view current temperature, humidity, wind speed, and weather conditions through a responsive interface.",
    image: weather,
    technologies: logos,
  },
  {
    id: 3,
    title: "Cred Clone",
    category: "Frontend",
    description:
      "A responsive clone of the CRED landing page built with React.",
    overview:
      "A pixel-perfect recreation of the CRED landing page, focusing on responsive layouts, smooth animations, and modern UI design. Built to improve frontend development skills and attention to design details.",
    image: cred,
    technologies: logos,
  },
  {
    id: 4,
    title: "User Authentication System",
    category: "Full Stack",
    description:
      "Built an authentication system using React, NodeJS and MongoDB.",
    overview:
      "A secure authentication system supporting user registration, login, and protected routes. It uses React for the frontend, Node.js and Express for the backend, MongoDB for data storage, and JWT for secure authentication.",
    image: auth,
    technologies: logos,
  },
  {
    id: 5,
    title: "Todo List",
    category: "Frontend",
    description:
      "Responsive Todo application with CRUD functionality.",
    overview:
      "A task management application that allows users to create, edit, complete, and delete tasks. It provides a responsive user experience with intuitive controls and efficient state management.",
    image: todo,
    technologies: logos,
  },
  {
    id: 6,
    title: "QR Scanner",
    category: "Frontend",
    description:
      "QR Scanner using ReactJS and modern APIs.",
    overview:
      "A React-based QR code scanner that uses the device camera to scan and decode QR codes instantly. It leverages modern browser APIs to provide fast and accurate scanning across devices.",
    image: qr,
    technologies: logos,
  },
  {
    id: 7,
    title: "Playlist Generator",
    category: "Frontend",
    description:
      "Playlist Generator using Spotify API.",
    overview:
      "A music playlist generator that integrates with the Spotify API to create personalized playlists based on user preferences. It demonstrates API integration, dynamic content rendering, and responsive UI development.",
    image: playlist,
    technologies: logos,
  },
];

export default projects
