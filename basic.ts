function add(n1:number, n2:number, showResult: boolean, phrease: string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrease + result);
    } else{
    return result;
    }
}

const n1 = 5;
const n2 = 2.5;
const showResult = true;
const phrease = 'yes';

const result = add(n1, n2, showResult, phrease);