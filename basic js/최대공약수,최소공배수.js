// 유클리드 호제법
// 최대공약수 GCD
let getGCD = (num1,num2) => (num2 >0 ? getGCD(num2, num1 % num2) : num1)
// 즉 num1를 num2로 나눈 나머지를 r이라 했을때, GCD(num1,num2) = GCD(num2,r)

//최소공배수 LCM
let lcm = (num1 * num2) / gcd

// 총정리
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}