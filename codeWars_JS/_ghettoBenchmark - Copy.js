// JavaScript Source Code



var str = cleanse(function () {/*!
<p>Line 1</p>
<span>Line 2</span>
<h2>Line 3</h2>
*/});

function cleanse(m) {
    return m.toString()
        //.replace(/^[^\/]+\/\*!?/, "")
        //.replace(/\*\/[^\/]+$/, "")
        .replace(/(\r\n|\n|\r)/g, "")
}

console.log(str);
console.log("test");