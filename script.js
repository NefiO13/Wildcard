const ageLabels = ["Ages 0-5 (Infants)", "Ages 5-10 (Children)", "Ages 10+ (Teens & Adults)"]



const steps = document.querySelectorAll('.step');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentStep = 0;



function startCPRGuide(ageGroupIndex) {
    currentAgeGroup = ageGroupIndex;
    currentStepIndex = 0;
    document.getElementById('ageRangeLabel').textContent = ageLabels[ageGroupIndex];
    document.getElementById('instructionBox').classList.remove('d-none');
    document.getElementById('ageSelection').classList.add('d-none');
    updateStep();
}



function showStep(index) {
    steps.forEach(step => step.style.display = 'none');
    steps[index].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    currentStep = Math.max(0, currentStep - 1);
    showStep(currentStep);
});

nextBtn.addEventListener('click', () => {
    currentStep = Math.min(steps.length - 1, currentStep + 1);
    showStep(currentStep);
});

showStep(currentStep);


















function restartCPRGuide() {
    document.getElementById('instructionBox').classList.add('d-none');
    document.getElementById('ageSelection').classList.remove('d-none');
}