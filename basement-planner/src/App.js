import React, { useState } from 'react';
import { basementData, skillLevels } from './basementData';
import CategorySelector from './components/CategorySelector';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [squareFootage, setSquareFootage] = useState(500);
  const [wallSquareFootage, setWallSquareFootage] = useState(800);
  const [skillLevel, setSkillLevel] = useState('intermediate');
  const [selections, setSelections] = useState({
    flooring: null,
    lighting: [],
    spaceDivision: [],
    wallTreatment: null,
    climateControl: [],
    extras: []
  });

  const categories = Object.keys(basementData);
  const isSetupStep = currentStep === -1;
  const isSummaryStep = currentStep === categories.length;

  const handleSelection = (category, selection) => {
    const categoryData = basementData[category];
    
    if (categoryData.multiSelect) {
      setSelections(prev => {
        const current = prev[category] || [];
        const exists = current.find(item => item.id === selection.id);
        
        if (exists) {
          return {
            ...prev,
            [category]: current.filter(item => item.id !== selection.id)
          };
        } else {
          return {
            ...prev,
            [category]: [...current, selection]
          };
        }
      });
    } else {
      setSelections(prev => ({
        ...prev,
        [category]: selection
      }));
    }
  };

  const calculateTotals = () => {
    let totalCostMin = 0;
    let totalCostMax = 0;
    let totalTime = 0;

    // Flooring
    if (selections.flooring) {
      totalCostMin += selections.flooring.costPerSqFt.min * squareFootage;
      totalCostMax += selections.flooring.costPerSqFt.max * squareFootage;
      totalTime += selections.flooring.timePerSqFt * squareFootage * skillLevels[skillLevel];
    }

    // Wall Treatment
    if (selections.wallTreatment) {
      totalCostMin += selections.wallTreatment.costPerSqFt.min * wallSquareFootage;
      totalCostMax += selections.wallTreatment.costPerSqFt.max * wallSquareFootage;
      totalTime += selections.wallTreatment.timePerSqFt * wallSquareFootage * skillLevels[skillLevel];
    }

    // Multi-select categories
    ['lighting', 'spaceDivision', 'climateControl', 'extras'].forEach(category => {
      if (selections[category] && selections[category].length > 0) {
        selections[category].forEach(item => {
          totalCostMin += item.costPerUnit.min;
          totalCostMax += item.costPerUnit.max;
          totalTime += item.timePerUnit * skillLevels[skillLevel];
        });
      }
    });

    return {
      costMin: Math.round(totalCostMin),
      costMax: Math.round(totalCostMax),
      time: Math.round(totalTime * 10) / 10
    };
  };

  const handleNext = () => {
    if (isSetupStep) {
      setCurrentStep(0);
    } else if (currentStep < categories.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > -1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < categories.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetApp = () => {
    setCurrentStep(-1);
    setSelections({
      flooring: null,
      lighting: [],
      spaceDivision: [],
      wallTreatment: null,
      climateControl: [],
      extras: []
    });
  };

  const renderSetupStep = () => (
    <div className="setup-container">
      <h1>Basement Improvement Planner</h1>
      <p className="subtitle">Plan your basement makeover with cost and time estimates</p>
      
      <div className="setup-form">
        <div className="form-group">
          <label>Basement Floor Square Footage:</label>
          <input
            type="number"
            value={squareFootage}
            onChange={(e) => setSquareFootage(Math.max(100, parseInt(e.target.value) || 100))}
            min="100"
            step="50"
          />
          <span className="hint">Typical range: 400-1200 sq ft</span>
        </div>

        <div className="form-group">
          <label>Wall Square Footage (approximate):</label>
          <input
            type="number"
            value={wallSquareFootage}
            onChange={(e) => setWallSquareFootage(Math.max(200, parseInt(e.target.value) || 200))}
            min="200"
            step="50"
          />
          <span className="hint">Usually 1.5-2x floor space for typical ceiling height</span>
        </div>

        <div className="form-group">
          <label>Your DIY Skill Level:</label>
          <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
            <option value="beginner">Beginner (new to DIY)</option>
            <option value="intermediate">Intermediate (some experience)</option>
            <option value="advanced">Advanced (experienced DIYer)</option>
          </select>
          <span className="hint">This affects time estimates</span>
        </div>

        <button className="btn btn-primary" onClick={handleNext}>
          Get Started →
        </button>
      </div>

      <div className="info-box">
        <h3>💡 What This Tool Does:</h3>
        <ul>
          <li>Helps you choose water-resistant options for your basement</li>
          <li>Calculates estimated costs based on your space</li>
          <li>Estimates DIY installation time</li>
          <li>Generates a shopping list for your project</li>
        </ul>
      </div>
    </div>
  );

  if (isSetupStep) {
    return <div className="app">{renderSetupStep()}</div>;
  }

  if (isSummaryStep) {
    return (
      <div className="app">
        <Summary
          selections={selections}
          totals={calculateTotals()}
          squareFootage={squareFootage}
          wallSquareFootage={wallSquareFootage}
          skillLevel={skillLevel}
          onBack={handleBack}
          onReset={resetApp}
        />
      </div>
    );
  }

  const currentCategory = categories[currentStep];
  const categoryData = basementData[currentCategory];
  const currentSelection = selections[currentCategory];

  return (
    <div className="app">
      <div className="header">
        <h1>Basement Improvement Planner</h1>
        <div className="progress">
          <span>Step {currentStep + 1} of {categories.length}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentStep + 1) / categories.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <CategorySelector
        category={currentCategory}
        data={categoryData}
        selection={currentSelection}
        onSelect={(selection) => handleSelection(currentCategory, selection)}
        squareFootage={currentCategory === 'flooring' ? squareFootage : null}
        wallSquareFootage={currentCategory === 'wallTreatment' ? wallSquareFootage : null}
      />

      <div className="navigation">
        <button 
          className="btn btn-secondary" 
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          ← Back
        </button>
        
        <button 
          className="btn btn-text" 
          onClick={handleSkip}
        >
          Skip This Step
        </button>

        <button 
          className="btn btn-primary" 
          onClick={handleNext}
        >
          {currentStep === categories.length - 1 ? 'View Summary →' : 'Next →'}
        </button>
      </div>

      <div className="quick-summary">
        <div className="summary-item">
          <span className="label">Selected Items:</span>
          <span className="value">{Object.values(selections).flat().filter(Boolean).length}</span>
        </div>
        <div className="summary-item">
          <span className="label">Est. Cost:</span>
          <span className="value">${calculateTotals().costMin.toLocaleString()} - ${calculateTotals().costMax.toLocaleString()}</span>
        </div>
        <div className="summary-item">
          <span className="label">Est. Time:</span>
          <span className="value">{calculateTotals().time} hours</span>
        </div>
      </div>
    </div>
  );
}

export default App;
