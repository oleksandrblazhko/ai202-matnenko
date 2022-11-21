// змінюємо значення очікуваного результату TC1.4 на непередбачуване значення -4, щоб отримати негативний результат тесту */

async function test() {
    await db.init();

    console.log('TC1.1: ');
    if (await searchCompose(1, "Гімн України") == 1) console.log('Passed!')
    else console.log('Failed...');

    console.log('TC1.2: ');
    if (await searchCompose(3, "Гімн України") == -1) console.log('Passed!')
    else console.log('Failed...');

    console.log('TC1.3: ');
    if (await searchCompose(1, "Duis aute ... qui blanditii praesentium voluptatum deleniti atque...") == -2) console.log('Passed!');
    else console.log('Failed...');

    console.log('TC1.4: ');
    if (await searchCompose(3, "Duis aute ... qui blanditii praesentium voluptatum deleniti atque...") == -4) console.log('Passed!');
    else console.log('Failed...');
}

console.log('Test:');
test();
