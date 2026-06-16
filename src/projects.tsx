import * as images from "./assets";
export const projects = [
  {
    id: "proceduralgeneration",
    title: "Procedural Generation Workshop",
    desc: "A workshop covering the wave function colapse and terrain generation with perlin noise for the University of Utah Game Development Club",
    dev_time: "1 week",
    team_size: "Solo",
    tools: "Unity Game Engine, C#",
    role: "Solo Developer",
    implementations: [
      "Wave Function Colapse Demonstration",
      "Perlin Noise Terrain Generation Demonstration",
      "3D Modeling of Roads",
    ],
    retrospective:
      "I created this workshop because I often see procedural generation treated as too complex and intimidating for most projects. The terminology around it can sound daunting, but I wanted to challenge that misconception and show what it actually takes to generate game levels from scratch. The workshop covers two core techniques: the Wave Collapse Function for generating levels with predetermined tile constraints, and terrain generation using Perlin noise.",
    images: [
      images.proceduralGen1,
      images.proceduralGen2,
      images.proceduralGen3,
    ],
    thumbnail: images.proceduralGen1,
    link: <a></a>,
  },
  {
    id: "prawnbrawl",
    title: "Prawn Brawl",
    desc: "Battle your friends across three unique maps and three action-packed game modes in this 2D local multiplayer crustacean showdown.",
    dev_time: "1 week",
    team_size: "Solo",
    tools: "Godot Game Engine, Aseprite",
    role: "Solo Developer",
    implementations: [
      "Intuitive Menu Selection",
      "Local Multiplayer System",
      "Player Controls",
      "Game State Management",
      "Game Art",
    ],
    retrospective:
      "I haven't made a solo game in a while, but I still wanted to challenge myself. I decided to make a multiplayer game because I enjoyed playing games with my friends and I wanted to create a game that gave that same experience. I was able to implement the core mechanics within the first few days, and spent the rest of the time playtesting and polishing the game. I would say that I had the most fun making this game out of all the games I've made so far. At the game showcase, I played my game with my friends and also strangers which showed me how much value my game had in bringing people together and forming new relationships through a fun, engaging experience.",
    images: [images.prawn1, images.prawn2, images.prawn3],
    thumbnail: images.PrawnThumb,
    link: (
      <iframe
        src="https://itch.io/embed/4208303?border_width=2&amp;bg_color=4a5dfe&amp;fg_color=ffffff&amp;border_color=ffffff"
        width="554"
        height="169"
      >
        <a href="https://mappofu.itch.io/prawn-brawl">Prawn Brawl by Mappofu</a>
      </iframe>
    ),
  },
  {
    id: "snailspace",
    title: "Snail Space",
    desc: "An endless arcade-style game where you control a snail spaceship while destroying asteroids and enemy robot snails.",
    dev_time: "2 days",
    team_size: "7",
    tools: "Godot Game Engine",
    role: "Programmer",
    implementations: [
      "Main Menu",
      "Powerups",
      "Game over screen with score analytics",
    ],
    retrospective:
      "For my first time using the Godot engine, I would say this project turned out very successful. The game had a simple concept of avoiding astroids in space with a snail space ship, so I focused on adding juice and making the mechanics satisfying to interact with. Although I mainly worked on the user interface, I gained valuable insights into how the Godot engine works and the fundamental mechanics I’ll use in future projects.",
    images: [images.snail1, images.SnailTrailer1, images.SnailTrailer2],
    thumbnail: images.SnailThumb,
    link: (
      <iframe
        src="https://itch.io/embed/2989719?bg_color=090a24&amp;fg_color=ffffff"
        width="552"
        height="167"
      >
        <a href="https://anniedebry.itch.io/snail-space">
          Snailspace by Annie de Bry, wesleyhatch, LiamHealey, Enoch-Nielsen,
          Mappofu, Logan Waller
        </a>
      </iframe>
    ),
  },
  {
    id: "dicediviners",
    title: "Dice Diviners",
    desc: "A 2d top-down wave fighting game where the player can roll the dice in order to summon new weapons.",
    dev_time: "1 week",
    team_size: "1",
    tools: "Godot Game Engine",
    role: "Programmer",
    implementations: [
      "Player Controls",
      "Player Weapons",
      "Random Weapon Dice Roll System",
      "Enemy AI",
      "Wave System",
    ],
    retrospective:
      "This game was originally made in 2022 for a game jam, but I remade it in 2025. In the remake, I revised many gameplay features that made the game much more fun to play. I utilized object oriented programming and composition to streamline the process of designing weapons and enemies. I am very proud of th result and plan to continue working on this game.",
    images: [images.dicediviners],
    thumbnail: images.dicediviners,
    link: (
      <iframe
        src="https://itch.io/embed/3716331?bg_color=9781ff"
        width="552"
        height="167"
      >
        <a href="https://mappofu.itch.io/dice-diviners-remake">
          Dice Diviners Remake by Mappofu
        </a>
      </iframe>
    ),
  },
  {
    id: "stickyssituation",
    title: "Sticky's Situation",
    desc: "A 2D active ragdoll platformer game, and the final project for the Carnegie Mellon National High School Game Academy Precollege program.",
    dev_time: "2 weeks",
    team_size: "5",
    tools: "Tools: Unity, C#",
    role: "Programmer",
    implementations: [
      "Player Movement",
      "Player abilities (shoot, grapple, shield)",
      "Dialogue system within the game",
      "Main menu and level selection screen",
      "Final boss",
    ],
    retrospective:
      "Overall, the project was completed successfully, even if the game itself wasn’t entirely polished; it was silly, fun to play, and well received by those who tried it. Several areas needed improvement. The intended active ragdoll movement was too floppy, often causing glitches like the player’s feet getting stuck in walls; the grappling hook was overly stiff and jittery; and the user interface appeared warped due to limited testing across different window sizes. The story, delivered through text dialogue, felt disconnected from gameplay and lacked immersion, making the narrative difficult to follow. Despite working entirely remotely due to the Covid-19 shelter-in-place order, the team collaborated very well and stayed focused and aligned throughout development. If I were to remake the game, I would prioritize polishing core mechanics earlier and use tools like singletons, custom events, and scriptable objects to improve code structure and performance.",
    images: [images.StickyTrailer, images.sticky1, images.sticky2],
    thumbnail: images.stickyssituation,
    link: (
      <iframe src="https://itch.io/embed/1156377" width="552" height="167">
        <a href="https://mappofu.itch.io/stickys-situation">
          Sticky's Situation by Mappofu
        </a>
      </iframe>
    ),
  },
  {
    id: "bravethestorm",
    title: "Brave The Storm",
    desc: "A cozy fishing game where you can catch fish to store in an encyclopedia and do quests for the locals.",
    dev_time: "1 week",
    team_size: "3",
    tools: "Godot Game Engine",
    role: "Programmer",
    implementations: [
      "Fishing Mechanics",
      "Individual Fish Classes",
      "Quests",
      "Dialogue System",
      "Main Menu",
    ],
    retrospective:
      "I had a lot of fun making this game. During development, I focused on making the game fun and animated. I wanted to make a system that was both fun and satisfying for the player. By mixing the animations with sounds and gameplay, I was able to present all the game elements in an expressive way. One thing I was very proud of was creating the reeling sound effect for fishing by recording myself using a zip tie and adjusting the pitch",
    images: [images.BraveTrailer, images.Brave1, images.Brave2, images.Brave3],
    thumbnail: images.BraveThumb,
    link: (
      <iframe
        src="https://itch.io/embed/3294556?bg_color=95d9ff"
        width="552"
        height="167"
      >
        <a href="https://mappofu.itch.io/brave-the-storm">
          Brave The Storm by Mappofu, macroscope
        </a>
      </iframe>
    ),
  },
  {
    id: "flurry",
    title: "Flurry",
    desc: "A reimagining of Qbert and a project for the Carnegie Mellon National High School Game Academy Precollege program.",
    dev_time: "2 weeks",
    team_size: "5",
    tools: "Tools: Unity, C#",
    role: "Programmer",
    implementations: [
      "Player Movement",
      "Snowflake hovering pad",
      "Win/lose conditions",
      "User Interface",
      "Flame, Egg, and Ice Cube enemy AI",
    ],
    retrospective:
      "Remaking Qbert was a lot more intricate than I had originally thought. I remember disecting the Qbert game down to it's fine details in order to make a functional and faithful remake of the game. This game made me more aware of the details that players don't always notice, but make a huge difference in their experience. At the summer camp, I was slightly disappointed because I didn't get assigned a game I wanted such as 1942 or frogger. However, I learned so much about creating fun and engaging games from making Flurry.",
    images: [images.FlurryTrailer, images.flurry],
    thumbnail: images.flurry,
    link: (
      <iframe src="https://itch.io/embed/1247086" width="552" height="167">
        <a href="https://mappofu.itch.io/flurry">Flurry by Mappofu</a>
      </iframe>
    ),
  },
  {
    id: "bullethellevator",
    title: "Bullet Hellevator",
    desc: "A game where you have to dodge projectiles while going up an elevator for 100 floors.",
    dev_time: "2 days",
    team_size: "5",
    tools: "Godot Game Engine",
    role: "Programmer",
    implementations: [
      "Player Controls and Logic",
      "Game Animations",
      "Main Menu and Game Over Screens",
    ],
    retrospective:
      "Development of the game went very smoothly. This is partially because of the simplistic game, but also from the great chemistry with the team members. The development of the game was quick and we spent most of the time polishing the game to be fun to play despite it's simplicity. When we finished the game and published on itch.io, we spent around 30 minutes playing it purely for enjoyment. We found that our game was very addicting and had a lot of fun trying to reach the end.",
    images: [images.BulletHellThumb],
    thumbnail: images.BulletHellThumb,
    link: (
      <iframe
        src="https://itch.io/embed/3347686?bg_color=656565&amp;fg_color=fe4545"
        width="552"
        height="167"
      >
        <a href="https://fourteendigits.itch.io/bullet-hellevator">
          Bullet Hellevator by Fourteendigits, Logan Waller, natenotavailable,
          kirble, Enoch-Nielsen, macroscope, omdagoalie, Mappofu, HazardPlay13
        </a>
      </iframe>
    ),
  },
  {
    id: "sternhall",
    title: "Escape: Stern Hall",
    desc: "A puzzle escape-room-like game with the twist of having a rising temperature that the player must maintain.",
    dev_time: "2 days",
    team_size: "7",
    tools: "Unity Game Engine, C#",
    role: "Lead Programmer",
    implementations: [
      "Player Movement",
      "Temperature System",
      "Door Keypad",
      "Fireaxe and Wood Breaking system",
      "Managed programmer task distribution and combined all mechanics together",
    ],
    retrospective:
      "This was the first game that I made with a team. The final product turned out to be a fun puzzle game. From this project, I was able to learn the workflow that goes in to develop a complete product of a game.",
    images: [images.stern1, images.stern2, images.stern3],
    thumbnail: images.SternThumb,
    link: (
      <a href="https://digitalmediaacademy.itch.io/escape-stern-hall">
        Link to Escape: Stern Hall
      </a>
    ),
  },
  {
    id: "3dmodeling",
    title: "3D Modeling",
    desc: "3D models made in Blender.",
    dev_time: "",
    team_size: "",
    tools: "",
    role: "",
    implementations: [],
    retrospective: "",
    images: [],
    thumbnail: images.model2,
    link: <a></a>,
  },
  {
    id: "spriteeditor",
    title: "Sprite Editor",
    desc: "An application for creating sprites/animation and exporting them into image files.",
    dev_time: "2 weeks",
    team_size: "4",
    tools: "C++, QT",
    role: "Programmer",
    implementations: [
      "User Interface",
      "Sprite Canvas",
      "Paint Tool",
      "Eraser Tool",
      "Main Menu",
    ],
    retrospective:
      "This project was an assignment for my Computer Science class. During development, I learned how the waterfall workflow operates and how to divide tasks among teammates while still maintaining a strong understanding of the overall codebase. The team held daily meetings to share progress and help each other solve challenging bugs. When integrating the code we had worked on individually, the process was seamless because of our collaboration and communication. The project was a major success and gave me valuable insight into how team environments function in a real work setting.",
    images: [images.sprite1, images.sprite2, images.sprite3, images.sprite4],
    thumbnail: images.sprite1,
    link: <a></a>,
  },
  {
    id: "teamsorter",
    title: "Game Jam Team Sorter",
    desc: "A program that uses an AI agent to automatically create balanced game jam teams with parameters such as participant skills, roles, and preferences.",
    dev_time: "1 week",
    team_size: "Solo",
    tools: "Python, Pandas",
    role: "Programmer",
    implementations: [
      "Google Sheets API connection",
      "Python Pandas data organization",
      "Team sorting AI agent",
      "AI agent API connection",
    ],
    retrospective:
      "As an engineering officer in my game development club, I noticed that organizing teams from Google Form submissions was a very time-consuming and manual process. Club officers had to review individual applications, existing teams, skill levels, and preferences to create balanced game jam teams. To streamline this process, I developed a Python script in Google Colab that retrieves Google Form responses and uses API calls to a custom AI agent to generate balanced teams based on members’ skills and preferences. The program also formats the final team assignments into a Discord-ready announcement message. Although the system has not yet been used in an official game jam, I tested it using data from previous events, where it successfully organized balanced teams. This project strengthened my interest in AI agents and showed me how AI can be applied to solve practical organizational problems in software projects.",
    images: [images.sorter1, images.sorter2, images.sorter3],
    thumbnail: images.sorter1,
    link: <a></a>,
  },
  {
    id: "animeanalysis",
    title: "Anime Data Analysis",
    desc: "A data analysis on manga adapted anime compared to anime originals.",
    dev_time: "2 weeks",
    team_size: "Solo",
    tools: "Python, Pandas, Numpy, Matplotlib",
    role: "Data Scientist",
    implementations: [
      "API dataset collection of manga and anime",
      "Data cleaning, organization, and graphing",
      "Data analysis on manga-adapted anime compared to original anime",
    ],
    retrospective:
      "This project was done for the final project of my data science class. Growing up watching anime, I've always been fascinated by how it has transformed from a niche hobby into a global cultural phenomenon. As the audience for anime has exploded worldwide, Japanese studios have had to make increasingly deliberate choices on whether to adapt an existing manga or innovate something new. Some of my favorite series are manga adaptations, while others are original creations, and I've often wondered whether one path tends to lead to greater success than the other. From my analysis, I found that anime adapted from manga tends to be more successful than original anime. If you want to know more about my analysis you can view my research paper here: Research Paper Link",
    images: [images.anime1, images.anime2, images.anime3, images.anime4],
    thumbnail: images.anime1,
    link: (
      <a href="https://docs.google.com/document/d/1xNu_NAo9pnXiYCuz8Qc587sIH_uiyeQCt2ZT6BI_OaM/edit?usp=sharing">
        Link to Research Paper
      </a>
    ),
  },
  {
    id: "portfoliowebsite",
    title: "Personal Portfolio Website",
    desc: "My personal portfolio website using React.js to showcase my projects, technical skills, and experience in software development and game development and view examples of my work.",
    dev_time: "Ongoing",
    team_size: "Solo",
    tools: "HTML, CSS, Typescript, React, Motion.js, Github Pages, Figma",
    role: "Developer",
    implementations: [
      "Designed layout for the website in Figma",
      "Created React.js components to streamline adding projects to the portfolio",
      "Used motion.js to animate website",
    ],
    retrospective:
      "I created this portfolio website because my previous portfolio was difficult to maintain and updating it with new projects was time-consuming. I also wanted an opportunity to improve the overall design and user experience. After learning React.js, I realized it would allow me to build the site using reusable components, making both development and maintenance more efficient. I designed the website with scalability in mind, so adding new projects requires minimal effort. Instead of creating new pages or layouts each time, I can simply add a new entry to the project's data structure and the website automatically generates the corresponding content.",
    images: [
      images.portfolio1,
      images.portfolio2,
      images.portfolio3,
      images.portfolio4,
    ],
    thumbnail: images.portfolio3,
    link: (
      <a href="https://tysty.github.io/portfolio/">Link to Portfolio Website</a>
    ),
  },
];
