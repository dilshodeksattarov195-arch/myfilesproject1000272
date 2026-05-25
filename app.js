const helperSenderConfig = { serverId: 5953, active: true };

const helperSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5953() {
    return helperSenderConfig.active ? "OK" : "ERR";
}

console.log("Module helperSender loaded successfully.");