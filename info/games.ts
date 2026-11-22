import { GameProject } from "types/game";

export const games: GameProject[] = [
  {
    id: "pharmacy",
    slug: "pharmacy",
    title: "Pharmacy",
    subtitle: "Post-apocalyptic RPG survival experience",
    genre: "Role Playing / Survival",
    role: "Gameplay Programmer & UI/UX Designer",
    platform: "Windows (PC) · itch.io",
    year: "2024",
    primaryFocus: "Complete UI/UX System & Dynamic Potion Statistics Engine",
    teamSize: 3,
    description:
      "Pharmacy is an atmospheric survival RPG set in a decaying post-apocalyptic world. The player steps into the shoes of a lone survivor desperately searching for ingredients to formulate a cure for a fatal pandemic that has decimated humanity. The experience hinges on resource scrounging, high-stakes medical crafting, and managing escalating infection levels under persistent psychological tension.",
    myContribution: [
      "Engineered the entire user interface and HUD from the ground up in Unity, delivering an intuitive, atmospheric diegetic experience.",
      "Designed and coded the comprehensive potion statistics engine: dynamic compound calculations, toxicity tradeoffs, and physiological response curves.",
      "Programmed the core gameplay loop, inventory mechanics, crafting workbench interactions, and survivor vital stats.",
      "Integrated adaptive audio triggers and spatial ambient soundscapes using FMOD.",
      "Balanced survival parameters, conducted playtesting, and published the final playable build on itch.io.",
    ],
    tools: ["Unity", "C#", "FMOD Audio", "Photoshop", "Git"],
    itchUrl: "https://fragtrap.itch.io/pharmacy",
    coverImage: "/projects/games/pharmacy-cover.png",
    screenshots: [
      "/projects/games/pharmacy-cover.png",
      "/projects/games/pharmacy-1.png",
      "/projects/games/pharmacy-2.png",
    ],
    highlights: [
      "Custom Potion Statistics Engine balancing potency against organic toxicity",
      "Comprehensive, immersive UI/UX system built specifically for survival tension",
      "Atmospheric FMOD sound design adapting dynamically to player infection level",
      "Publicly available playable Windows build hosted on itch.io",
    ],
    devlog: [
      {
        title: "The Vision & World Atmosphere",
        subtitle: "Creating desperate survival tension in a pandemic wasteland",
        content: [
          "In Pharmacy, our core goal was to make the player feel the overwhelming weight of survival. Unlike standard action RPGs where health potions are simple instant healing items, in Pharmacy every chemical compound introduced into the survivor's fragile body carries severe physiological consequences.",
          "The game loop revolves around scavenged organic matter, chemical reagents, and makeshift pharmaceutical apparatuses. The player must balance their daily activities between dangerous expeditions for rare active compounds and careful laboratory synthesis back at the shelter.",
        ],
        image: "/projects/games/pharmacy-cover.png",
        imageCaption:
          "Pharmacy title artwork – Setting the grim tone for an isolated survivor searching for an impossible cure.",
        keyTakeaways: [
          "Emphasis on deliberate decision-making over reflex combat.",
          "High stakes: infection progress creates an unrelenting ticking clock.",
        ],
      },
      {
        title: "My Core Focus #1: Complete UI/UX Architecture",
        subtitle:
          "Designing an immersive, non-intrusive interface that informs without breaking atmosphere",
        content: [
          "My most significant design undertaking on Pharmacy was building the complete UI/UX framework from scratch in Unity. In a survival game, the interface cannot feel like an arcade video game overlay—it must feel like an organic diagnostic readout and field toolkit.",
          "I designed and coded the comprehensive HUD including the survivor's vital indicators (heart rate, stamina, infection progression, and immune strain). For the inventory and workbench, I established clean visual hierarchies with responsive visual cues, color-coded item categories, and instant tooltip breakdowns of chemical properties.",
          "Navigation was tuned for both gamepad and keyboard setups, featuring smooth transitions and context-sensitive interactions so players never feel hindered by complex menus when their character's health is plummeting.",
        ],
        image: "/projects/games/pharmacy-1.gif",
        imageCaption:
          "In-game UI & inventory overlay – Custom-designed inventory slots, item inspect cards, and medical crafting telemetry.",
        keyTakeaways: [
          "Diegetic and semi-diegetic HUD elements to maintain deep survival immersion.",
          "Clean visual contrast ensuring rapid reading of critical vitals during high-stress moments.",
          "Custom UI component architecture designed for rapid iteration and responsive scaling.",
        ],
      },
      {
        title: "My Core Focus #2: Dynamic Potion Statistics Engine",
        subtitle:
          "Mathematical modeling of multi-attribute pharmacology and organic side effects",
        content: [
          "The crowning technical feature I engineered was the dynamic Potion Statistics System. Rather than having a dozen hard-coded potion types, every brewed mixture is evaluated dynamically through a composite calculation algorithm based on the combined active properties of its ingredients.",
          "Each potion calculates five interconnected metrics: Base Potency (healing rate), Toxicity (organ strain), Metabolic Speed (duration vs burst effect), Stability (shelf life / risk of spoiling), and Cure Affinity (direct suppression of the pathogen).",
          "If a player rushes synthesis using unpurified biomass, the resulting potion might grant rapid symptom relief but trigger violent tremors or stamina depletion due to severe toxicity. This system transformed medical crafting from a routine chore into a compelling risk-versus-reward dilemma.",
        ],
        codeSnippet: `// Concept breakdown of the dynamic potion stat calculation
public struct PotionStats
{
    public float CureAffinity;   // Pathogen suppression [0..1]
    public float Toxicity;       // Physiological organ penalty [0..1]
    public float Potency;        // Immediate healing magnitude
    public float MetabolicRate;  // Absorption speed over time
}

public PotionStats CalculateBrew(List<IngredientData> ingredients)
{
    PotionStats composite = new PotionStats();
    foreach (var item in ingredients)
    {
        composite.CureAffinity += item.ActiveCompoundValue * item.Purity;
        composite.Toxicity += item.ImpurityValue * (1f - item.ProcessingQuality);
        composite.Potency += item.BaseHealingEffect;
    }
    // Cross-reaction penalties
    composite.Toxicity *= Mathf.Clamp(1.0f + (ingredients.Count * 0.15f), 1f, 2.5f);
    return composite;
}`,
        keyTakeaways: [
          "Dynamic algorithmic calculation rather than static predefined item IDs.",
          "Meaningful player agency: players can tailor medicines to cure quickly with high risk or stabilize slowly with safe dosage.",
          "Clean separation of data models and gameplay execution logic in C#.",
        ],
      },
      {
        title: "Gameplay Walkthrough & Recorded Demonstration",
        subtitle: "Dedicated video showcase of the survival mechanics and live UI",
        content: [
          "To see the UI responsiveness, crafting workbench in action, and real-time vital tracking, a recorded gameplay video has been prepared. This demonstration walks through resource harvesting, laboratory diagnosis, and potion administration during an active infection spike.",
        ],
        isVideoPlaceholder: false,
        image: "/projects/games/pharmacy-2.gif",
      },
      {
        title: "Audio Atmosphere & Engine Polish with FMOD",
        subtitle: "Spatial audio design that intensifies as infection escalates",
        content: [
          "Beyond graphics and systems, audio plays an immense role in Pharmacy. I integrated FMOD middleware to implement responsive audio parameters. When the survivor's infection surges past dangerous thresholds, ambient environmental sounds dampen and a muffled, claustrophobic heartbeat parameter takes over the audio mix.",
          "Footstep audio dynamically changes pitch and volume depending on terrain surface, and UI clicks incorporate tactile medical equipment samples (glass vials, metallic calipers, chemical bubbling).",
        ],
        image: "/projects/games/pharmacy-2.png",
        imageCaption:
          "Exploration sector – Environmental audio zones engineered in FMOD to deliver an oppressive atmospheric experience.",
        keyTakeaways: [
          "FMOD event emitters integrated with player state parameters.",
          "Subtle auditory cues signaling deteriorating health without needing to look at HUD numbers.",
        ],
      },
    ],
  },
  {
    id: "beergeon",
    slug: "beergeon",
    title: "Beergeon",
    subtitle: "Retro 3D first-person dungeon crawler with 2D billboard sprites",
    genre: "Dungeon Crawler / Rogue-lite",
    role: "Lead Developer & System Architect",
    platform: "PC (Windows / WebGL) · itch.io",
    year: "2024",
    primaryFocus: "Weighted Loot Drop System & ScriptableObject Inventory Architecture",
    teamSize: 4,
    description:
      "Beergeon is an homage to classic 90s dungeon crawlers with a modern twist, combining a 3D procedurally generated maze with pixel-art 2D billboard sprites. Players navigate treacherous multi-level labyrinths, engage in real-time tactical combat, level up character classes, and hunt for randomly generated loot with diverse affixes and rarity tiers.",
    myContribution: [
      "Engineered the comprehensive Loot Drop System with weighted probability tables, rarity tiers, and procedural stat affix generation.",
      "Architected the grid and slot inventory management system utilizing Unity ScriptableObjects for flexible, decoupled data handling.",
      "Developed the procedural maze and corridor generation algorithm with enemy and treasure chest placement rules.",
      "Programmed the first-person grid-style controller, combat hit detection, and character attribute calculations.",
      "Authored the Game Design Document (GDD), established Git branching standards, and maintained milestone tracking.",
    ],
    tools: ["Unity", "C#", "Aseprite", "ScriptableObjects", "Git / GitHub"],
    itchUrl: "https://j3ksa.itch.io/beergeon",
    githubUrl: "https://github.com/j3ksa/beergeon_v2",
    coverImage: "/projects/games/beergeon-cover.png",
    screenshots: [
      "/projects/games/beergeon-cover.png",
      "/projects/games/beergeon_0-13s.gif",
      "/projects/games/beergeon_13-28s.gif",
      "/projects/games/beergeon_28s-end.gif",
    ],
    highlights: [
      "Weighted probability loot tables with procedural rarity tiers and prefix/suffix stat affixes",
      "Modular inventory and equipment system driven by decoupled ScriptableObjects",
      "Procedural dungeon layout generator with dynamic room populating",
      "Billboard sprite rendering in a 3D environment for nostalgic retro aesthetics",
    ],
    devlog: [
      {
        title: "The Vision: Classic Dungeon Crawling Reimagined",
        subtitle: "Combining 2D billboard pixel art with dynamic 3D spatial dungeons",
        content: [
          "Beergeon was born out of a deep reverence for old-school dungeon crawlers like Eye of the Beholder and Daggerfall, blended with the addictive pacing of modern roguelites. The visual presentation pairs billboard 2D sprites (always facing the camera) with 3D dungeon architecture, evoking timeless retro charm.",
          "Procedural corridors, dim torchlight, and hidden alcoves ensure that no two dungeon excursions feel identical, demanding that players manage their supplies, ammunition, and gear carefully.",
        ],
        image: "/projects/games/beergeon_0-13s.gif",
        imageCaption:
          "Beergeon visual concept – 2D billboard sprites navigating dark 3D dungeon corridors.",
        keyTakeaways: [
          "Nostalgic 90s art direction with modern lighting and fluid 60fps controls.",
          "Procedural dungeons offering high replayability on every dungeon run.",
        ],
      },
      {
        title: "My Core Focus #1: Dynamic Loot Drops & Weighted Probability",
        subtitle:
          "Delivering the classic 'loot dopamine loop' through mathematical drop table design",
        content: [
          "The beating heart of any great dungeon crawler is the loot. My primary focus in Beergeon was engineering a deeply rewarding, mathematically robust Loot Drop System that provides exciting progression without breaking difficulty curves.",
          "I implemented weighted drop tables that evaluate enemy type, dungeon depth, and player luck attributes. Each dropped item rolls its rarity tier (Common, Uncommon, Rare, Epic, Legendary) alongside procedural affixes (prefixes like 'Vampiric' or suffixes like 'of the Colossus') that dynamically augment base item stats.",
          "Chests and boss enemies utilize tiered loot pools with guaranteed minimum rarities, ensuring that defeating a challenging dungeon guardian consistently delivers a memorable reward.",
        ],
        codeSnippet: `// Example of weighted rarity tier evaluation
public ItemRarity EvaluateRarity(float dungeonFloorModifier, float playerLuck)
{
    float roll = Random.Range(0f, 100f) - (playerLuck * 0.5f) - (dungeonFloorModifier * 2f);
    if (roll < 2f)  return ItemRarity.Legendary;
    if (roll < 10f) return ItemRarity.Epic;
    if (roll < 25f) return ItemRarity.Rare;
    if (roll < 55f) return ItemRarity.Uncommon;
    return ItemRarity.Common;
}`,
        keyTakeaways: [
          "Configurable weighted probability tables allowing rapid designer tuning without code changes.",
          "Procedural affix system generating hundreds of unique item variations from core templates.",
          "Balanced drop frequency ensuring continuous character progression.",
        ],
      },
      {
        title: "My Core Focus #2: ScriptableObject Inventory & Equipment",
        subtitle:
          "Decoupled, modular item data architecture with live character stat application",
        content: [
          "To accompany the deep loot system, I built a modular inventory architecture driven by Unity ScriptableObjects. Each item template—whether a broadsword, heavy chainmail, or health flask—inherits from an abstract ItemDefinition class.",
          "Equipment slots (Main Hand, Off Hand, Armor, Relic) immediately subscribe to character stat events. Equipping a legendary blade instantly recalculates the player's attack power, critical strike chance, and swing speed, with UI stat cards updating reactively in real time.",
          "The inventory supports intuitive grid organization, item stacking for consumables, quick-slot binding, and full tooltip previews displaying comparative stat differentials (green for upgrade, red for downgrade).",
        ],
        image: "/projects/games/beergeon_13-28s.gif",
        imageCaption:
          "Inventory & equipment interface – Slot-based gear system with dynamic stat bonuses.",
        keyTakeaways: [
          "Zero hard-coded item parameters: 100% data-driven architecture using ScriptableObjects.",
          "Reactive event-based stat recalculation preventing synchronization bugs between inventory and combat.",
          "Intuitive UI with visual comparison helpers for rapid equipment decisions.",
        ],
      },
      {
        title: "Procedural Dungeon Generation & Combat Feedback",
        subtitle: "Labyrinthine corridor generation and responsive first-person combat",
        content: [
          "In addition to loot and gear, I developed the procedural generation algorithm that carves out rooms, connecting corridors, and secret doorways. The algorithm places spawn markers for enemies, treasure chests, and the exit ladder based on distance from the player's initial entry point.",
          "Combat mechanics feature raycast-based melee weapon swings with dynamic camera recoil, damage numbers, and impact sound feedback, creating punchy, tactile dungeon encounters.",
        ],
        image: "/projects/games/beergeon_28s-end.gif",
        imageCaption:
          "Dungeon procedural exploration in action.",
        keyTakeaways: [
          "Guaranteed pathfinding reachability from spawn to exit on every generated floor.",
          "Clean modular prefabs enabling endless visual variation across dungeon biomes.",
        ],
      },
    ],
  },
  {
    id: "multiplayer-defense",
    slug: "multiplayer-defense",
    title: "Multiplayer Tower Defense",
    subtitle: "Networked hybrid strategy & first-person shooter in Unity 6",
    genre: "Co-op / Multiplayer Shooter & Tower Defense",
    role: "Lead Networking & UI Systems Developer",
    platform: "PC (Windows Standalone) · itch.io",
    year: "2025",
    primaryFocus: "Synchronized Matchmaking & Pre-Match Lobby Architecture (Unity 6 NGO)",
    teamSize: 4,
    description:
      "A fast-paced multiplayer hybrid combining tower defense wave survival with first-person shooter combat, built in the cutting-edge Unity 6 engine. Players team up to hold high-ground watchtowers against relentless enemy onslaughts in cooperative PvE, or face off against each other in asymmetrical PvP attack-and-defend battles.",
    myContribution: [
      "Architected the synchronized Pre-Match Lobby System and Session Manager handling player readiness, loadout locks, and match countdowns.",
      "Engineered the full networking stack using Unity Netcode for GameObjects (NGO) and Unity Transport (UTP).",
      "Integrated Unity Relay & Authentication to provide seamless WAN cross-network matchmaking with 6-character room codes.",
      "Implemented local UDP broadcast LAN Discovery for automatic, one-click match detection without external master servers.",
      "Built the ConnectionHUD interface, match browser, and host-authoritative scene transition coordinator.",
    ],
    tools: [
      "Unity 6",
      "C#",
      "Netcode for GameObjects",
      "Unity Relay",
      "UDP LAN Discovery",
      "Git",
    ],
    itchUrl: "https://j3ksa.itch.io/multiplayer-defense",
    githubUrl: "https://github.com/j3ksa/multiplayer-game",
    coverImage: "/projects/games/multiplayer-cover.png",
    screenshots: [
      "/projects/games/multi.gif",
      "/projects/games/multiplayer-cover.png",
      "/projects/games/multiplayer-1.png",
    ],
    highlights: [
      "Synchronized Pre-Match Lobby with real-time ready checks and host-authoritative launch",
      "Zero-configuration WAN crossplay using Unity Relay and 6-character Join Codes",
      "Automatic local LAN beacon discovery utilizing lightweight UDP broadcast packets",
      "Fully compliant with Unity 6 Netcode for GameObjects (NGO 2.x) standards",
    ],
    devlog: [
      {
        title: "The Vision: Cooperative Tower Defense Meets FPS Combat",
        subtitle:
          "High-ground defense against massive hordes with synchronized multiplayer teamwork",
        content: [
          "Multiplayer Tower Defense was designed to merge the strategic overview of tower defense games with the visceral excitement of a first-person shooter. Positioned atop elevated fortress towers, players must coordinate firing lanes, reload cycles, and resource spending to repel invading swarms.",
          "Because victory relies heavily on team synergy, having a smooth, reliable multiplayer onboarding and lobby experience was critical to the game's core appeal.",
        ],
        image: "/projects/games/multiplayer-cover.png",
        imageCaption:
          "Multiplayer Tower Defense key visual – Defending the watchtower in real-time co-op.",
        keyTakeaways: [
          "Hybrid gameplay requiring both sharp aim and cooperative tactical planning.",
          "Built in Unity 6 to leverage the latest performance and networking optimizations.",
        ],
      },
      {
        title: "My Core Focus: Synchronized Pre-Match Lobby & Session Architecture",
        subtitle:
          "Robust player roster replication, state synchronization, and ready checks",
        content: [
          "My main ownership in this project was architecting and implementing the entire Pre-Match Lobby System (`LobbyUI.cs`) and Session Manager (`SessionManager.cs`). In multiplayer games, the pre-game lobby is the foundation of user trust—if joining, readying up, or launching feels sluggish or desynced, player immersion is broken before gameplay even starts.",
          "I implemented network-serializable player data structures (`PlayerData.cs`) that replicate player names, connection IDs, assigned tower slots, and selected loadouts across all clients in real time.",
          "A synchronized 'Ready Check' system ensures that every participant has finalized their setup before the host can initiate the match countdown. Once triggered, the host-authoritative session manager coordinates a simultaneous scene transition across all connected instances without leaving any client behind.",
        ],
        codeSnippet: `// Example of synchronized Ready State check in LobbyUI
[Rpc(SendTo.Server)]
public void SetPlayerReadyRpc(ulong clientId, bool isReady)
{
    if (!NetworkManager.Singleton.IsServer) return;
    
    SessionManager.Instance.UpdatePlayerReadyStatus(clientId, isReady);
    
    // Check if all connected clients are ready to launch
    if (SessionManager.Instance.AllPlayersReady() && SessionManager.Instance.PlayerCount >= 2)
    {
        StartMatchCountdownClientRpc();
    }
}`,
        keyTakeaways: [
          "Host-authoritative state validation preventing client desynchronization or premature match starts.",
          "Reactive UI updating instantly whenever a player toggles ready state or switches character role.",
          "Graceful disconnection handling: if a client drops during the lobby, the roster updates seamlessly without crashing the session.",
        ],
      },
      {
        title: "Cross-Network Unity Relay & Local UDP Discovery",
        subtitle: "Effortless matchmaking both over the internet and on local Wi-Fi",
        content: [
          "To make joining matches as frictionless as possible for testers and players, I integrated two complementary connection pipelines:",
          "1. Unity Relay: For internet (WAN) play, the host creates a room that generates a clean 6-character join code (e.g., 'ABC123'). Clients simply paste this code to connect through Unity's secure relay servers—bypassing the need for complex router port forwarding or public IP exposure.",
          "2. Local UDP Broadcast Discovery: For players on the same network (LAN / university lab / dorm), I implemented `LANDiscoveryManager.cs`. It broadcasts small UDP packets across the subnet, allowing clients to open the server browser and immediately see all available local matches with one click.",
        ],
        image: "/projects/games/multiplayer-1.png",
        keyTakeaways: [
          "Zero-friction cross-network play: Join codes eliminate port forwarding hurdles.",
          "Automatic LAN discovery delivers instant plug-and-play local multiplayer.",
          "Built on Unity Transport (UTP) for low-latency UDP packet delivery.",
        ],
      },
      {
        title: "Networking Robustness & Match Coordination",
        subtitle: "Ensuring stable game states across unpredictable network conditions",
        content: [
          "The session manager maintains strict authority over critical game milestones: round countdowns, wave trigger events, and victory conditions. By keeping game logic authoritative on the server/host and predicting player actions locally, gameplay remains responsive even under fluctuating ping times.",
        ],
        image: "/projects/games/multi.gif",
        keyTakeaways: [
          "Server-authoritative game loops preventing cheating and state divergence.",
          "Modular architecture separating network transport from gameplay scripting.",
        ],
      },
    ],
  },
];
