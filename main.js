// window.addEventListener('load',(e)=>{
//     e.preventDefault();
    const form = document.getElementById('passgen');
    const resultdom = document.getElementById('result-password');
    const btndom = document.getElementById('copy');
    const lengthdom = document.getElementById('passlen');
    const symboldom = document.getElementById('symbols');
    const uppercasedom = document.getElementById('uppercase');
    const generatedom = document.getElementById('genbtn');
    //console.log(lengthdom);

    function createarray(low, high)
    {
        const arr = [];
        for(var i=low;i<=high;i++)
        {
            arr.push(i);
        }
        return arr;
    }
    function getpassword(len, symb , upper)
    {
        const loweralphabet = createarray(97,122);
        const upperalphabet = createarray(65,90);
        const symbolarr = createarray(33,47);
        const numberarr = createarray(48, 57);
        let charcode = loweralphabet;
        charcode = charcode.concat(numberarr);
        if(upper == true){
            charcode = charcode.concat(upperalphabet);
        }
        if(symb){
            charcode = charcode.concat(symbolarr);
        }
        console.log(charcode);
        const generatedchar = [];

        for(var i=0;i<len;i++)
        {
            const code = charcode[Math.floor(Math.random()*charcode.length)];
            generatedchar.push(String.fromCharCode(code));
        }
        return generatedchar.join("");
    }

    btndom.addEventListener('click', (e)=>{
        const textarea = document.createElement("textarea");
        const passwordToCopy = resultdom.value;

        console.log(passwordToCopy);
        textarea.value = passwordToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("Password Copied to Clipboard:- " + passwordToCopy);
    });

    form.addEventListener('submit' ,(e)=>{
        e.preventDefault();
        // console.log(lengthdom.value);
        if(lengthdom.value < 6 || lengthdom.value > 12)
        {
            alert("Enter Proper Length");
            return;
        }
        // console.log(lengthdom.value);
        const charlen = lengthdom.value;
        const inclsymbol = symboldom.checked;
        const inclupper = uppercasedom.checked;
        const passwordval = getpassword(charlen , inclsymbol , inclupper);
        console.log(passwordval);
        resultdom.value = passwordval;
    
    });
// });


