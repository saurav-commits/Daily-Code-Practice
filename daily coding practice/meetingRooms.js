function canAttendAllMeetings(arr) {

    // Sort by start time
    arr.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < arr.length; i++) {

        let prevEnd = arr[i - 1][1];
        let currentStart = arr[i][0];

        if (currentStart < prevEnd) {
            return false;
        }
    }

    return true;
}


console.log(canAttendAllMeetings([[1,4],[10,15],[7,10]])); // true

console.log(canAttendAllMeetings([[2,4],[9,12],[6,10]])); // false
