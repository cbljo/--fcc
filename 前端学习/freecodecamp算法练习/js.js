$(document).ready(function () {
    $('#submit').click(function () {
        var value = $('#quest option:selected') .val();
        if(value == 'ReverseAString'){
            $('#rul').html('<pre>' +
                'function reverseString(str) {\n' +
                '  // 请把你的代码写在这里\n' +
                '  return str;\n' +
                '}\n' +
                '\n' +
                'reverseString("hello");\n</pre>')
        }
    })
})
