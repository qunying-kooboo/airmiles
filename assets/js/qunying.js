$(function(){
    //Checkbox
    $('div.checkbox').click(function(){
        
        if ($(this).hasClass('all')) {
            
            if ($('input',this).attr('checked')) {
                
                $('td.lined div.checkbox',$(this).closest('div.line_table')).removeClass('checked');
                $('td.lined div.checkbox',$(this).closest('div.line_table')).addClass('checked');
                $('td.lined div.checkbox input',$(this).closest('div.line_table')).attr('checked',true);
                $(this).addClass('checked');    
            
            }else {
                
                $('td.lined div.checkbox',$(this).closest('div.line_table')).removeClass('checked');
                $('td.lined div.checkbox input',$(this).closest('div.line_table')).attr('checked',false);
                $(this).removeClass('checked');
                
                }
        
            }else if ($('input',this).attr('checked')) {
                
                $(this).addClass('checked');
                
                }else {
                    
                    $(this).removeClass('checked');
                    $('th.lined div.checkbox',$(this).closest('div.line_table')).removeClass('checked');
                    $('th.lined div.checkbox input',$(this).closest('div.line_table')).attr('checked',false);
                    
                    }
    
    });

    
    /* Lightbox */
    $('.fancybox').fancybox({
        maxWidth    : 900,
        maxHeight   : 600,
        fitToView   : false,
        width       : 'auto',
        height      : 'auto',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
})