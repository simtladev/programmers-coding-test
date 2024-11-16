function solution(today, terms, privacies,i) {
    const termsObject = Object.fromEntries(terms.map((v)=> v.split(" ")));
    
    const answer = privacies.reduce((result, privacy, i)=>{
        const [privacyDate, term] = privacy.split(" ");
        const termDate = +termsObject[term]
        let [year, month, day] = privacyDate.split(".").map((v)=> +v);
        month += termDate;
        if(month > 12){
            year += Math.floor(month / 12);
            month = month % 12;
        }
        const [tYear, tMonth, tDay] = today.split(".");
        
        const a = new Date(year, month, day);
        const b = new Date(tYear, tMonth, tDay);
        if(a.getTime() <= b.getTime()){
            result.push(i + 1);
        }
        
        return result;
    },[]);
    
    return answer;
}