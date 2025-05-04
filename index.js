const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const digits = {
    '0': [
        ' *** ',
        '*   *',
        '*   *',
        '*   *',
        ' *** '
    ],
    '1': [
        '  *  ',
        ' **  ',
        '  *  ',
        '  *  ',
        ' *** '
    ],
    '2': [
        ' *** ',
        '*   *',
        '   * ',
        '  *  ',
        '*****'
    ],
    '3': [
        ' *** ',
        '    *',
        ' *** ',
        '    *',
        ' *** '
    ],
    '4': [
        '*   *',
        '*   *',
        '*****',
        '    *',
        '    *'
    ],
    '5': [
        '*****',
        '*    ',
        '**** ',
        '    *',
        '**** '
    ],
    '6': [
        ' *** ',
        '*    ',
        '**** ',
        '*   *',
        ' *** '
    ],
    '7': [
        '*****',
        '    *',
        '   * ',
        '  *  ',
        ' *   '
    ],
    '8': [
        ' *** ',
        '*   *',
        ' *** ',
        '*   *',
        ' *** '
    ],
    '9': [
        ' *** ',
        '*   *',
        ' ****',
        '    *',
        ' *** '
    ]
};

function getWeekDay(day, month, year) {
    const date = new Date(year, month - 1, day);
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function calculateAge(day, month, year) {
    const today = new Date();
    let age = today.getFullYear() - year;
    const m = today.getMonth() + 1 - month;
    const d = today.getDate() - day;
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }
    return age;
}

function printDateAsStars(dateStr) {
    let lines = ['', '', '', '', ''];
    for (let char of dateStr) {
        if (digits[char]) {
            for (let i = 0; i < 5; i++) {
                lines[i] += digits[char][i] + '  ';
            }
        } else {
            for (let i = 0; i < 5; i++) {
                lines[i] += '     ';
            }
        }
    }
    console.log(lines.join('\n'));
}

readline.question('Введите день рождения (дд): ', (day) => {
    readline.question('Введите месяц рождения (мм): ', (month) => {
        readline.question('Введите год рождения (гггг): ', (year) => {
            const d = parseInt(day);
            const m = parseInt(month);
            const y = parseInt(year);

            console.log(`\nДень недели: ${getWeekDay(d, m, y)}`);
            console.log(`Год ${y} ${isLeapYear(y) ? 'високосный' : 'не високосный'}`);
            console.log(`Возраст: ${calculateAge(d, m, y)} лет`);
            console.log('\nДата рождения на табло:\n');
            printDateAsStars(day.padStart(2, '0') + month.padStart(2, '0') + year);
            readline.close();
        });
    });
});
