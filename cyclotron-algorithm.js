const PARTICLE = {
  EMPTY: '1',
  ELECTRON: 'e',
  PROTON: 'p',
  NEUTRON: 'n',
};

function createCyclotron(size) {
  return Array(size).fill(null).map(() => Array(size).fill(PARTICLE.EMPTY));
}

function printCyclotron(cyclotron) {
  for (const row of cyclotron) {
    console.log(row.join(" "));
  }
}

function accelerateElectron(matrix) {
  const size = matrix.length;
  for (let i = 0; i < size; i++) {
    if (i === 0) {
      matrix[i].fill(PARTICLE.ELECTRON);
    } else {
      matrix[i][size - 1] = PARTICLE.ELECTRON;
    }
  }
}

function accelerateProton(matrix) {
  const size = matrix.length;
  
  // Top border
  matrix[0].fill(PARTICLE.PROTON);
  
  for (let i = 1; i < size; i++) {
    matrix[i][0] = PARTICLE.PROTON; // Left border
  }
  
  // Bottom row until penultimate
  for (let i = 1; i < size - 1; i++) {
    matrix[size - 1][i] = PARTICLE.PROTON;
  }

  // Right column until penultimate
  for (let i = 1; i < size - 1; i++) {
    matrix[i][size - 1] = PARTICLE.PROTON;
  }

  // Proton moves up at penultimate bottom position and continues right
  matrix[size - 2][size - 1] = PARTICLE.PROTON;
  matrix[size - 2][size - 2] = PARTICLE.PROTON;
}

function accelerateNeutron(matrix) {
  matrix[0].fill(PARTICLE.NEUTRON);
}

function cyclotron(particle, size) {
  const matrix = createCyclotron(size);
  
  switch(particle) {
    case PARTICLE.ELECTRON:
      accelerateElectron(matrix);
      break;
    case PARTICLE.PROTON:
      accelerateProton(matrix);
      break;
    case PARTICLE.NEUTRON:
      accelerateNeutron(matrix);
      break;
    default:
      break;
  }
  
  printCyclotron(matrix);
}

// Test
console.log("Accelerating an electron:");
cyclotron(PARTICLE.ELECTRON, 4);

console.log("\nAccelerating a proton:");
cyclotron(PARTICLE.PROTON, 4);

console.log("\nAccelerating a neutron:");
cyclotron(PARTICLE.NEUTRON, 4);

console.log("\nAccelerating a proton (6x6):");
cyclotron(PARTICLE.PROTON, 6);

console.log("\nAccelerating a electron (6x6):");
cyclotron(PARTICLE.ELECTRON, 6);
