
    function updateArr(arr, n) {
        let prev = arr[0];

        // First element
        arr[0] = arr[0] ^ arr[1];

        for (let i = 1; i < n - 1; i++) {
            let curr = arr[i]; // original value
            arr[i] = prev ^ arr[i + 1];
            prev = curr;
        }

        // Last element
        arr[n - 1] = prev ^ arr[n - 1];

        return arr;
    }
