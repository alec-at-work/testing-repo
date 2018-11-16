/*** DCT BUTTON CONTROLS ***/

    // THIS SIMULATES THE DYNAMIC COMPAREs TABLE FUNCTIONALITY
    // NEED TO GET MORE INFO ON WHAT WILL BE APPLIED TO THE ELEMENTS TO HIDE THEM

$('[data-dct-button]').click(function(e){
    
    // var thisButton = $(this).attr('id');
    var thisButton = $(this).attr('data-dct-button');
    var checkStr = '[data-FEE-function="' + thisButton + '"]';
    var checkCol = $(checkStr);

    var checkVis = checkCol.is(':visible');
    //   console.log($(this).attr('id') + " is " + (checkCol.is(':visible') ? 'visible' : 'not visible'));

    var controlType = 'product';
    var featType = (thisButton === 'features' || thisButton === 'pricing') ? true : false;
    
    if (featType) {
        controlType = 'feature';
    }

    if (checkVis) {
        $('[data-FEE-function="' + thisButton + '"]').css('display','none');
        $('[data-wat-dynamic-' + controlType + '="' + thisButton + '"]').attr('data-wat-dynamic-exposed',false);
    } 
    else {
        $('[data-FEE-function="' + thisButton + '"]').css('display','');
        $('[data-wat-dynamic-' + controlType + '="' + thisButton + '"]').attr('data-wat-dynamic-exposed',true);
    }

});