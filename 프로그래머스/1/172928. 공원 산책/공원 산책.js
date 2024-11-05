class Park {
    constructor(park) {
        this.grid = park;
        this.y = park.findIndex(row => row.includes("S"));
        this.x = park[this.y].indexOf("S");
        this.directions = {
            E: [0, 1],
            W: [0, -1],
            S: [1, 0],
            N: [-1, 0],
        };
    }

    move(direction, steps) {
        const [dy, dx] = this.directions[direction];
        let newY = this.y;
        let newX = this.x;
        
        for (let i = 0; i < steps; i++) {
            newY += dy;
            newX += dx;
            
            if (
                newY < 0 || newY >= this.grid.length ||
                newX < 0 || newX >= this.grid[0].length ||
                this.grid[newY][newX] === 'X'
            ) return; 
        }

        this.y = newY;
        this.x = newX;
    }
    
    get location() {
        return [this.y, this.x];
    }
}

function solution(park, routes) {
    const robot = new Park(park);    
    
    for (const route of routes) {
        const [direction, steps] = route.split(" ");
        robot.move(direction, parseInt(steps));
    }
    
    return robot.location;
}