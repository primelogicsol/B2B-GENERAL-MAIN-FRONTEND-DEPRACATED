import { useState } from "react";

const useCategoryHandlers = (categories) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const [expandedCategories, setExpandedCategories] = useState({});
  const [subcategoryDetails, setSubcategoryDetails] = useState(null);
  const [expandMainCategory, setExpandMainCategory] = useState(true);
  const toggleMainCategoryExpansion = () => {
    setExpandMainCategory((prev) => !prev);
  };
  const initialSelectedValues = () => {
    const keys = categories
      .flatMap((category) => category.subcategories)
      .flatMap((subcategory) => Object.keys(subcategory.details || {}));

    return keys.reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});
  };
  const [selectedValues, setSelectedValues] = useState(initialSelectedValues());
  const toggleCategory = (categoryId) => {
    setSelectedSubcategories([]);
    setSubcategoryDetails(null);
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectAllCategories = () => {
    setSelectedCategories(categories.map((category) => category.id));
  };

  const clearAllCategories = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedValues(initialSelectedValues());
  };

  const selectAllSubcategories = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return;

    const allSubcategoryIds = category.subcategories.map((subcat) => subcat.id);
    setSelectedSubcategories((prev) => {
      const newSubcategories = [...new Set([...prev, ...allSubcategoryIds])];
      return newSubcategories;
    });
  };

  const clearAllSubcategories = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (!category) return;

    const allSubcategoryIds = category.subcategories.map((subcat) => subcat.id);
    setSelectedSubcategories((prev) => {
      const newSubcategories = prev.filter(
        (subcatId) => !allSubcategoryIds.includes(subcatId)
      );
      return newSubcategories;
    });
  };

  const toggleSubcategory = (subcategoryId) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategoryId)
        ? prev.filter((id) => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
    handleSubcategorySelection(subcategoryId);
  };

  const handleSubcategorySelection = (subcategoryId) => {
    const subcategoryDetails = categories
      .flatMap((category) => category.subcategories)
      .find((subcat) => subcat.id === subcategoryId)?.details;

    if (subcategoryDetails) {
      const updatedSelectedValues = Object.keys(subcategoryDetails).reduce(
        (acc, key) => {
          acc[key] = [];
          return acc;
        },
        {}
      );

      setSelectedValues(updatedSelectedValues);
    } else {
      setSelectedValues(initialSelectedValues());
    }
  };

  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleSelection = (sectionKey, value) => {
    setSelectedValues((prevState) => {
      const currentSelection = prevState[sectionKey];
      const updatedSelection = currentSelection.includes(value)
        ? currentSelection.filter((item) => item !== value)
        : [...currentSelection, value];

      return {
        ...prevState,
        [sectionKey]: updatedSelection,
      };
    });
  };

  return {
    selectedCategories,
    selectedSubcategories,
    selectedValues,
    expandedCategories,
    toggleCategory,
    selectAllCategories,
    clearAllCategories,
    toggleSubcategory,
    handleSubcategorySelection,
    toggleCategoryExpansion,
    subcategoryDetails,
    handleSelection,
    clearAllSubcategories,
    selectAllSubcategories,
    expandMainCategory,
    toggleMainCategoryExpansion,
  };
};

export default useCategoryHandlers;
