// Promise 를 반환하는 API는 promise chain을 만들며 여러 파트의 함수로 나뉜다. 

function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url) // returns a promise
      })
      .then(v => {
        return processDataInWorker(v); // returns a promise
      });
  }
  //위의 코드는 하나의 async함수로 아래와 같이 쓰여질 수도 있다.
  async function getProcessedData(url) {
    let v;
    try {
      v = await downloadData(url);
    } catch (e) {
      v = await downloadFallbackData(url);
    }
    return processDataInWorker(v);
  }