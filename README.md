# Cyclotron Particle Simulation

## Overview

This repository contains a simulation algorithm to visualize the movement of particles (electron, proton, and neutron) inside a cyclotron. The simulation captures the unique patterns of each particle as they move in a matrix representation of the cyclotron.

## Installation

1. Clone the repository:

```
git clone git@github.com:GuilhermeSCampos/lexart-algorithm-test.git

cd lexart-algorithm-test
```

## Usage

To use simulation:

1. Import the cyclotron function from the main module.
2. Call the function with the desired particle and matrix size.

Example:

```javascript
const { cyclotron } = require('./path_to_module');

const matrixSize = 4; // 4x4 matrix

cyclotron('e', matrixSize); // Simulates electron movement in the cyclotron

```

Alternatively, from the root directory, run:

```bash
 node cyclotron-algorithm.js
```
This will demonstrate some examples of particle accelerations.

## Particle Movement Patterns
### 1. Electron (e):
The electron traces the top borders and the right side of the matrix.
### 2. Proton (p):
The proton covers the top row, the entire left column, and, at the bottom, it moves up to the penultimate cell. It then traces the right side, leaving out the bottommost cell.
### 3.Neutron (n):
The neutron only moves across the top row of the matrix.
