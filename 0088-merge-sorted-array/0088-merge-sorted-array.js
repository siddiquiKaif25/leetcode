function merge(nums1,m, nums2,n) {
    nums1.length = m;
    nums2.length = n;

    for (let i = 0; i < n; i++) {
            nums1.push(nums2[i]);
    }
    nums1.sort((a, b) => a - b);

}