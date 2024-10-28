function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach((size) => {
        size.sort((a, b) => a - b);
        const [width, height] = size;
        if (maxWidth < width) maxWidth = width;
        if (maxHeight < height) maxHeight = height;
    });
    
    const answer = maxWidth * maxHeight;
    return answer;
}