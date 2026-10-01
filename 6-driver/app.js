let hasLicence = true;
let age = 18;
let isDrunk = false;

function canDrive(hasLicence, age, isDrunk){
    let possibilityToDrive = hasLicence && age >= 18 && !isDrunk;
    console.log(possibilityToDrive)
    return possibilityToDrive;
}

canDrive(hasLicence, age, isDrunk)