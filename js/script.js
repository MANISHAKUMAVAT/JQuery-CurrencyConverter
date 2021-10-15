function converter()
{
    var dollar = parseInt(document.getElementById('dollar').value);
    var convert = document.getElementById('convert').value;
    var cv = document.getElementById('cv12');

    if(convert == 1)
    {
        cv.value = dollar * 110.76;
        cv.type = "text";
    }

    if(convert == 2)
    {
        cv.value = dollar * 64.35;
        cv.type = "text";
    }

    if(convert == 3)
    {
        cv.value = dollar * 0.82;
        cv.type = "text";
    }

    if(convert == 4)
    {
        cv.value = dollar * 0.72;
        cv.type = "text";
    }

    if(convert == 5)
    {
        cv.value = dollar * 108.58;
        cv.type = "text";
    }

    if(convert == 6)
    {
        cv.value = dollar * 1.26;
        cv.type = "text";
    }
            
}