function checkSpeed(speed) {
    const speedLimit = 70;
    const KmperPoint = 5;

    if (speed <= speedLimit) console.log("Ok");
    else {
        let point = Math.floor((speed - speedLimit) / KmperPoint);
        if (point >= 12) console.log("Suspend Licence");
        else console.log('Points : ',point);
    
    }
}

checkSpeed(180);