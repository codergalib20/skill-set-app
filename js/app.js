const addSkills = document.getElementById('add-skills');
console.log(addSkills)
const skillNameFiled = document.querySelector('.name-input');
const skillSizeFiled = document.querySelector('.size-input');
const addSkillBtn = document.querySelector('.add-btn');


addSkillBtn.addEventListener('click', function () {
    skillSizeFiled.placeholder = 'Skills Percentage'
    skillNameFiled.placeholder = 'Skills Name'
    const skillValue = parseInt(skillSizeFiled.value);
    const skillNameValu = skillNameFiled.value;
    
    if (skillNameValu.length >= 6) {
        if (33 <= skillValue && skillValue <= 100) {
            
            // Create Skill Item 
            const skillItem = document.createElement('div');
            skillItem.classList.add('skill-item')
            addSkills.appendChild(skillItem);
        
            // Create Item Progress 
            const skillProgress = document.createElement('div');
            skillProgress.classList.add('skill-progress')
            skillItem.appendChild(skillProgress)
        
            // Skills Info 
            const skillName = document.createElement('strong');
            skillProgress.appendChild(skillName);
            skillName.innerText = skillNameFiled.value;
        
            let skillSize = document.createElement('strong');
            skillProgress.appendChild(skillSize);
        
            skillSize.innerText = `${skillValue}$`
            skillProgress.style.width = `${skillValue}%`
            
            }
    } else {
        skillSizeFiled.placeholder = 'Give me Valu Max 100 Min 33'
        skillNameFiled.placeholder = 'Give Skill Name Min 6 Letter';
        skillSizeFiled.value = '';
        skillNameFiled.value = '';

    }
    
})

