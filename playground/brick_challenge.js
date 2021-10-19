function doesBrickFit(a, b, c, w, h) {

    const brick = [a, b, c];
    const wMatches = [];
    const hMatches = [];

    for (let i = 0; i < brick.length; i ++) {
        if (brick[i] <= w) {
            wMatches.push(i);
        }
        if (brick[i] <= h) {
            hMatches.push(i)
        }
    }

    for (let i = 0; i < wMatches.length; i++) {
        for (let j = 0; j < hMatches.length; j++) {
            if (i != j) {
                return true;
            }
        }
    }

    return false;
    console.log(wMatches, hMatches)

}

function doesBric(a,b,c, w,h) {
	let s = (a,b) => a-b;
	let brick = [a,b,c].sort(s);
	let hole = [w,h].sort(s);
	return brick[0]<=hole[0] && brick[1]<=hole[1];
}