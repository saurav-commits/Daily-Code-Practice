// You are given two sorted arrays (non-decreasing order).
// Your task is to merge them into one sorted array.

// arr1 = [1, 3, 5]
// arr2 = [2, 3, 6]
// Output = [1, 2, 3, 3, 5, 6]

// Key observation (THIS is the pattern)

// Both arrays are already sorted

// So you don’t need to sort again

// You just need to compare elements step by step

// 👉 This immediately suggests the two-pointer approach.

// Complexity (always say this)

// Time: O(n + m)

// Space: O(n + m) (new merged array)

// Optimal Approach (Two Pointers)
// Step-by-step logic (interview explanation)

// 1️⃣ Take two pointers:

// i → start of first array

// j → start of second array

// 2️⃣ Compare:

// smaller element goes into result

// move that pointer forward

// 3️⃣ When one array ends:

// copy the remaining elements of the other array


// function mergeSortedArrays(arr1, arr2){
//     let i=0, j=0;
//     let result = [];

//     while(i<arr1.length && j <arr2.length) {
//         if(arr1[i] <= arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }

//     while(i<arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     while(j<arr2.length){
//         result.push(arr2[j]);
//         j++;
//     }

//     return result;
// }


// console.log(mergeSortedArrays([1,3,5],[2,3,6]));

// this will use 3-pointer 
// function mergeInPlace(arr1, n, arr2, m) {
//     let i=n-1;
//     let j=m-1;
//     let k=n+m-1;

//     while(i>=0 && j>=0){
//         if(arr1[i] > arr2[j]) {
//             arr1[k] = arr1[i];
//             i--;
//         } else {
//             arr1[k]=arr2[j];
//             j--;
//         }
//         k--;
//     }

//     while(j>=0){
//         arr1[k]=arr2[j];
//         j--;
//         k--;
//     }

//     return arr1;
// }

// let arr1 = [2,4,6];
// let arr2 = [1,2,3,5,0,0,0];

// console.log(mergeInPlace(arr1, 3, arr2, 3));



function mergeInPlace(nums1,m,nums2,n){
    let p1=m-1;
    let p2=n-1;

    for(let i=m+n-1; i>=0; i--){
        if(p2 < 0) break;
        if(p1 >=0 && nums1[p1] > nums2[p2]){
            nums1[i]=nums1[p1];
            p1--;
        } else {
            nums1[i]=nums2[p2];
            p2--;
        }
    }
    return nums1;
}


let nums1 = [1,2,3,0,0,0];
mergeInPlace(nums1,3,[2,5,6],3);
console.log(nums1);

