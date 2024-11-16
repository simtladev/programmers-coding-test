function solution(video_len, pos, op_start, op_end, commands) {
    let posDate = pos.split(":").reduce((acc, time) => acc * 60 + +time, 0);;
    let opStartDate = op_start.split(":").reduce((acc, time) => acc * 60 + +time, 0);;
    let opEndDate = op_end.split(":").reduce((acc, time) => acc * 60 + +time, 0);;
    let videoDate = video_len.split(":").reduce((acc, time) => acc * 60 + +time, 0);;
    

    
    for(const command of commands){
        if(opStartDate <= posDate && posDate <=opEndDate){
            posDate = opEndDate;
        }
        
        
        if(command === "next"){
            if(posDate + 10 > videoDate){
                posDate = videoDate;
            }else{
                posDate += 10;
            }
            
        }else if(command === "prev"){
           if(posDate - 10 < 0){
                posDate = 0;
            }else{
                posDate -= 10;
            }
        }
        
        if(opStartDate <= posDate && posDate <=opEndDate){
            posDate = opEndDate;
        }
    }

    const m = (Math.floor(posDate / 60)).toString().padStart(2,0);
    const s = (posDate % 60).toString().padStart(2,0);
    
    const answer = `${m}:${s}`;
    
    
    
    return answer;
}