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

//changes pictures as the next or previous button is clicked.\\
const images = [
    ["imgs/infant1.jpg", "imgs/infant2.jpg", "imgs/infant3.jpg", "infant4.jpg", "infant5.jpg"],
    ["child1.jpg", "child2.jpg", "child3.jpg", "child4.jpg", "child5.jpg", "child6.jpg", "child7.jpg"],
    ["adult1.jpg", "adult2.jpg", "adult3.jpg", "adult4.jpg", "adult5.jpg"]
];

function updateImages(group) {
    let step = currentStepIndex[group];
    document.getElementById("leftImage").src = images[group][step % images[group].length];
    document.getElementById("rightImage").src = images[group][step % images[group].length];
}


//This allows each step to be displayed and called one at a time. 

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
    updateImages(group);
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
    document.getElementById("leftImage").src = "imgs/Red-Cross-Emblem.png";
    document.getElementById("rightImage").src = "imgs/blue-cross-blue-shield-logo-vector.webp";
}