function bin2dec(binary) {
    if (!(/^[01]+$/.test(binary)))
    {
        console.log(`${binary} is an invalid binary format, the chars informed must be just 0 or 1`)
        return
    }

    console.log(`Binary = ${binary}`)
    let result = 0
    let exp = binary.length-1
    for (i=0;i<=binary.length-1;i++)
    {
        console.log(binary.charAt(i) + ' * ' + '2^' + exp + '(' + Math.pow(2, exp) + ')')
        result += binary.charAt(i) * Math.pow(2, exp)
        exp--
    }
    console.log(`Decimal = ${result}`)
}

bin2dec("14")