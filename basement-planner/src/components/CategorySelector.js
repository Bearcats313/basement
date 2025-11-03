import React from 'react';

function CategorySelector({ category, data, selection, onSelect, squareFootage, wallSquareFootage }) {
  const isMultiSelect = data.multiSelect;
  const selectedIds = isMultiSelect 
    ? (selection || []).map(item => item.id)
    : selection ? [selection.id] : [];

  const calculateItemCost = (option) => {
    if (option.costPerSqFt) {
      const sqFt = squareFootage || wallSquareFootage || 0;
      return {
        min: Math.round(option.costPerSqFt.min * sqFt),
        max: Math.round(option.costPerSqFt.max * sqFt)
      };
    }
    return option.costPerUnit;
  };

  return (
    <div className="category-selector">
      <h2>{data.title}</h2>
      <p className="category-description">{data.description}</p>
      
      {isMultiSelect && (
        <div className="info-banner">
          <span>💡 You can select multiple items in this category</span>
        </div>
      )}

      <div className="options-grid">
        {data.options.map((option) => {
          const isSelected = selectedIds.includes(option.id);
          const cost = calculateItemCost(option);
          
          return (
            <div
              key={option.id}
              className={`option-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelect(option)}
            >
              {isSelected && (
                <div className="checkmark">✓</div>
              )}
              
              <h3>{option.name}</h3>
              <p className="option-description">{option.description}</p>
              
              <div className="option-details">
                <div className="detail-row">
                  <span className="label">Cost:</span>
                  <span className="value cost">
                    ${cost.min.toLocaleString()} - ${cost.max.toLocaleString()}
                  </span>
                </div>
                
                <div className="detail-row">
                  <span className="label">Time:</span>
                  <span className="value">
                    {option.timePerUnit 
                      ? `${option.timePerUnit} hrs/unit`
                      : `${option.timePerSqFt * 100} hrs/100 sq ft`
                    }
                  </span>
                </div>
                
                <div className="detail-row">
                  <span className="label">Difficulty:</span>
                  <span className={`badge badge-${option.difficulty}`}>
                    {option.difficulty}
                  </span>
                </div>
                
                {option.waterResistant !== undefined && (
                  <div className="detail-row">
                    <span className="label">Water Resistant:</span>
                    <span className={`badge ${option.waterResistant ? 'badge-yes' : 'badge-no'}`}>
                      {option.waterResistant ? '✓ Yes' : '✗ No'}
                    </span>
                  </div>
                )}
                
                {option.coverage && (
                  <div className="detail-row coverage">
                    <span className="label">Coverage:</span>
                    <span className="value">~{option.coverage} sq ft</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategorySelector;
