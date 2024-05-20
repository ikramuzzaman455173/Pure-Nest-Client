import React from "react";

const PSpecification = () => {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Ingredients:</h1>
        <p className="text-lg font-light text-gray-700 mt-2">
          Water, Sodium Hypochlorite, Sodium Hydroxide, Fragrance, Surfactants, Stabilizers.
        </p>
      </div>
      <div className="my-6">
        <h1 className="text-xl font-semibold text-gray-800">Product Features:</h1>
        <ul className="list-disc list-inside text-lg font-light text-gray-700 mt-2">
          <li>Kills 99.9% of bacteria and viruses</li>
          <li>Effective on various surfaces</li>
          <li>Streak-free shine</li>
          <li>Fresh, clean scent</li>
          <li>Quick-drying formula</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Directions for Use:</h1>
        <p className="text-lg font-light text-gray-700 mt-2">
          Spray directly onto the surface to be cleaned. Wipe with a clean, dry cloth or sponge. For heavily soiled areas, allow the product to sit for a few minutes before wiping. No need to rinse.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-xl font-semibold text-gray-800">Safety Information:</h1>
        <p className="text-lg font-light text-gray-700 mt-2">
          Keep out of reach of children. Avoid contact with eyes. In case of eye contact, rinse thoroughly with water. If swallowed, seek medical advice immediately. Use in a well-ventilated area.
        </p>
      </div>
    </div>
  );
};

export default PSpecification;
