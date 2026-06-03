/* ============================================================
   sphere-grid.js
   Pure JS honeycomb sphere grid — no Three.js
   CSS glass spheres, hover expand, neighbor push,
   in-sphere text label. Empty center console.
   ============================================================ */

(function () {

  /* ----------------------------------------------------------
     1. SOLUTION DATA
  ---------------------------------------------------------- */
  const SOLUTIONS = [
    { name: 'Online Assessment System',         tag: 'Assessment'       },
    { name: 'Proctoring Solution',              tag: 'Integrity'        },
    { name: 'Onscreen Marking Solution',        tag: 'Marking'          },
    { name: 'ISO Implementation & Consultancy', tag: 'Compliance'       },
    { name: 'CAD Software',                     tag: 'Engineering'      },
    { name: 'eContent',                         tag: 'Digital Learning' },
    { name: 'Digital Inclusion & Accessibility',tag: 'Accessibility'    },
    { name: 'RFID for Library',                 tag: 'Library Tech'     },
    { name: 'Digital Repository',               tag: 'Knowledge Mgmt'   },
    { name: 'Library Management System',        tag: 'Library Tech'     }
  ]

  /* ----------------------------------------------------------
     2. GRID & VIEWPORT METRICS
     Computes columns and rows dynamically to fill edge-to-edge
  ---------------------------------------------------------- */
  const isMobile  = window.innerWidth < 768
  const isSmall   = window.innerWidth < 480

  const SPHERE_SIZE = isSmall ? 42 : isMobile ? 56 : 80
  const SPHERE_GAP  = isSmall ? 4  : isMobile ? 6  : 8

  const stepX = SPHERE_SIZE + SPHERE_GAP
  const stepY = SPHERE_SIZE * 0.866

  const COLS = Math.ceil(window.innerWidth / stepX) + 2
  const ROWS = Math.ceil(window.innerHeight / stepY) + 2

  /* Center Console Exclusion Zone (in pixels) */
  const exclWidth = isMobile ? window.innerWidth * 0.8 : 580
  const exclHeight = isMobile ? 220 : 280

  /* ----------------------------------------------------------
     3. BUILD GRID WITH HOLLOW CENTER
  ---------------------------------------------------------- */
  const grid = document.getElementById('sphereGrid')
  if (!grid) return

  const allSpheres = []   /* flat list of all created sphere elements */
  let   solIndex   = 0

  for (let r = 0; r < ROWS; r++) {
    const row = document.createElement('div')
    const isOdd = r % 2 === 1
    row.className = 'sphere-row' + (isOdd ? ' sphere-row--odd' : '')

    let createdSpheresInRow = 0

    for (let c = 0; c < COLS; c++) {
      /* Calculate coordinate relative to screen center (0,0) */
      const offsetX = (c - (COLS - 1) / 2) * stepX + (isOdd ? stepX / 2 : 0)
      const offsetY = (r - (ROWS - 1) / 2) * stepY

      /* Exclude cells in the center console zone */
      if (Math.abs(offsetX) < exclWidth / 2 && Math.abs(offsetY) < exclHeight / 2) {
        continue
      }

      const sol      = SOLUTIONS[solIndex % SOLUTIONS.length]
      const isOrange = (r + c) % 2 === 0

      const sphere = document.createElement('div')
      sphere.className = `sphere sphere--${isOrange ? 'orange' : 'blue'}`

      /* Custom CSS property for breathe animation staggering */
      sphere.style.setProperty('--i', solIndex)

      /* Keep dataset keys for neighbor queries */
      sphere.dataset.row  = r
      sphere.dataset.col  = c

      /* Build inner centered text tag & name */
      const textContainer = document.createElement('div')
      textContainer.className = 'sphere-text'

      const tagSpan = document.createElement('span')
      tagSpan.className = 'sphere-text-tag'
      tagSpan.textContent = sol.tag

      const nameSpan = document.createElement('span')
      nameSpan.className = 'sphere-text-name'
      nameSpan.textContent = sol.name

      textContainer.appendChild(tagSpan)
      textContainer.appendChild(nameSpan)
      sphere.appendChild(textContainer)

      row.appendChild(sphere)
      allSpheres.push(sphere)
      solIndex++
      createdSpheresInRow++
    }

    /* Only append row if it has at least one sphere */
    if (createdSpheresInRow > 0) {
      grid.appendChild(row)
    }
  }

  /* ----------------------------------------------------------
     4. NEIGHBOR PUSH LOGIC
  ---------------------------------------------------------- */
  function getNeighbors (rowIdx, colIdx) {
    const isOdd = rowIdx % 2 === 1
    const candidates = [
      /* Same row */
      [rowIdx,     colIdx - 1],
      [rowIdx,     colIdx + 1],
      /* Row above */
      [rowIdx - 1, isOdd ? colIdx     : colIdx - 1],
      [rowIdx - 1, isOdd ? colIdx + 1 : colIdx    ],
      /* Row below */
      [rowIdx + 1, isOdd ? colIdx     : colIdx - 1],
      [rowIdx + 1, isOdd ? colIdx + 1 : colIdx    ],
    ]

    return candidates
      .map(([r, c]) =>
        allSpheres.find(
          s => parseInt(s.dataset.row) === r &&
               parseInt(s.dataset.col) === c
        )
      )
      .filter(Boolean)
  }

  let pushedSpheres = []

  function pushNeighbors (rowIdx, colIdx) {
    pushedSpheres = getNeighbors(rowIdx, colIdx)
    pushedSpheres.forEach(s => s.classList.add('sphere--pushed'))
  }

  function restoreNeighbors () {
    pushedSpheres.forEach(s => s.classList.remove('sphere--pushed'))
    pushedSpheres = []
  }

  /* ----------------------------------------------------------
     5. HOVER EVENTS
  ---------------------------------------------------------- */
  let currentHoveredSphere = null

  allSpheres.forEach(sphere => {

    sphere.addEventListener('mouseenter', () => {
      currentHoveredSphere = sphere
      const r = parseInt(sphere.dataset.row)
      const c = parseInt(sphere.dataset.col)
      pushNeighbors(r, c)
    })

    sphere.addEventListener('mouseleave', () => {
      if (currentHoveredSphere === sphere) {
        currentHoveredSphere = null
      }
      restoreNeighbors()
    })

  })

  /* ----------------------------------------------------------
     6. RESIZE — rebuild grid on significant resize
  ---------------------------------------------------------- */
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      window.location.reload()
    }, 600)
  })

})()
