// MAKE SURE YOU ACTUALLY WRITE THE RIGHT NAMES FOR EACH FILE
// REFER BACK HERE IF ERRORS WITH THEM

const sprites = {
    background: "/src/assets/png/background/background.png",
    cauldron1: "/src/assets/png/cauldron/cauldron_1.png",
    cauldron2: "/src/assets/png/cauldron/cauldron_2.png",
    cauldron3: "/src/assets/png/cauldron/cauldron_3.png",

    teacher: {
        base: "/src/assets/png/teacher/teacher.png",
        drink: "/src/assets/png/teacher/teacherdrink.png",
        vigor: "/src/assets/png/teacher/teachervigor.png",
        cry: "/src/assets/png/teacher/teachercry.png",
        throw: "/src/assets/png/teacher/teacherthrow.png",
        surprise: "/src/assets/png/teacher/teachersuprise.png",
        huh: "/src/assets/png/teacher/teacherhuh.png"
    },

    shelves: {
        Buff: "/src/assets/png/shelves/BuffShelf.png",
        Heal: "/src/assets/png/shelves/HealShelf.png",
        Attack: "/src/assets/png/shelves/AttackShelf.png"
    },

    ui: {
        dialog: "/src/assets/png/ui/dialog-box.png",
        button: "/src/assets/png/ui/button.png",
        icon_next: "/src/assets/png/ui/icons/icon_next.png",
        icon_prev: "/src/assets/png/ui/icons/icon_prev.png",
        icon_done: "/src/assets/png/ui/icons/icon_done.png",
        icon_retry: "/src/assets/png/ui/icons/icon_retry.png"
    },

    ingredients: {
        // Buff stuff
        "unicorn-horn": "/src/assets/png/ingredients/buff/unicorn-horn.png",
        "ragebaiter-jam": "/src/assets/png/ingredients/buff/ragebaiter-jam.png",
        "writers-block": "/src/assets/png/ingredients/buff/writers-block.png",
        "inspirational-quote": "/src/assets/png/ingredients/buff/inspirational-quote.png",
        "pixie-dust": "/src/assets/png/ingredients/buff/pixie-dust.png",
        "gamblers-vigor": "/src/assets/png/ingredients/buff/gamblers-vigor.png",

        // Heal stuff
        "magical-wand": "/src/assets/png/ingredients/heal/magical-wand.png",
        "toads-tongue": "/src/assets/png/ingredients/heal/toads-tongue.png",
        "grandmas-lasagna": "/src/assets/png/ingredients/heal/grandmas-lasagna.png",
        "saints-drink": "/src/assets/png/ingredients/heal/saints-drink.png",
        "angels-feather": "/src/assets/png/ingredients/heal/angels-feather.png",
        "time-watch": "/src/assets/png/ingredients/heal/time-watch.png",

        // Attack stuff
        "dragons-tooth": "/src/assets/png/ingredients/attack/dragons-tooth.png",
        "cursed-orb": "/src/assets/png/ingredients/attack/cursed-orb.png",
        "fahhhh-jar": "/src/assets/png/ingredients/attack/fahhhh-jar.png",
        "c4": "/src/assets/png/ingredients/attack/c4.png",
        "crystalized-thunder": "/src/assets/png/ingredients/attack/crystalized-thunder.png",
        "angry-moss": "/src/assets/png/ingredients/attack/angry-moss.png"
    }
} as const;

export default sprites;