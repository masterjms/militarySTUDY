// try...catch 문은 실행할 코드블럭을 표시하고 예외(exception)가 발생(throw)할 경우의 응답을 지정합니다.
// catch 블록은 try 블록 안에서 예외가 발생(throw)하는 경우 무엇을 할지 명시하는 코드를 포함합니다
try {
    nonExistentFunction(); // 이 함수를 해보았을 때 예외가 발생하면
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  

// syntax
try {
    tryStatements
  } catch (exceptionVar) {
    catchStatements
  } finally { // finally 블록은 try 블록과 catch 블록(들)이 실행을 마친 후 항상 실행됩니다. 예외가 발생했는지에 관계없이 항상 실행됩니다.
    finallyStatements
  }

// 위와 같이 try 선언의 종류는 총 3가지다.
// 1.try...catch
// 2.try...finally
// 3.try...catch...finally