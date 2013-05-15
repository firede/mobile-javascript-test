describe( 'Object', function() {

    describe( 'browser support check (is a function)', function() {
        var ObjectFunc = [
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

        var ObjectProtoFunc = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable'
        ];

        _( ObjectFunc ).each( function( key ) {
            it( 'Object.' + key + '()', function() {
                expect( Object[ key ] ).to.be.a( 'function' );
            });
        });

        _( ObjectProtoFunc ).each( function( key ) {
            it( 'Object.prototype.' + key + '()', function() {
                expect( Object.prototype[ key ] ).to.be.a( 'function' );
            });
        });
    });

});
