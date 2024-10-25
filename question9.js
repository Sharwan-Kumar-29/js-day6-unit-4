function codingScoreCheck(arr,cutOffScore){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sum=arr.reduce((acc,elm)=>acc+elm,0);
            let avg=sum/arr.length;
            if(avg>=cutOffScore){
                resolve(avg);
            }
            else{
                reject("Sorry you haven't cleared the coding round")
            }
        },2000)
    })
}

codingScoreCheck([1,2,3,4,5],3);

function HUKUMUScorecheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;
        
        if (average >= cutoff) {
          resolve(average);  // Resolve with the average score
        } else {
          reject("Sorry, you haven't cleared the HUKUMU round.");
        }
      }, 2000);  // 2-second delay
    });
  }
  
  // Test example
  HUKUMUScorecheck([70, 80, 90], 75)
    .then((average) => {
      console.log(`You have cleared the HUKUMU round with an average score of ${average}.`);
    })
    .catch((error) => {
      console.error(error);
    });
  
    function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const combinedAverage = (averageCodingScore + averageHukumuScore) / 2;
      
            if (combinedAverage >= cutoff) {
              resolve(combinedAverage);  // Resolve with the combined average score
            } else {
              reject("Sorry, you haven't cleared the final cutoff.");
            }
          }, 2000);  // 2-second delay
        });
      }
      
      // Test example
      unitMovementCheck(85, 80, 80)
        .then((combinedAverage) => {
          console.log(`You have cleared the final round with an average score of ${combinedAverage}.`);
        })
        .catch((error) => {
          console.error(error);
        });
      