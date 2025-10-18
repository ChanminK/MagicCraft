//Should work now... PLEASE

const sprites = {
  background: "/assets/png/background/background.png",

  cauldron: {
    idle: "/assets/png/cauldron/cauldron_1.png",
    mid:  "/assets/png/cauldron/cauldron_2.png",
    big:  "/assets/png/cauldron/cauldron_3.png",
  },

  shelf: "/assets/png/shelves/shelf_2x3.png",

  teacher: {
    base: "/assets/png/teacher/teacher.png",
    drink: "/assets/png/teacher/teacherdrink.png",
    vigor: "/assets/png/teacher/teachervigor.png",
    cry: "/assets/png/teacher/teachercry.png",
    throw: "/assets/png/teacher/teacherthrow.png",
    suprise: "/assets/png/teacher/teachersuprise.png",
    huh: "/assets/png/teacher/teacherhuh.png",
  },

  bubbles: "/assets/png/fx/bubbles.png",

  ingredients: {
    // Buff stuff
    "unicorn-horn": "/assets/png/ingredients/buff/unicorn-horn.png",
    "ragebaiter-jam": "/assets/png/ingredients/buff/ragebaiter-jam.png",
    "writers-block": "/assets/png/ingredients/buff/writers-block.png",
    "inspirational-quote": "/assets/png/ingredients/buff/inspirational-quote.png",
    "pixie-dust": "/assets/png/ingredients/buff/pixie-dust.png",
    "gamblers-vigor": "/assets/png/ingredients/buff/gamblers-vigor.png",

    // Heal stuff
    "magical-wand": "/assets/png/ingredients/heal/magical-wand.png",
    "toads-tongue": "/assets/png/ingredients/heal/toads-tongue.png",
    "grandmas-lasagna": "/assets/png/ingredients/heal/grandmas-lasagna.png",
    "saints-drink": "/assets/png/ingredients/heal/saints-drink.png",
    "angels-feather": "/assets/png/ingredients/heal/angels-feather.png",
    "time-watch": "/assets/png/ingredients/heal/time-watch.png",

    // Attack stuff
    "dragons-tooth": "/assets/png/ingredients/attack/dragons-tooth.png",
    "cursed-orb": "/assets/png/ingredients/attack/cursed-orb.png",
    "fahhhh-jar": "/assets/png/ingredients/attack/fahhhh-jar.png",
    "c4": "/assets/png/ingredients/attack/c4.png",
    "crystalized-thunder": "/assets/png/ingredients/attack/crystalized-thunder.png",
    "angry-moss": "/assets/png/ingredients/attack/angry-moss.png",
  },
} as const;

export default sprites;
