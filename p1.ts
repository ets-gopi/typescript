function secLargestEle(nums: number[]) {
  if (nums.length > 1) {
    let first = -Infinity,
      second = -Infinity;
    for (const num of nums) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num !== first && num > second) {
        second = num;
      }
    }
    return second === -Infinity ? -1 : second;
  }
}

const res = secLargestEle([10, 10, 10]);
console.log(res);

function thridLargestEle(nums: number[]) {
  if (nums.length > 1) {
    let first = -Infinity,
      second = -Infinity,
      thrid = -Infinity;
    for (const num of nums) {
      if (num > first) {
        thrid = second;
        second = first;
        first = num;
      } else if (num !== first && num > second) {
        thrid = second;
        second = num;
      } else if (num !== first && num !== second && num > thrid) {
        thrid = num;
      }
    }
    return thrid === -Infinity ? -1 : thrid;
  }
}

const resu = thridLargestEle([1, 14, 2, 16, 10, 20]);
console.log(resu);

function secLowestEle(nums: number[]) {
  let firstlow = Infinity,
    secondlow = Infinity;
  nums.forEach((val, ind) => {
    if (val < firstlow) {
      secondlow = firstlow;
      firstlow = val;
    } else if (val !== firstlow && val < secondlow) {
      secondlow = val;
    }
  });
  console.log(`firstLow = ${firstlow} and secondLow = ${secondlow}`);
}

secLowestEle([10,5,10,-9,-9,2,0]);

// 2,[1,2,_]
// [0,0,1,1,1,2,2,3,3,4]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 














                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            




















