describe( 'Object', function() {

    describe( 'browser support check (is a function)', function() {
        var Func = [
            'apply',
            'call',
            'getPrototypeOf',
            'getOwnPropertyDescriptor',
            'getOwnPropertyNames',
            'create',
            'defineProperty',
            'defineProperties',
            'seal',
            'freeze',
            'preventExtensions',
            'isSealed',
            'isFrozen',
            'isExtensible',
            'keys'
        ];

        var ProtoFunc = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable'
        ];

        _( Func ).each( function( key ) {
            it( 'Object.' + key + '()', function() {
                expect( Object[ key ] ).to.be.a( 'function' );
            });
        });

        _( ProtoFunc ).each( function( key ) {
            it( 'Object.prototype.' + key + '()', function() {
                expect( Object.prototype[ key ] ).to.be.a( 'function' );
            });
        });
    });

});
