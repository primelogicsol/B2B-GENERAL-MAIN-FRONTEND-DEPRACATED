export const handleSave = (subcategoryId, selectedValues) => {
    localStorage.setItem(subcategoryId, JSON.stringify(selectedValues));
    alert("Selections saved!");
  };
  