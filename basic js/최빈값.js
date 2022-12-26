function solution(arr) {
    var answer = [1, 1];
    let v = 0;
    arr.sort();

    for(let i=0; i<arr.length; i++){ //arr의 길이만큼 i값 증가
        if(arr[i] == arr[i+1]){
            v++;
            if(arr[i+1] !== arr[i+2]){
                v++;
                if(answer[1] < v){
                    answer = [];
                    answer.push(arr[i], v);
                } else if (answer[1] == v){
                    answer.push(arr[i], v);
                }
                v = 0;
            }
        }
    }

    if(answer.length == 2){
        return answer[0];
    } else if(answer.length > 2){
        return -1;
    } else {
        return arr[0];
    }

}
