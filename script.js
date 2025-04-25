const infantInstructions = [
    "Check for responsiveness (tap and shout).",
    "Call emergency services or ask someone to call.",
    "Give 5 rescue back blows with the palm of your hand.",
    "If unresponsive, perform 30 chest compressions using two fingers below the nipple line.",
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



cprInstructions.forEach((group, groupIndex) => {
    console.log(`CPR Steps for Group ${groupIndex}:`);
    group.forEach((step, stepIndex) => {
        console.log(`${stepIndex + 1}. ${step}`);
    });
});

function startCPRGuide(ageGroupIndex) {
    document.getElementById('ageSelection').classList.add('d-none');
    for (let i = 0; i < 3; i++) {
        document.getElementById(`instructionBox${i}`).classList.add('d-none');
        document.getElementById(`stepDisplay${i}`).textContent = '';
        currentStepIndex[i] = 0;
        document.getElementById(`backButton${i}`).classList.add('d-none');
    }
    document.getElementById(`instructionBox${ageGroupIndex}`).classList.remove('d-none');
    updateStep(ageGroupIndex);
}

function updateStep(group) {
    let stepText = cprInstructions[group][currentStepIndex[group]] || '';
    document.getElementById(`stepDisplay${group}`).textContent = stepText;

    const nextButton = document.querySelector(`#instructionBox${group} button[onclick="nextStep(${group})"]`);
    const prevButton = document.querySelector(`#instructionBox${group} button[onclick="prevStep(${group})"]`);
    const backButton = document.getElementById(`backButton${group}`);

    nextButton.classList.remove('d-none');
    prevButton.classList.remove('d-none');
    backButton.classList.add('d-none');

    if (currentStepIndex[group] === 0) {
        prevButton.classList.add('d-none');
    }
    if (currentStepIndex[group] === cprInstructions[group].length - 1) {
        nextButton.classList.add('d-none');
        backButton.classList.remove('d-none');
    }
}

function nextStep(group) {
    if (currentStepIndex[group] < cprInstructions[group].length - 1) {
        currentStepIndex[group]++;
        updateStep(group);
    }
}

function prevStep(group) {
    if (currentStepIndex[group] > 0) {
        currentStepIndex[group]--;
        updateStep(group);
    }
}

function restartCPRGuide() {
    for (let i = 0; i < 3; i++) {
        document.getElementById(`instructionBox${i}`).classList.add('d-none');
        currentStepIndex[i] = 0;
    }
    document.getElementById('ageSelection').classList.remove('d-none');
}