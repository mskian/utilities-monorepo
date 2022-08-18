'use strict';

function kmConversion(user_km) {
    const total_km = user_km / 1000;
    const final_km = parseFloat(total_km).toFixed(2) + " km";
    return final_km;
}

module.exports.kmConversion = kmConversion;