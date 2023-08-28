//직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ");
    let star = ""
    
    for(let i = 0; i < b; i++) {
        for(let j = 0; j < a; j++) {
            star = star + "*"
        }
        star = star + "\n"
    }
    console.log(star);
    return star
});