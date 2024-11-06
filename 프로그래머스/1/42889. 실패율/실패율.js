function solution(N, stages) {
    const stageObject = stages.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    const failureRates = {};
    let playersRemaining = stages.length;

    for (let i = 1; i <= N; i++) {
        const playersOnStage = stageObject[i] || 0;
        failureRates[i] = playersOnStage / playersRemaining;
        playersRemaining -= playersOnStage;
    }

    return Object.entries(failureRates)
        .sort((a, b) => b[1] - a[1] || a[0] - b[0])
        .map(v => +v[0]);
}