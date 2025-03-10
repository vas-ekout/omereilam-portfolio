import ImgHambacherForst from "../assets/images/music-hambacher-forst-main.jpg";
import ImgSolarSystemMeditation from "../assets/images/music-solar-system-meditation-main.jpg";
import ImgAusLicht from "../assets/images/music-aus-licht-main.jpg";
import ImgTierkreis from "../assets/images/music-tierkreis-main.jpg";
import ImgResonateStockhausen from "../assets/images/music-resonate-stockhausen-main.jpg";
import ImgStolenChild from "../assets/images/music-stolen-child-main.jpg";

export interface ContentMusicProps {
  title: string;
  article: string;
  mainImg?: string;
  imgs?: string[];
}

const contentMusic: ContentMusicProps[] = [
  {
    title: "Imaginary Ecosystems",
    article:
      "Imaginary Ecosystems is an interactive musical environment based on synthesized “sound organisms”. The idea for the project started around 2015 when I was studying in The Institute of Sonology in The Hague and experimenting with generative music patterns. Like many other electronic musicians I was excited about the possibility of using computer algorithms to govern the „behaviour“ a certain sound exhibits. Based on predefined rules, different parameters of a sound – e.g. its timbre, pitch, loudness, etc. – can change over time in a process that tries to mimic the behaviour of real organisms in nature. When applying this idea to several sound organisms at once and letting them influence the behaviour of each other one can think of this scenario as an ecosystem of sounds. After an initial success I noticed that even though the sound organisms do continually change over time, these changes were somewhat insignificant and it felt that the ecosystem was stuck in a static state. A breakthrough moment came years later when I incorporated the possibility for me to interact with the sound organisms in real-time. For the first time I felt that the ecosystem was no longer static but that through my interaction it came to life. Composing the sound organisms was then like creating a landscape of possibilities, while interacting with them is exploring this landscape.",
  },
  {
    title: "A Day at Hambacher Forst",
    article:
      "<p>Imaginary Ecosystems is an interactive musical environment based on synthesized “sound organisms”. </p><p>The idea for the project started around 2015 when I was studying in The Institute of Sonology in The Hague and experimenting with generative music patterns. Like many other electronic musicians I was excited about the possibility of using computer algorithms to govern the „behaviour“ a certain sound exhibits. Based on predefined rules, different parameters of a sound – e.g. its timbre, pitch, loudness, etc. – can change over time in a process that tries to mimic the behaviour of real organisms in nature. When applying this idea to several sound organisms at once and letting them influence the behaviour of each other one can think of this scenario as an ecosystem of sounds. </p><p>After an initial success I noticed that even though the sound organisms do continually change over time, these changes were somewhat insignificant and it felt that the ecosystem was stuck in a static state. A breakthrough moment came years later when I incorporated the possibility for me to interact with the sound organisms in real-time. For the first time I felt that the ecosystem was no longer static but that through my interaction it came to life. Composing the sound organisms was then like creating a landscape of possibilities, while interacting with them is exploring this landscape.</p>",
    mainImg: ImgHambacherForst,
  },
  {
    title: "Solar System Meditation",
    article: "",
    mainImg: ImgSolarSystemMeditation,
  },
  { title: "Aus LICHT", article: "", mainImg: ImgAusLicht },
  { title: "TIERKREIS", article: "", mainImg: ImgTierkreis },
  {
    title: "Resonate x STOCKHAUSEN",
    article: "",
    mainImg: ImgResonateStockhausen,
  },
  {
    title: "The Stolen Child",
    article:
      "The Stolen Child is a crossover between fixed media and live theatrical performance. It takes its name from a poem by W. B. Yeats which entails the story of a boy seduced by dark forces. In the context of the piece this happens through a scientific experiment on stage, where one performer acts as the test subject and the other as the experimenter, together recreating Stanley Milgram‘s famous Obedience experiment from the 60s. In the original experiment a „teacher“ was supposedly giving electric shocks to a „student” in order to better perform in a memory task. In the performance case the experimenter is trying to subdue the test subject with the use of electric shock. This process as well as the resistance of the test subject are also directly depicted in sound. <p></p>The duration of the piece is ca. 10 minutes and 10 seconds. It can be performed either with or without staging. In the latter case the fixed media should be played in a large and completely dark auditorium. <p></p>The first performance of the piece took place on March 4, 2016 in La Casa Encendida, Madrid, during the 9th instalment of the IN-SONORA electronic music festival, with Adria Juan playing the Test Subject and Daniel Portillo the Experimenter. The second performance (see pictures below) took place on March 8, 2016 in The Royal Conservatory of The Hague, as part of the CASS concert series, with Grey Timmers playing the Test Subject and Eduard Figueres the Experimenter. <p></p>A video documenting the performance is available on YouTube and a stereo version of the entire piece is available on soundcloud.</p>",
    mainImg: ImgStolenChild,
  },
];

export default contentMusic;
