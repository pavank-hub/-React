// import { useCallback } from "react";

import { useEffect } from "react";

// useCallback hook flow chart 
// when length of the range changes

// useEffect runs only after render finishe


// User change length
//       ↓
// setLength()
//       ↓
// Component re-render
//       ↓
// useCallback runs
// (check dependencies)
//       ↓
// New generatePassword reference
//       ↓
// Render finish
//       ↓
// useEffect dependency compare
//       ↓
// useEffect run
//       ↓
// generatePassword()
//       ↓
// setPassword()
//       ↓
// UI update