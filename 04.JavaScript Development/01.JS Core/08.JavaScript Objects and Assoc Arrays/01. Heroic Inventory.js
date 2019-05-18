function heroInventory(input) {

    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currentArguments = input[i].split(" / ");

        let heroName = currentArguments[0];
        let heroLevel = +currentArguments[1];
        let heroItems = [];
        if (currentArguments.length > 2) {

            heroItems = currentArguments[2].split(", ");
        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }
        heroData.push(hero);

    }

    console.log(JSON.stringify(heroData));
}