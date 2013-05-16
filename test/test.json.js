describe( 'JSON', function() {

    describe( 'browser support check (is a function)', function() {
        var Func = [
            'parse',
            'stringify'
        ];

        _( Func ).each( function( key ) {
            it( 'JSON.' + key + '()', function() {
                expect( JSON[ key ] ).to.be.a( 'function' );
            });
        });
    });

});
