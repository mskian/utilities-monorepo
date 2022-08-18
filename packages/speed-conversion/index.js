'use strict';

function speedConversion(user_speed) {
    const meter_per_seconds = user_speed;
	const speed_value = 3.6;
	const total_speed = meter_per_seconds * speed_value;
	const final_speed = total_speed.toFixed(1) + " Km/h";
    return final_speed;
}

module.exports.speedConversion = speedConversion;