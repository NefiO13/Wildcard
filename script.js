const infantInstructions = [
    "Check for responsiveness (tap and shout).",
    "Call emergency services or ask someone to call.",
    "Give 5 rescue back blows with the palm of your hand.",
    "If unresponsive, perform 30 chest compressions using two fingers.",
    "Alternate 5 back blows and 30 compressions until help arrives."
];

const childInstructions = [
    "Ensure the scene is safe.",
    "Check for responsiveness and breathing.",
    "Call 911 or have someone else call.",
    "Give 30 chest compressions with two hands interlocking.",
    "Give 2 rescue breaths.",
    "Give 5 cycles of 30 compressions and 2 breaths within 2 minutes",
    "Repeat compressions and breaths until help arrives."
];

const adultInstructions = [
    "Check the scene and the person.",
    "Call 911 immediately.",
    "Begin chest compressions (30 compressions with both hands).",
    "Give 2 rescue breaths, ensure chest rises.",
    "Continue CPR (30:2 ratio) until EMS arrives."
];

const cprInstructions = [infantInstructions, childInstructions, adultInstructions];

let currentStepIndex = [0, 0, 0];



const steps = document.querySelectorAll('.step');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const instructionBox0 = document.getElementById('Ages 0-5 (Infants)')
const instructionBox1 = document.getElementById('Ages 5-10 (Children)')
const instructionBox2 = document.getElementById('Ages 10+ (Teens &Adults)')
let currentStep = 0;

function startCPRGuide(ageGroupIndex) {
    document.getElementById('ageSelection').classList.add('d-none');
    for (let i = 0; i < 3; i++) {
        document.getElementById(`instructionBox${i}`).classList.add('d-none')
        document.getElementById(`stepDisplay${i}`).textContent = '';
        currentStepIndex[i] = 0
        document.getElementById('backBtn').classList.add('d-none')
    }
    document.getElementById(`instructionBox${ageGroupIndex}`).classList.remove('d-none')
    updateStep(ageGroupIndex);
}

function updateStep(group) {
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')
    const backBtn = document.getElementById('backBtn')
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