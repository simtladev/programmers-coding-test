function solution(wallpaper) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        minX = Math.min(minX, j);
        maxX = Math.max(maxX, j);
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
  }

  return [minY, minX, maxY + 1, maxX + 1];
}