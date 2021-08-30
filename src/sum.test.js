const {sum, sumOf} = require("./sum");

// describe 키워드를 사용하여 여러 테스트 케이스를 묶을 수 있음. 
describe('sum',()=>{

    // test는 새로운 테스트케이스 만드는 함수, 
    test('1+2 잘 더해지나', ()=> {
        expect(sum(1,2)).toBe(3);
    })
    
    test('배열 합 잘 구해지나', ()=> {
        const array = [1,2,3,4,5];
        expect(sumOf(array)).toBe(15);
    })
})