const axios = require('axios');
const allOps = () => {
    const response = "https://api.techember.in/app/bbps-operators.php"
    return axios.get(response)
        .then(res => res.data)
        .catch(err => console.error(err));
}

console.log("Fetching all operators data...");
allOps().then(data => {
    const fs = require('fs');
    fs.writeFileSync('temp/ops.js', 'module.exports = ' + JSON.stringify(data, null, 2) + ';');
    console.log("Operators data saved to temp/ops.js");
}).catch(err => {
    console.error("Error fetching operators data:", err);
});