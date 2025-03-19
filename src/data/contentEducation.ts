import ImgImaginaryEcosystems from "../assets/images/music-imaginary-ecosystems-main.jpg";
import ImgHambacherForst from "../assets/images/music-hambacher-forst-main.jpg";
import ImgSolarSystemMeditation from "../assets/images/music-solar-system-meditation-main.jpg";
import ImgAusLicht from "../assets/images/music-aus-licht-main.jpg";
import ImgTierkreis from "../assets/images/music-tierkreis-main.jpg";
import ImgResonateStockhausen from "../assets/images/music-resonate-stockhausen-main.jpg";
import ImgStolenChild from "../assets/images/music-stolen-child-main.jpg";

export interface ContentEducationProps {
  title: string;
  mainImg?: string;
  sections: {
    textHead?: string;
    text: string;
    img?: string;
  }[];
  credits?: string[];
  imgs?: string[];
  soundcloudSrc?: string;
  youtubeSrc?: string;
}

const contentEducation: ContentEducationProps[] = [
  {
    title: "Queerklang",
    mainImg: ImgImaginaryEcosystems,
    sections: [
      {
        textHead: "This is a Paragraph Headline",
        text: "Imaginary Ecosystems is an interactive musical environment based on synthesized “sound organisms”.",
      },
      {
        text: "The idea for the project started around 2015 when I was studying in The Institute of Sonology in The Hague and experimenting with generative music patterns. Like many other electronic musicians I was excited about the possibility of using computer algorithms to govern the 'behaviour' a certain sound exhibits. Based on predefined rules, different parameters of a sound – e.g. its timbre, pitch, loudness, etc. – can change over time in a process that tries to mimic the behaviour of real organisms in nature. When applying this idea to several sound organisms at once and letting them influence the behaviour of each other one can think of this scenario as an ecosystem of sounds",
      },
      {
        text: "After an initial success I noticed that even though the sound organisms do continually change over time, these changes were somewhat insignificant and it felt that the ecosystem remained largely static. A breakthrough moment came years later when I incorporated the possibility to interact with the sound organisms in real-time. At last the ecosystem was no longer static but through my interaction it came to life. Composing the sound organisms was then like creating a landscape of possibilities, while interacting with them was exploring this landscape.",
      },
      {
        text: "Following these developments I used the Imaginary Ecosystems framework in several live improvised concerts, among which were two performances which took place during the Küchensessions series in Hamburg in 2024. The results were recorded and later developed into two new compositions: Anthroposophia and Vision of the Valley of Dry Bones.",
      },
      {
        text: "From a musical point of view, the two Imaginary Ecosystems compositions are an interesting case study for the relationship between composition and improvisation in electronic music. The working process began through an improvisation with the sound material, similar to the way organisms in nature playfully relate to each other. This allowed the sound organisms to evolve and interact in ever changing ways. The second step of recording the results was like taking snapshots or timelapses of these ecosystems. Finally, the concluding compositional process could be likened to sculpting in musical time: some segments were removed, others adjusted, a narrative incorporated and assembled into a musical whole. For example, one of the pieces contains an apocalyptic prophecy from the Book of Ezekiel which symbolizes both destruction and the potential for regeneration. The initial soundscape is sparse and fragmentary, consisting of brittle whispers suggesting aridity, decay and dissolution. Using digital synthesis techniques, these sound fragments are reconstructed, gradually forming richer textures that symbolize the process of revival.The two pieces together with my 2023 composition Solar System Meditation are due to be released as an album in 2025.",
      },
    ],
  },
  {
    title: "lev Berlin",
    mainImg: ImgHambacherForst,
    sections: [
      {
        text: "In August 2020 I spent a day at the Hambach Forest together with a group of activists who were occupying the forest and trying to save it from destruction for the sake of coal mining. At that time I was an active member of Extinction Rebellion in The Netherlands and wanted to witness firsthand the collapse of our natural systems as well as the struggle of the environmental movement in order to prevent that from happening.",
      },
      {
        text: "As the largest open pit mine in Europe, the forest and its occupation became a symbol of resistance and an inspiration for many activists. When I arrived there it was two years after a German court ruled that the clearance of Hambach Forest by RWE AG had to stop immediately until further evidence could be evaluated. While I expected to find highly motivated activists and “tree hugging hippies” I was totally unprepared to face people whose lives were so utterly different from anything I’ve encountered until then. In retrospect I realized how living in such close proximity to a place of destruction and violent opposition can cause deep scars in the human soul and make a person feel extremely alienated from their surroundings.",
      },
      {
        text: "While originally I planned to stay in the forest for several weeks, having contracted food poisoning on the first night from forest supplies that were long past their due date, I had to flee immediately and seek medical attention. Back in civilisation I wrote a text which tried to capture those 24 hours and put them in a broader context of the environmental movement and of human society. I later recorded that text hoping to one day use it as part of my music.",
      },
      {
        text: "Two years into the future I moved to live in Germany and, after several years of hiatus from music, I renovated a small garden house and made it into my studio. I revisited the Hambach text and started working on a new composition. Armed by a variety of synthesizers, sounds from natural habitats, bird calls and soundbites from climate-related newscasts and environmental movement demonstrations, the text provided a guide to capture the spirit of the forest and its inhabitants in music.",
      },
      {
        text: "Since my time at the forest a law was passed to preserve it from further destruction which was a clear victory for the environmental movement. Yet surrounding areas, for example the town of Lützerath, were still eradicated to make way for the expansion of the Garzweiler surface mine. When I revisited the forest in 2022 the atmosphere there was different. Some of the old occupants were still on site but the majority of people were occasional passersby who wanted to camp in the forest. In a conversation with one of them I learned that even though the forest was officially 'saved' the damage created by the digging of the coal mine depleted the ground water to levels that cannot sustain its survival. Together with increasingly unstable climate conditions the remaining part of the forest will probably perish by the end of the century.",
      },
      {
        text: "This picture of a dying forest is sadly not limited to Hambach. In Falkensee, just one hundred meters from our house, there is another forest that is dying. Every year I can see the increasing number of trees that have fallen as a result of draughts and of monoculture plantations that were never sustainable in the first place. And yet, each fallen tree is also a wake-up call for the person who passes it by, if only they notice it. If only they realize how deeply connected they are to that tree. For both the tree and the passerby are organs in the body of this Earth, each having to fulfil a unique function to maintain and promote Life.",
      },
      {
        text: "A Day at Hambacher Forst is dedicated to all activists, environmentalists and spiritual warriors who devote their lives to promoting life on this Earth.",
      },
    ],
    credits: [
      "Text & Music: Omer Eilam",
      "Mixing & Mastering: Dani Blich & Omer Eilam",
      "Video: Henry Mex",
      "Venue: Heilig Geist Kirche, Falkensee (Germany)",
    ],
    soundcloudSrc:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1433644327&color=%23494a37&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    youtubeSrc: "https://www.youtube.com/embed/25m5UT1vzxM?si=CqDv_pIm7zsOwGq2",
  },
  {
    title: "The Sound Wave",
    sections: [
      {
        text: "The Solar System Meditation is a modern adaptation of Johannes Kepler's Music of the Spheres. My starting point was the movement of the planets around the sun: their distance, their speed, their angle, etc. These parameters were then used to guide the curation of the sounds where, put simply, each planet corresponds to a single continually evolving sound with its unique frequency and spatial movement. Using dedicated software these spatial trajectories were simulated in sound and rendered in multichannel format that corresponds to any given loudspeaker arrangement.",
      },
      {
        text: "The composition is divided into three segments: formation, crystallisation and decay. In each segment different sonic processes are set into motion. These embody a narrative – both mythological and scientific – that invites the listener to experience the nature of existence of our solar system as it is captured in sound.",
      },
      {
        text: "In a concert setting, listeners would find themselves seated at the heart of the hall, akin to the sun's central position, surrounded by celestial melodies and rhythms, as if the planets themselves were orbiting around them.",
      },
    ],
    mainImg: ImgSolarSystemMeditation,
    soundcloudSrc:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1626574986&color=%23494a37&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
];

export default contentEducation;
