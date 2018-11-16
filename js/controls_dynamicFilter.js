/*** DYNAMIC FILTERING CONTROLS ****/

// function to render the visiblity
var render = function(){
    
    // ons
    var onGroup = $('.filter-option-tag').not('.off');
    var ons = [];
     $.each(onGroup, function(index, obj){
       var value = $(obj).attr('data-wat-dynamic-filter-option');
       ons.push(value);
    });
    
    // offs
    var offGroup = $('.off');
    var offs = [];
     $.each(offGroup, function(index, obj){
       var value = $(obj).attr('data-wat-dynamic-filter-option');
       offs.push(value);
    });

    var contents = $('.content div');
    $.each(contents, function(index, obj){
       // hide if OFF
       for (i in offs) {
            if ($(obj).hasClass((offs[i]).toLowerCase()) && !$(obj).hasClass('hidden')) {
                $(obj).addClass('hidden');
            }
       }
       // show if ON
       for (j in ons) {
            if ($(obj).hasClass((ons[j]).toLowerCase()) && $(obj).hasClass('hidden')) {
                $(obj).removeClass('hidden');
            }
       }

    });
};

// toggle the filters on click
$('.filter-option-tag').on('click', function(e){
    var tar = $(e.target);
    var selected = tar.hasClass('off') ? true : false;
    if (!selected) {
        tar.addClass('off');
        tar.attr('data-wat-dynamic-filter-selected','false');
    }
    else {
        tar.removeClass('off');
        tar.attr('data-wat-dynamic-filter-selected','true');
    }
    render();
});

setTimeout(function(){
    render();    
},500);