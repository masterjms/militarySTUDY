fetch('flowers.jpg')
  .then((response) => {
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다.'); //thow는 조건문에 해당한다면, 코드의 진행을 멈추고 thow의 코드를 실행한다.
    }
    return response.blob(); //blob : 객체로써 파일류의 불변하는 미가공 데이터를 나타낸다. txt와 2진 데이터로 읽을수있다.
  })
  .then((myBlob) => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch((error) => {
    console.error('fetch에 문제가 있었습니다.', error);
  });

  //blob은 이미지, 사운드 등의 미디어 데이터를 다룰때 사용.
  //대게 데이터의 크기 및 데이터 송수신을 위한 작업에 사용.
  //const newBlob = new Blob(array, options); 생성 시 인수로 array와 aptions 를 받는다.
