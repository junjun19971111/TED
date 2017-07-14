'use strict';

describe('FizzBuzzWhizz',()=>{
    it ('the number is of 3',()=>{
        let  num=3;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('Fizz');
    });
    it ('the number is of 5',()=>{
        let  num=5;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('Buzz');
    });
    it('the number is of 7',()=>{
        let num=7;
        const  result=fizzBuzzWhizz(num);

        expect(result).toEqual('Whizz');
    });
    it('the number is have 3',()=>{
        let num=13;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('Fizz');
    });
    it('the number is of 3 and 5',()=>{
        let num=15;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('FizzBuzz');

    });
    it('the number is of 5 and 7',()=>{
        let num=70;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('BuzzWhizz');

    });
    it('the number is of 3 and 7',()=>{
        let num=21;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('FizzWhizz');

    });
    it('the number is of 3 and 5 and 7',()=>{
        let num=105;
        const result=fizzBuzzWhizz(num);

        expect(result).toEqual('FizzBuzzWhizz');

    });



});