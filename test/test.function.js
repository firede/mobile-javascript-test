describe( 'Function', function() {

    describe( 'browser support check (is a function)', function() {
        var FunctionProtoFunc = [
            'toString',
            'apply',
            'call',
            'bind'
        ];

        _( FunctionProtoFunc ).each( function( key ) {
            it( 'Function.prototype.' + key + '()', function() {
                expect( Function.prototype[ key ] ).to.be.a( 'function' );
            });
        });
    });

});
