// REACT IMPORTS
import { useState } from "react";


// This component handles Filtering of user data on the Users Page.
// It does so by taking in an array called FilterFields, which contains 
// information on filter headers(which match the table headers), filter 
// values and other relevant input information.
//
// The component loops through the Filterfields array and creates a corresponding 
// filter for it. All filters are part of a form that applies the selected filters
// to the user data before it is displayed on the table.



export interface FilterField {
    header: string;                     // The label/header for the filter field
    value: string;                      // The key for the field in the filter state (e.g., "organization", "username", etc.)
    type: "text" | "select" | "date";   // The input type (e.g., text, select, or date)
    placeholder: string;                // Placeholder text for each input type
    options?: string[];                 // Options for select dropdowns, if applicable
}

interface FilterDropdownProps {
    fields: FilterField[];                                              // Array of filter configurations
    onFilterChange: (filters: Record<string, string>) => void;          // Function to handle filter application
    onResetFilters: () => void;                                         // Function to handle filter reset
}



const FilterDropdown: React.FC<FilterDropdownProps> = ({ fields,  onFilterChange, onResetFilters }) => {
    
    // Initialize filter states as "" dynamically based on the fields received in the array.
    const initialFilters = fields.reduce((acc, field) => {
        acc[field.value] = "";
        return acc;
    }, {} as Record<string, string>);

    // store initialized state
    const [filters, setFilters] = useState<Record<string, string>>(initialFilters);

    // Update the filter state when a filter field changes
    const handleInputChange = (fieldKey: string, value: string) => {
        const updatedFilters = { ...filters, [fieldKey]: value };
        setFilters(updatedFilters);
    };

    // Apply filters to the data
    const handleApplyFilters = () => {
        onFilterChange(filters);
    };

    // Reset the filters
    const handleResetFilters = () => {
        setFilters(initialFilters);
        onResetFilters();
    };

    return (
        <div className="filter-dropdown">
            <form>

                {/* Map through the filter fields in the array and create respective filter inputs */}
                {fields.map((field) => (
                    <div className="filter-field" key={field.value}>
                        <label htmlFor={field.value}>{field.header}</label>

                        {/* Check the required input type for the filter and create the corresponding input field */}
                        {field.type === "select" && field.options ? (
                            <select
                                id={field.value}
                                value={filters[field.value]}
                                onChange={(e) => handleInputChange(field.value, e.target.value)}
                            >
                                <option value="">{field.placeholder}</option>
                                {field.options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={field.value}
                                type={field.type}
                                value={filters[field.value]}
                                placeholder={field.placeholder}
                                onChange={(e) => handleInputChange(field.value, e.target.value)}
                            />
                        )}

                    </div>
                ))}

                {/* Filter actions to either apply or reset filters */}
                <div className="filter-actions">
                    <button type="button" onClick={handleResetFilters} className="btn-accent-outlined">Reset</button>
                    <button type="button" onClick={handleApplyFilters} className="btn-secondary-filled">Apply</button>
                </div>

            </form>
        </div>
    );
};

export default FilterDropdown;
