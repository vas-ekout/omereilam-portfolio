import { styled } from "@mui/material";
import { HomeSection, HomeSectionProps } from "./HomeSection";
import AboutImg from "../../assets/images/about-01.jpg";
import MusicImaginary from "../../assets/images/music-imaginary-ecosystems-01.jpg";
import MusicSolarSystem from "../../assets/images/music-solar-system-meditation-01.jpg";
import EducationQuerklang from "../../assets/images/education-querklang-01.jpg";
import WritingsWhatIfWeStay from "../../assets/images/writings-what-if-we-stay-01.jpg";
import WritingsDoveOfPeace from "../../assets/images/writings-dove-of-peace-01.jpg";

const homeSections: HomeSectionProps[] = [
  {
    section: {
      label: "About",
      articles: [
        {
          article:
            "Omer Eilam is a musician based in Berlin. He composes electroacoustic music and plays synthesizers, piano and flute. With works ranging from the sonification of heavenly bodies to the destruction of forests, his focus remains on what it means to be human in our day and age. Alongside his compositional praxis he also teaches experimental music in schools and gives workshops for exploring the voice through playful improvisations. As a writer his focus lies on existential themes related to music, spirituality, philosophy and activism.",
          img: AboutImg,
        },
      ],
      imageFirst: true,
    },
  },
  {
    section: {
      label: "Music",
      articles: [
        {
          headline: "Imaginary Ecosystems",
          article:
            "Imaginary Ecosystems is a musical framework based on the idea of “sound organisms”. In analogy to a real ecosystem, one can think of different sounds as organisms, each of them having its unique character that changes over time, and each also interacting with other organisms as well as with the performer.",
          img: MusicImaginary,
        },
        {
          headline: "Solar System Meditation",
          article:
            "The Solar System Meditation is a modern adaptation of Johannes Kepler's Music of the Spheres, where each planet corresponds to distinct sounds which continually evolve in time and space.",
          img: MusicSolarSystem,
        },
      ],
    },
  },
  {
    section: {
      label: "Education",
      articles: [
        {
          headline: "Querklang",
          article:
            "In 2024/25 Omer Eilam participated in the QuerKlang project for experimental music education. Taking place in 10 high-schools in Berlin the project brings together teachers with musicians to lead school children in a creative process that culminates in a performance at the MAERZMUSIK Festival.",
          img: EducationQuerklang,
        },
        {
          headline: "lev",
          article:
            "lev is a Berlin-based collective of musicians whose aim is to facilitate electronic music education for the general public. In 2025 Omer Eilam will lead a series of lectures under the title 'The Art of Listening' in various libraries around Berlin.",
        },
      ],
    },
  },
  {
    section: {
      label: "Writings",
      articles: [
        {
          headline: "What if we stay here",
          article: `What if we stay here...<br>Floating atop the abyss<br>Surrounded by beasts of prey`,
          img: WritingsWhatIfWeStay,
        },
        {
          headline: "The Dove of Peace",
          article:
            "Yesterday I participated in a meeting with Faten, a Christian Palestinian woman living in Bethlehem. The meeting was organized by Gilda Bartel from Das Goetheanum magazine. It all started a couple of months ago when I sent my poem <i>Israel</i> to the editorial team of the magazine.",
          img: WritingsDoveOfPeace,
        },
      ],
    },
  },
];

const StyledHomeContainer = styled("div")(() => ({
  gridColumn: "2 / 3",
  display: "flex",
  flexDirection: "column",
  gap: "90px",
}));

export const Home = () => {
  return (
    <StyledHomeContainer>
      {homeSections.map((section) => (
        <HomeSection section={section.section} />
      ))}
    </StyledHomeContainer>
  );
};
