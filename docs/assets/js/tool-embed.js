(function(){

/* ////////////////////////////////////////////////// */

$( document ).ready
(
    function ( )
    {
        var deferred = $.Deferred( );
        $.when( deferred ).then( function ( ) { $( '.loaded-b' ).attr( 'style', 'display:block !important' ) } );
        Tool_Embed( deferred );
    }
);

/* ////////////////////////////////////////////////// */

const Tool_Embed_conf =
{
    
};

/* ////////////////////////////////////////////////// */

function Tool_Embed ( deferred )
{
    var that = null;
    
    // div
    
    var div_default = $( '#tool_embed_div_default' );
    
    var url    = div_default.data( 'url'    );
    var height = div_default.data( 'height' );
    
    // frame
    
    var frame_default = $( '<iframe src="' + url + '" style="min-height:' + height + '"></iframe>' );
    
    frame_default.appendTo( div_default );
    frame_default.one( 'load',  function ( ) { if ( typeof deferred !== 'undefined' ) deferred.resolve( ) } );
  //frame_default.one( 'error', function ( ) { if ( typeof deferred !== 'undefined' ) deferred.resolve( ) } );
    
    frame_default.on
    (
        'load',
        function ( )
        {
            try
            {
                var host  = window.location.host;
                var hostb = this.contentWindow.location.host;
                
                if ( host && hostb && host == hostb )
                {
                  //this.contentWindow.stop( );
                    frame_default.contents( ).find( '*' ).hide( );
                    this.contentWindow.history.go( -1 );
                    window.location.replace( this.contentWindow.location.href );
                }
            }
            catch ( error )
            {
                // x
            }
        }
    );
    
    //
    
    return that;
}

/* ////////////////////////////////////////////////// */

})()


