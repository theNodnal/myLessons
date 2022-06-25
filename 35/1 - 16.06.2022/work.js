'use strict';


const personalPlanSergiy = {
    name: "Sergiy",
    age: "36",
    skills: {
        languages: ['ua', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeLands: function (plan) {
        const { age } = plan;
        const { languages } = plan.skills;
        let str = `мені ${age} я володію мовами програмування`;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()}`;
        });
        return str;
    }
};
personalPlanSergiy.showAgeLands(personalPlanSergiy);

function showExperience(plan) {
    return plan.skills.exp;    // TODO: деструктуризація погуглити 
    
}
showExperience(personalPlanSergiy);

function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `мова ${key} вивчена  на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanSergiy);

console.log(showProgrammingLangs);