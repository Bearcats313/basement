export const basementData = {
  flooring: {
    title: "Flooring",
    description: "Choose your flooring option (water-resistant recommended)",
    options: [
      {
        id: "foam-tiles",
        name: "Interlocking Foam Tiles",
        costPerSqFt: { min: 1, max: 3 },
        timePerSqFt: 0.02, // hours per sq ft
        difficulty: "beginner",
        description: "Easy DIY, removable, cushioned",
        waterResistant: true
      },
      {
        id: "rubber-tiles",
        name: "Rubber Flooring Tiles",
        costPerSqFt: { min: 2, max: 4 },
        timePerSqFt: 0.03,
        difficulty: "beginner",
        description: "Very water-resistant, durable",
        waterResistant: true
      },
      {
        id: "lvp-floating",
        name: "Luxury Vinyl Plank (Floating)",
        costPerSqFt: { min: 2, max: 5 },
        timePerSqFt: 0.04,
        difficulty: "intermediate",
        description: "Upscale look, 100% waterproof",
        waterResistant: true
      },
      {
        id: "carpet-tiles",
        name: "Carpet Tiles",
        costPerSqFt: { min: 2, max: 4 },
        timePerSqFt: 0.03,
        difficulty: "beginner",
        description: "Modular, replaceable sections",
        waterResistant: false
      },
      {
        id: "concrete-paint",
        name: "Concrete Paint/Epoxy",
        costPerSqFt: { min: 0.5, max: 2 },
        timePerSqFt: 0.05,
        difficulty: "intermediate",
        description: "Budget option, permanent coating",
        waterResistant: true
      },
      {
        id: "rubber-rolls",
        name: "Rubber Rolls",
        costPerSqFt: { min: 3, max: 6 },
        timePerSqFt: 0.04,
        difficulty: "intermediate",
        description: "Commercial grade, fewer seams",
        waterResistant: true
      },
      {
        id: "cork-tiles",
        name: "Cork Tiles",
        costPerSqFt: { min: 3, max: 6 },
        timePerSqFt: 0.04,
        difficulty: "intermediate",
        description: "Warm, some moisture resistance",
        waterResistant: false
      },
      {
        id: "peel-stick-vinyl",
        name: "Peel-and-Stick Vinyl Tiles",
        costPerSqFt: { min: 1, max: 3 },
        timePerSqFt: 0.03,
        difficulty: "beginner",
        description: "Easy install, waterproof varieties",
        waterResistant: true
      }
    ]
  },
  
  lighting: {
    title: "Lighting",
    description: "Select lighting options (can choose multiple)",
    multiSelect: true,
    options: [
      {
        id: "led-shop",
        name: "LED Shop Lights (4-pack)",
        costPerUnit: { min: 80, max: 160 },
        timePerUnit: 1,
        difficulty: "beginner",
        description: "Plug-in, linkable, very bright",
        coverage: 400 // sq ft per pack
      },
      {
        id: "track-lighting",
        name: "Plug-in Track Lighting Kit",
        costPerUnit: { min: 50, max: 150 },
        timePerUnit: 1.5,
        difficulty: "beginner",
        description: "Adjustable, directional lighting",
        coverage: 300
      },
      {
        id: "string-lights",
        name: "Edison String Lights",
        costPerUnit: { min: 30, max: 100 },
        timePerUnit: 1,
        difficulty: "beginner",
        description: "Ambient lighting, decorative",
        coverage: 250
      },
      {
        id: "led-strips",
        name: "LED Strip Lights (50ft)",
        costPerUnit: { min: 25, max: 80 },
        timePerUnit: 2,
        difficulty: "beginner",
        description: "Accent lighting, adhesive backed",
        coverage: 200
      },
      {
        id: "floor-lamps",
        name: "Portable Floor/Table Lamps (2-pack)",
        costPerUnit: { min: 40, max: 200 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Flexible placement, movable",
        coverage: 150
      },
      {
        id: "puck-lights",
        name: "Battery LED Puck Lights (6-pack)",
        costPerUnit: { min: 20, max: 50 },
        timePerUnit: 1,
        difficulty: "beginner",
        description: "No wiring, motion sensor options",
        coverage: 100
      },
      {
        id: "industrial-pendant",
        name: "Industrial Pendant Lights (2-pack)",
        costPerUnit: { min: 60, max: 150 },
        timePerUnit: 1.5,
        difficulty: "beginner",
        description: "Plug-in, stylish cage design",
        coverage: 200
      }
    ]
  },
  
  spaceDivision: {
    title: "Space Division",
    description: "How to divide your space (can choose multiple)",
    multiSelect: true,
    options: [
      {
        id: "curtains",
        name: "Curtain Room Dividers",
        costPerUnit: { min: 50, max: 200 },
        timePerUnit: 2,
        difficulty: "beginner",
        description: "Ceiling track or tension rod, flexible",
        coverage: 100 // linear feet
      },
      {
        id: "folding-screens",
        name: "Folding Privacy Screens",
        costPerUnit: { min: 75, max: 300 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Portable, 3-6 panels",
        coverage: 15
      },
      {
        id: "bookcases",
        name: "Freestanding Bookcases",
        costPerUnit: { min: 100, max: 400 },
        timePerUnit: 2,
        difficulty: "beginner",
        description: "Storage + visual barrier",
        coverage: 25
      },
      {
        id: "pipe-drape",
        name: "Pipe-and-Drape System",
        costPerUnit: { min: 150, max: 400 },
        timePerUnit: 3,
        difficulty: "intermediate",
        description: "Professional look, adjustable",
        coverage: 30
      },
      {
        id: "cube-storage",
        name: "Cube Storage Divider",
        costPerUnit: { min: 80, max: 250 },
        timePerUnit: 2,
        difficulty: "beginner",
        description: "Storage + room separation",
        coverage: 20
      },
      {
        id: "hanging-panels",
        name: "Hanging Fabric Panels",
        costPerUnit: { min: 40, max: 150 },
        timePerUnit: 2,
        difficulty: "beginner",
        description: "Lightweight, decorative",
        coverage: 15
      }
    ]
  },
  
  wallTreatment: {
    title: "Wall Treatment",
    description: "How to finish your walls",
    options: [
      {
        id: "concrete-paint",
        name: "Concrete/Drylok Paint",
        costPerSqFt: { min: 0.3, max: 0.8 },
        timePerSqFt: 0.02,
        difficulty: "beginner",
        description: "Waterproof, brightens space",
        waterResistant: true
      },
      {
        id: "fabric-panels",
        name: "Fabric Panels/Tapestries",
        costPerSqFt: { min: 0.5, max: 2 },
        timePerSqFt: 0.01,
        difficulty: "beginner",
        description: "Sound dampening, removable",
        waterResistant: false
      },
      {
        id: "peel-wallpaper",
        name: "Peel-and-Stick Wallpaper",
        costPerSqFt: { min: 1, max: 3 },
        timePerSqFt: 0.03,
        difficulty: "intermediate",
        description: "Decorative, removable",
        waterResistant: false
      },
      {
        id: "industrial-exposed",
        name: "Industrial/Exposed Look",
        costPerSqFt: { min: 0.1, max: 0.5 },
        timePerSqFt: 0.01,
        difficulty: "beginner",
        description: "Paint pipes, minimal treatment",
        waterResistant: true
      },
      {
        id: "pegboard",
        name: "Pegboard Walls",
        costPerSqFt: { min: 1, max: 2.5 },
        timePerSqFt: 0.04,
        difficulty: "intermediate",
        description: "Functional storage display",
        waterResistant: false
      },
      {
        id: "corrugated-metal",
        name: "Corrugated Metal Panels",
        costPerSqFt: { min: 2, max: 4 },
        timePerSqFt: 0.03,
        difficulty: "intermediate",
        description: "Industrial aesthetic",
        waterResistant: true
      }
    ]
  },
  
  climateControl: {
    title: "Climate Control",
    description: "Temperature and moisture management (can choose multiple)",
    multiSelect: true,
    options: [
      {
        id: "dehumidifier-50",
        name: "50-Pint Dehumidifier",
        costPerUnit: { min: 200, max: 350 },
        timePerUnit: 0.5,
        difficulty: "beginner",
        description: "Essential for moisture control",
        coverage: 3000
      },
      {
        id: "dehumidifier-70",
        name: "70-Pint Dehumidifier",
        costPerUnit: { min: 250, max: 400 },
        timePerUnit: 0.5,
        difficulty: "beginner",
        description: "Large/very humid spaces",
        coverage: 4500
      },
      {
        id: "space-heater",
        name: "Portable Space Heater",
        costPerUnit: { min: 50, max: 200 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Ceramic or oil-filled",
        coverage: 500
      },
      {
        id: "portable-ac",
        name: "Portable Air Conditioner",
        costPerUnit: { min: 250, max: 600 },
        timePerUnit: 1,
        difficulty: "beginner",
        description: "Single or dual-hose",
        coverage: 500
      },
      {
        id: "fans",
        name: "Box/Standing Fans (2-pack)",
        costPerUnit: { min: 40, max: 120 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Air circulation",
        coverage: 800
      },
      {
        id: "damprid",
        name: "Moisture Absorbers (DampRid)",
        costPerUnit: { min: 20, max: 50 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Supplemental moisture control",
        coverage: 500
      }
    ]
  },
  
  extras: {
    title: "Extras & Accessories",
    description: "Optional improvements (can choose multiple)",
    multiSelect: true,
    options: [
      {
        id: "area-rugs",
        name: "Indoor/Outdoor Area Rugs",
        costPerUnit: { min: 50, max: 300 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Comfort and style",
        coverage: 80
      },
      {
        id: "wire-shelving",
        name: "Wire Shelving Units (2-pack)",
        costPerUnit: { min: 100, max: 250 },
        timePerUnit: 2,
        difficulty: "beginner",
        description: "Storage organization",
        coverage: 100
      },
      {
        id: "folding-table",
        name: "Folding Tables",
        costPerUnit: { min: 40, max: 150 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Versatile workspace",
        coverage: 20
      },
      {
        id: "seating",
        name: "Seating (Bean bags/Folding chairs)",
        costPerUnit: { min: 50, max: 300 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Comfortable seating",
        coverage: 10
      },
      {
        id: "sound-system",
        name: "Bluetooth Speakers",
        costPerUnit: { min: 30, max: 200 },
        timePerUnit: 0.25,
        difficulty: "beginner",
        description: "Entertainment audio",
        coverage: 1000
      },
      {
        id: "tv-mount",
        name: "Wall-Mounted TV Setup",
        costPerUnit: { min: 50, max: 150 },
        timePerUnit: 2,
        difficulty: "intermediate",
        description: "Entertainment center",
        coverage: 0
      }
    ]
  }
};

export const skillLevels = {
  beginner: 1,
  intermediate: 1.3,
  advanced: 1.0
};
