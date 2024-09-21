function solution(str_list) {
    const index = str_list.findIndex(item => item === 'l' || item === 'r');
    if(index === -1){
        return [];
    }else if(str_list[index] === 'l') {
        return str_list.slice(0, index);    
    } 

    else {
        return str_list.slice(index + 1);
    }
}