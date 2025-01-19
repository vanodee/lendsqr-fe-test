// REACT IMPORTS
import React from "react";

// ICON IMPORTS
import FilledStarIcon from "../assets/icons/starFilled.svg?react";
import OutlineStarIcon from "../assets/icons/starOutlined.svg?react";


// This component retruns stars based on a customer's Tier level.
// It takes in a number as a prop.


interface TierProps {
  tier: number;  
}

const Tier: React.FC<TierProps> = ({ tier }) => {       // Explicitly typed, since it accepts props

    // This ensures the tier is within the valid range (1 to 3)
    const normalizedTier = Math.max(1, Math.min(3, tier));

    // Create an array of length 3 for the stars.
    const stars = Array.from({ length: 3 }, (_, index) =>

        // if the index is less than the tier, it creates a filled star.
        // else, it create an outlined star.
        index < normalizedTier ? <FilledStarIcon key={index} /> : <OutlineStarIcon key={index} />

    );

    return (
        <div className="tier-container">
        <p>User's Tier</p>
        <span>{stars}</span>
        </div>
    );
};

export default Tier;