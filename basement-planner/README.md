# Basement Improvement Planner

An interactive React app that helps you plan your basement renovation with real-time cost and time estimates based on your square footage and skill level.

## Features

✨ **Interactive Step-by-Step Planning**
- Walk through each category: Flooring, Lighting, Space Division, Wall Treatment, Climate Control, and Extras
- Choose single or multiple options per category
- Skip categories you don't need

📊 **Smart Cost Calculator**
- Calculates costs based on your basement's square footage
- Shows cost ranges (min-max) for realistic budgeting
- Updates in real-time as you make selections

⏱️ **Time Estimation**
- Estimates DIY installation time
- Adjusts based on your skill level (beginner/intermediate/advanced)
- Helps you plan project timeline

💧 **Water-Resistant Focus**
- Highlights water-resistant options (perfect for basements prone to moisture)
- All recommendations avoid traditional framing/drywall

📋 **Shopping List Generator**
- Generates detailed shopping list with quantities
- Print or copy to clipboard
- Itemized with cost estimates

## Installation & Usage

### Option 1: Run the React App (Best Experience)

1. **Prerequisites**: Install Node.js (v14 or higher) from https://nodejs.org/

2. **Install dependencies**:
   ```bash
   cd basement-planner
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** to `http://localhost:3000`

5. **Build for production** (optional):
   ```bash
   npm run build
   ```
   This creates an optimized build in the `build/` folder that you can deploy to any web host.

### Option 2: Use Standalone HTML (Quick Start)

If you don't want to set up Node.js:

1. Open `basement-planner-standalone.html` in any modern web browser
2. No installation required!

## How to Use the App

### Step 1: Setup
- Enter your basement's floor square footage
- Enter approximate wall square footage (usually 1.5-2x floor space)
- Select your DIY skill level

### Step 2: Select Options
- Progress through each category
- Click cards to select options
- For multi-select categories, choose as many as you need
- Skip categories that don't apply

### Step 3: Review Summary
- See total cost estimate (range)
- Review total DIY time estimate
- View itemized breakdown of all selections
- Generate and print/copy your shopping list

## Customization

### Adding New Options

Edit `src/basementData.js` to add new options:

```javascript
// For flooring or wall treatment (cost per square foot):
{
  id: "new-option-id",
  name: "Option Name",
  costPerSqFt: { min: 2, max: 5 },
  timePerSqFt: 0.04,  // hours per square foot
  difficulty: "beginner",  // beginner, intermediate, or advanced
  description: "Short description",
  waterResistant: true
}

// For lighting, divisions, climate, extras (cost per unit):
{
  id: "new-option-id",
  name: "Option Name",
  costPerUnit: { min: 50, max: 150 },
  timePerUnit: 2,  // hours per unit
  difficulty: "intermediate",
  description: "Short description",
  coverage: 300  // square feet coverage (optional)
}
```

### Modifying Categories

To add a new category, edit `basementData.js`:

```javascript
export const basementData = {
  // ... existing categories
  
  newCategory: {
    title: "New Category Name",
    description: "Description for users",
    multiSelect: true,  // or false for single selection
    options: [
      // ... your options
    ]
  }
};
```

### Styling

All styles are in `src/App.css`. The app uses:
- CSS Grid for responsive layouts
- CSS custom properties for easy color theming
- Tailwind-inspired utility approach

To change the color scheme, modify the gradient and accent colors in `App.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Accent colors throughout

## Project Structure

```
basement-planner/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   ├── CategorySelector.js   # Option selection UI
│   │   └── Summary.js             # Final summary & shopping list
│   ├── App.js               # Main app component
│   ├── App.css              # All styling
│   ├── basementData.js      # All options data
│   ├── index.js             # React entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies
└── README.md               # This file
```

## Technology Stack

- **React 18**: Component-based UI framework
- **React Hooks**: State management (useState)
- **CSS3**: Custom styling with Grid and Flexbox
- **Vanilla JavaScript**: All calculations done client-side

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Your Basement Project

💡 From the app itself:
- Install dehumidifier first to control moisture during project
- Start with flooring before adding furniture or dividers
- Test adhesive products on small areas first
- Keep receipts and check return policies
- Take "before" photos to appreciate your transformation!

## Future Enhancements

Potential features to add:
- [ ] Save/load projects (localStorage)
- [ ] Multiple project comparison
- [ ] Image gallery for each option
- [ ] Link to actual products (Amazon, Home Depot)
- [ ] Before/after photo uploader
- [ ] Share project link with others
- [ ] Export to PDF
- [ ] Material calculator (gallons of paint, boxes of tiles, etc.)

## Contributing

Feel free to fork this project and customize it for your needs! Some ideas:
- Add options specific to your region
- Include labor cost estimates
- Add video tutorials for each option
- Create mobile app version

## License

This project is open source and available for personal and commercial use.

## Questions or Issues?

This tool provides estimates only. Actual costs and times will vary based on:
- Your specific basement conditions
- Local material prices
- Your experience level
- Unforeseen complications

Always:
- Consult professionals for structural concerns
- Check local building codes
- Get multiple quotes for materials
- Plan for 10-20% budget buffer

---

**Built for Northeast Ohio basement owners who want to improve their space without full finishing!**

Enjoy planning your basement makeover! 🎉
