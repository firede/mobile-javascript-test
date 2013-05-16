describe( 'Number', function() {

    describe( 'browser support check (is a function)', function() {
        var ProtoFunc = [
            'toString',
            'toLocaleString',
            'valueOf',
            'toFixed',
            'toExponential',
            'toPrecision'
        ];

        _( ProtoFunc ).each( function( key ) {
            it( 'Number.prototype.' + key + '()', function() {
                expect( Number.prototype[ key ] ).to.be.a( 'function' );
            });
        });
    });

});
